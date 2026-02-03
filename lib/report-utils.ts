import { baseQuizQuestions, getQuizQuestions } from "./quiz-data";

const REPORT_DRAFT_KEY = "relatioReportDraft";

export interface ReportDraft {
  answers: Record<number, unknown>;
  email?: string;
}

export interface GeneratedReport {
  partnerName?: string;
  relationshipStatus: string;
  areasToImprove: string[];
  challenges: string[];
  communicationStyle: string;
  conflictStyle: string;
  loveLanguage: string;
  strengths: string[];
  relationshipGoals: string;
  satisfactionLevel: number;
  commitmentLevel: number;
  keyInsights: string[];
  personalizedTips: string[];
}

export function getReportDraft(): ReportDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(REPORT_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ReportDraft;
    if (!parsed.answers || typeof parsed.answers !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setReportDraft(draft: Partial<ReportDraft>): void {
  if (typeof window === "undefined") return;
  const existing = getReportDraft();
  const merged: ReportDraft = {
    answers: draft.answers ?? existing?.answers ?? {},
    email: draft.email ?? existing?.email,
  };
  localStorage.setItem(REPORT_DRAFT_KEY, JSON.stringify(merged));
}

function getOptionText(
  questionId: number,
  value: unknown,
  partnerGender?: string
): string {
  const questions = partnerGender
    ? getQuizQuestions(partnerGender)
    : baseQuizQuestions;
  const q = questions.find((x) => x.id === questionId);
  if (!q?.options) return String(value);
  const opt = q.options.find((o) => o.value === value);
  return opt?.text ?? String(value);
}

export function generateReportFromAnswers(
  answers: Record<number, unknown>
): GeneratedReport {
  const partnerGender = answers[1] as string | undefined; // question 2 = partner selection
  const get = (qId: number) => answers[qId - 1] ?? answers[qId];
  const getText = (qId: number) => {
    const v = get(qId);
    return v != null ? getOptionText(qId, v, partnerGender) : "Not specified";
  };
  const getArray = (qId: number): string[] => {
    const v = get(qId);
    if (Array.isArray(v))
      return v
        .map((x) => getOptionText(qId, x, partnerGender))
        .filter(Boolean);
    if (v != null) return [getOptionText(qId, v, partnerGender)];
    return [];
  };

  const partnerName =
    typeof get(30) === "string" ? String(get(30)).trim() : undefined;
  const relationshipStatus = getText(13);
  const areasToImprove = getArray(14);
  const challenges = getArray(20);
  const communicationStyle = getText(15);
  const conflictStyle = getText(16);
  const loveLanguage = getText(21);
  const strengths = getArray(18);
  const relationshipGoals = getText(28);
  const satisfactionLevel = Number(get(17)) || 0;
  const commitmentLevel = Number(get(22)) || 0;

  const keyInsights: string[] = [];
  if (getText(4)) keyInsights.push(`You tend to make decisions with your ${getText(4).toLowerCase()}.`);
  if (getText(9)) keyInsights.push(`Your partner is more ${getText(9).toLowerCase()}.`);
  if (relationshipGoals) keyInsights.push(`Your relationship goal aligns with: ${relationshipGoals}.`);
  if (satisfactionLevel >= 4) keyInsights.push("You're generally satisfied with your relationship — a solid foundation to build on.");
  else if (satisfactionLevel > 0) keyInsights.push("There's room to grow your satisfaction — the right plan can help.");

  const personalizedTips: string[] = [];
  if (areasToImprove.includes("Better communication") || areasToImprove.includes("communication"))
    personalizedTips.push("Focus on active listening and expressing needs clearly.");
  if (areasToImprove.includes("More emotional intimacy") || areasToImprove.includes("emotional-intimacy"))
    personalizedTips.push("Create space for vulnerable conversations and shared feelings.");
  if (challenges.some((c) => c.toLowerCase().includes("communication")))
    personalizedTips.push("Consider scheduling regular check-ins to prevent communication breakdowns.");
  if (conflictStyle.includes("cool down"))
    personalizedTips.push("Use your natural cool-down approach — give each other space, then reconnect.");
  if (loveLanguage.includes("quality time"))
    personalizedTips.push("Prioritize undivided quality time together as a core part of your plan.");
  if (strengths.length > 0)
    personalizedTips.push(`Leverage your strength in ${strengths[0]} as you work through the plan.`);
  if (personalizedTips.length === 0)
    personalizedTips.push("Follow your personalized plan step-by-step for best results.");
  if (commitmentLevel >= 4)
    personalizedTips.push("Your high commitment level is a strong predictor of success — keep it up!");

  return {
    partnerName,
    relationshipStatus,
    areasToImprove,
    challenges,
    communicationStyle,
    conflictStyle,
    loveLanguage,
    strengths,
    relationshipGoals,
    satisfactionLevel,
    commitmentLevel,
    keyInsights,
    personalizedTips,
  };
}
