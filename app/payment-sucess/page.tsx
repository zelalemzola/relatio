"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Download,
  Heart,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  getReportDraft,
  generateReportFromAnswers,
  type GeneratedReport,
} from "@/lib/report-utils";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") ?? "";
  const plan = searchParams.get("plan") ?? "";
  const [open, setOpen] = useState(false);
  const [report, setReport] = useState<GeneratedReport | null>(null);
  const [email, setEmail] = useState<string>("");
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const draft = getReportDraft();
    if (draft?.answers && Object.keys(draft.answers).length > 0) {
      setReport(generateReportFromAnswers(draft.answers as Record<number, unknown>));
      setEmail(draft.email ?? "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 print:py-6 print:max-w-none">
        {/* Success header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-center mb-10 ${report ? "print:hidden" : ""}`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
            <CheckCircle className="h-9 w-9" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment successful
          </h1>
          {amount && (
            <p className="text-gray-600 mb-4">
              {plan && <span className="font-medium text-purple-600">{plan}</span>}
              {plan && " — "}${amount} paid successfully.
            </p>
          )}
          {!report && (
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              No report data found. Complete the quiz and payment to see your
              personalized Relationship Strengthening Report.
            </p>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 print:hidden"
          >
            <span className="font-bold">
              Re<span className="text-purple-500">l</span>
              <span className="text-pink-500">a</span>
              <span className="text-purple-500">t</span>io
            </span>
          </Link>
        </motion.div>

        {/* Report content */}
        {report && (
          <motion.div
            ref={reportRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="report-print-area space-y-6"
          >
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              {/* Report header */}
              <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Relationship Strengthening Report
                  </h2>
                  <p className="text-sm text-gray-600">
                    {email && `Prepared for ${email}`}
                    {plan && ` · ${plan}`}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Partner & status */}
                {(report.partnerName || report.relationshipStatus) && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {report.partnerName && (
                      <div className="rounded-xl bg-purple-50 p-4">
                        <p className="text-xs font-medium text-purple-700 uppercase tracking-wide mb-1">
                          Partner
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {report.partnerName}
                        </p>
                      </div>
                    )}
                    <div className="rounded-xl bg-purple-50 p-4">
                      <p className="text-xs font-medium text-purple-700 uppercase tracking-wide mb-1">
                        Relationship status
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
                        {report.relationshipStatus}
                      </p>
                    </div>
                  </div>
                )}

                {/* Satisfaction & commitment */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      Satisfaction level
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {report.satisfactionLevel}/5
                    </p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      Commitment to improve
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {report.commitmentLevel}/5
                    </p>
                  </div>
                </div>

                {/* Areas to improve */}
                {report.areasToImprove.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-pink-500" />
                      Areas to improve
                    </h3>
                    <ul className="space-y-2">
                      {report.areasToImprove.map((area: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-purple-500">•</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {report.challenges.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Current challenges
                    </h3>
                    <ul className="space-y-2">
                      {report.challenges.map((challenge: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-pink-500">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Communication & conflict style */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">
                      Communication style
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {report.communicationStyle}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <p className="text-xs font-medium text-gray-500 uppercase mb-1">
                      Conflict handling
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {report.conflictStyle}
                    </p>
                  </div>
                </div>

                {/* Love language */}
                {report.loveLanguage && (
                  <div className="rounded-lg bg-pink-50 border border-pink-100 p-4">
                    <p className="text-xs font-medium text-pink-700 uppercase mb-1">
                      How you show love
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {report.loveLanguage}
                    </p>
                  </div>
                )}

                {/* Strengths */}
                {report.strengths.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Your relationship strengths
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {report.strengths.map((s: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Relationship goals */}
                {report.relationshipGoals && (
                  <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
                    <p className="text-xs font-medium text-purple-700 uppercase mb-1">
                      Relationship goals
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {report.relationshipGoals}
                    </p>
                  </div>
                )}

                {/* Key insights */}
                {report.keyInsights.length > 0 && (
                  <div className="rounded-lg border border-gray-200 p-4 space-y-2">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Key insights
                    </h3>
                    <ul className="space-y-1">
                      {report.keyInsights.map((insight: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700">
                          • {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Personalized tips */}
                <div className="rounded-lg border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-4 space-y-3">
                  <h3 className="text-sm font-semibold text-purple-900">
                    Personalized tips for you
                  </h3>
                  <ul className="space-y-2">
                    {report.personalizedTips.map((tip: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-800"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-xs font-medium">
                          {i + 1}
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Download / Print */}
            <div className="flex flex-wrap gap-3 print:hidden">
              <Button
                onClick={handlePrint}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
              >
                <Download className="h-4 w-4 mr-2" />
                Download / Print report
              </Button>
              <Link href="/">
                <Button variant="outline" className="rounded-full">
                  Back to home
                </Button>
              </Link>
            </div>
          </motion.div>
        )}

        {!report && (
          <div className="print:hidden">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Take quiz
            </Link>
          </div>
        )}
      </div>

      {/* Important popup - show first so user doesn't reload and lose report */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={true}
          className="sm:max-w-md border-purple-200 bg-white print:hidden"
        >
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-green-100 p-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <DialogTitle className="text-lg">
                Payment successful
              </DialogTitle>
            </div>
            <DialogDescription className="text-left text-gray-700 pt-2">
              Please do not reload this page before finishing reading your report
              or before you download your report. If you reload, you may lose
              access to your personalized report and be sent back to the pricing
              page.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full"
            >
              I understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PaymentSuccessFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex items-center gap-2 text-gray-600">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Loading…</span>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<PaymentSuccessFallback />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
