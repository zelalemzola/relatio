export interface QuizOption {
  text: string;
  value: string;
  emoji?: string;
  image?: string;
}

export interface QuizQuestionType {
  id: number;
  type:
    | "age-selection"
    | "partner-selection"
    | "decision-making"
    | "elements"
    | "emoji-options"
    | "social-proof"
    | "multi-select"
    | "text-only"
    | "rating-scale"
    | "text-input";
  title?: string;
  subtitle?: string;
  options?: QuizOption[];
  maxSelections?: number;
  ratingRange?: {
    min: number;
    max: number;
    minLabel: string;
    maxLabel: string;
  };
  placeholder?: string;
  genderSpecific?: {
    male?: Partial<QuizQuestionType>;
    female?: Partial<QuizQuestionType>;
  };
}

export const baseQuizQuestions: QuizQuestionType[] = [
  {
    id: 1,
    type: "age-selection",
    title: "LET'S CREATE YOUR PERSONAL PLAN TO STRENGTHEN YOUR RELATIONSHIP",
    options: [
      { text: "Age: 18-29", value: "18-29", emoji: "👫" },
      { text: "Age: 30-44", value: "30-44", emoji: "👨‍👩‍👧" },
      { text: "Age: 45-54", value: "45-54", emoji: "👨‍👩‍👧‍👦" },
      { text: "Age: 55+", value: "55+", emoji: "👴👵" },
    ],
  },
  {
    id: 2,
    type: "partner-selection",
    title: "Let's tailor your plan",
    options: [
      { text: "A man", value: "man", emoji: "🤵" },
      { text: "A woman", value: "woman", emoji: "👰" },
    ],
  },
  {
    id: 3,
    type: "social-proof",
    title: "120,000+ people have chosen Relatio",
  },
  {
    id: 4,
    type: "decision-making",
    title: "Do you make decisions with your head or heart?",
    options: [
      { text: "Heart", value: "heart", emoji: "💖" },
      { text: "Head", value: "head", emoji: "🧠" },
      { text: "Both", value: "both", emoji: "🤝" },
    ],
  },
  {
    id: 5,
    type: "emoji-options",
    title: "Can you sometimes be stubborn in discussions?",
    options: [
      { text: "I can be", value: "yes", emoji: "😏" },
      {
        text: "Rarely, you wouldn't even notice",
        value: "rarely",
        emoji: "😅",
      },
      { text: "Never", value: "never", emoji: "😇" },
    ],
  },
  {
    id: 6,
    type: "emoji-options",
    title: "Do you make efforts to always look and feel good?",
    options: [
      { text: "I really don't", value: "no", emoji: "😐" },
      { text: "Only on special occasions", value: "sometimes", emoji: "😊" },
      { text: "I do", value: "yes", emoji: "😍" },
    ],
  },
  {
    id: 7,
    type: "emoji-options",
    title: "Do you believe in soulmates?",
    options: [
      { text: "Yes", value: "yes", emoji: "🥰" },
      { text: "No", value: "no", emoji: "😐" },
      { text: "Not sure", value: "maybe", emoji: "🤔" },
    ],
  },
  {
    id: 8,
    type: "elements",
    title: "What element is closest to you?",
    options: [
      {
        text: "Water",
        value: "water",
        image: "/water.png",
      },
      {
        text: "Fire",
        value: "fire",
        image: "/fire.png",
      },
      {
        text: "Earth",
        value: "earth",
        image: "/earth.png",
      },
      {
        text: "Air",
        value: "air",
        image: "/air.png",
      },
    ],
  },
  {
    id: 9,
    type: "emoji-options",
    title: "Is your partner more rational or emotional?",
    genderSpecific: {
      male: {
        title: "Is your husband more rational or emotional?",
      },
      female: {
        title: "Is your wife more rational or emotional?",
      },
    },
    options: [
      { text: "More rational", value: "rational", emoji: "🧠" },
      { text: "More emotional", value: "emotional", emoji: "💖" },
      { text: "Combination of both", value: "both", emoji: "🤔" },
    ],
  },
  {
    id: 10,
    type: "emoji-options",
    title: "Your partner rather...",
    genderSpecific: {
      male: {
        title: "Your husband rather...",
      },
      female: {
        title: "Your wife rather...",
      },
    },
    options: [
      {
        text: "Likes to be the center of attention",
        value: "attention",
        emoji: "😊",
      },
      { text: "Tries to avoid attention", value: "avoid", emoji: "😅" },
    ],
  },
  {
    id: 11,
    type: "rating-scale",
    title: "Rate how open your partner is to new experiences",
    genderSpecific: {
      male: {
        title: "Rate how open your husband is to new experiences",
      },
      female: {
        title: "Rate how open your wife is to new experiences",
      },
    },
    ratingRange: {
      min: 1,
      max: 5,
      minLabel: "Not at all",
      maxLabel: "Very much",
    },
  },
  {
    id: 12,
    type: "text-only",
    title: "How long have you been together as a couple?",
    options: [
      { text: "Less than 6 months", value: "6months-" },
      { text: "6 months to 1 year", value: "6months-1year" },
      { text: "1-3 years", value: "1-3years" },
      { text: "3-5 years", value: "3-5years" },
      { text: "More than 5 years", value: "5years+" },
    ],
  },
  {
    id: 13,
    type: "text-only",
    title: "What's your current relationship status?",
    options: [
      { text: "Dating", value: "dating" },
      { text: "In a committed relationship", value: "committed" },
      { text: "Engaged", value: "engaged" },
      { text: "Married", value: "married" },
      { text: "It's complicated", value: "complicated" },
    ],
  },
  {
    id: 14,
    type: "multi-select",
    title: "What areas would you like to improve in your relationship?",
    subtitle: "(Choose up to 3)",
    maxSelections: 3,
    options: [
      { text: "Better communication", value: "communication", emoji: "💬" },
      {
        text: "More emotional intimacy",
        value: "emotional-intimacy",
        emoji: "💕",
      },
      { text: "Physical intimacy", value: "physical-intimacy", emoji: "🔥" },
      { text: "Conflict resolution", value: "conflict", emoji: "🤝" },
      { text: "Quality time together", value: "quality-time", emoji: "⏰" },
      { text: "Trust building", value: "trust", emoji: "🛡️" },
      { text: "Future planning", value: "future", emoji: "🎯" },
    ],
  },
  {
    id: 15,
    type: "emoji-options",
    title: "How would you describe your communication style?",
    options: [
      { text: "Direct and straightforward", value: "direct", emoji: "🎯" },
      { text: "Gentle and considerate", value: "gentle", emoji: "🌸" },
      { text: "Passionate and expressive", value: "passionate", emoji: "🔥" },
      { text: "Quiet and thoughtful", value: "thoughtful", emoji: "🤔" },
    ],
  },
  {
    id: 16,
    type: "emoji-options",
    title: "How do you typically handle disagreements?",
    options: [
      { text: "Talk it out immediately", value: "immediate", emoji: "💬" },
      { text: "Take time to cool down first", value: "cool-down", emoji: "🧘" },
      { text: "Avoid conflict when possible", value: "avoid", emoji: "😌" },
      { text: "Get emotional and passionate", value: "emotional", emoji: "😤" },
    ],
  },
  {
    id: 17,
    type: "rating-scale",
    title: "How satisfied are you with your current relationship?",
    ratingRange: {
      min: 1,
      max: 5,
      minLabel: "Not satisfied",
      maxLabel: "Very satisfied",
    },
  },
  {
    id: 18,
    type: "emoji-options",
    title: "What's your biggest relationship strength?",
    genderSpecific: {
      male: {
        options: [
          { text: "I'm a great listener", value: "listener", emoji: "👂" },
          { text: "I'm very supportive", value: "supportive", emoji: "🤗" },
          {
            text: "I'm romantic and thoughtful",
            value: "romantic",
            emoji: "💝",
          },
          {
            text: "I'm reliable and trustworthy",
            value: "reliable",
            emoji: "🛡️",
          },
          { text: "I bring humor and fun", value: "humor", emoji: "😄" },
        ],
      },
      female: {
        options: [
          {
            text: "I'm very caring and nurturing",
            value: "caring",
            emoji: "🤱",
          },
          {
            text: "I'm an excellent communicator",
            value: "communicator",
            emoji: "💬",
          },
          {
            text: "I'm passionate and loving",
            value: "passionate",
            emoji: "❤️",
          },
          {
            text: "I'm independent and strong",
            value: "independent",
            emoji: "💪",
          },
          {
            text: "I'm understanding and patient",
            value: "understanding",
            emoji: "🌸",
          },
        ],
      },
    },
    options: [
      { text: "I'm a great listener", value: "listener", emoji: "👂" },
      { text: "I'm very supportive", value: "supportive", emoji: "🤗" },
      { text: "I'm romantic and thoughtful", value: "romantic", emoji: "💝" },
      { text: "I'm reliable and trustworthy", value: "reliable", emoji: "🛡️" },
      { text: "I bring humor and fun", value: "humor", emoji: "😄" },
    ],
  },
  {
    id: 19,
    type: "multi-select",
    title: "What would make your relationship even better?",
    subtitle: "(Choose up to 3)",
    maxSelections: 3,
    genderSpecific: {
      male: {
        options: [
          {
            text: "More appreciation from her",
            value: "appreciation",
            emoji: "🙏",
          },
          {
            text: "Better understanding of her needs",
            value: "understanding",
            emoji: "💡",
          },
          { text: "More physical affection", value: "affection", emoji: "🤗" },
          {
            text: "Shared hobbies and interests",
            value: "hobbies",
            emoji: "🎯",
          },
          { text: "Less stress and more fun", value: "fun", emoji: "🎉" },
          { text: "Better work-life balance", value: "balance", emoji: "⚖️" },
        ],
      },
      female: {
        options: [
          {
            text: "More emotional support",
            value: "emotional-support",
            emoji: "💕",
          },
          { text: "Better communication", value: "communication", emoji: "💬" },
          {
            text: "More quality time together",
            value: "quality-time",
            emoji: "⏰",
          },
          { text: "Feeling more desired", value: "desired", emoji: "💖" },
          { text: "More romance and surprises", value: "romance", emoji: "🌹" },
          {
            text: "Shared future planning",
            value: "future-planning",
            emoji: "🏡",
          },
        ],
      },
    },
    options: [
      {
        text: "More emotional support",
        value: "emotional-support",
        emoji: "💕",
      },
      { text: "Better communication", value: "communication", emoji: "💬" },
      {
        text: "More quality time together",
        value: "quality-time",
        emoji: "⏰",
      },
      { text: "Feeling more desired", value: "desired", emoji: "💖" },
      { text: "More romance and surprises", value: "romance", emoji: "🌹" },
      { text: "Shared future planning", value: "future-planning", emoji: "🏡" },
    ],
  },
  {
    id: 20,
    type: "multi-select",
    title: "What challenges are you currently facing?",
    subtitle: "(Choose up to 3)",
    maxSelections: 3,
    options: [
      { text: "Lack of quality time", value: "time", emoji: "⏰" },
      { text: "Communication breakdowns", value: "communication", emoji: "💔" },
      { text: "Different life goals", value: "goals", emoji: "🎯" },
      { text: "Financial stress", value: "financial", emoji: "💰" },
      { text: "Work-life balance issues", value: "work-balance", emoji: "⚖️" },
      {
        text: "Family or external pressures",
        value: "family-pressure",
        emoji: "👨‍👩‍👧‍👦",
      },
    ],
  },
  {
    id: 21,
    type: "emoji-options",
    title: "How do you show love to your partner?",
    genderSpecific: {
      male: {
        title: "How do you show love to your wife/girlfriend?",
      },
      female: {
        title: "How do you show love to your husband/boyfriend?",
      },
    },
    options: [
      { text: "Through words and compliments", value: "words", emoji: "💬" },
      { text: "Through physical touch", value: "touch", emoji: "🤗" },
      { text: "Through acts of service", value: "service", emoji: "🛠️" },
      { text: "Through gifts and surprises", value: "gifts", emoji: "🎁" },
      { text: "Through quality time", value: "time", emoji: "⏰" },
    ],
  },
  {
    id: 22,
    type: "rating-scale",
    title: "How committed are you to improving your relationship?",
    ratingRange: {
      min: 1,
      max: 5,
      minLabel: "Somewhat committed",
      maxLabel: "Extremely committed",
    },
  },
  {
    id: 23,
    type: "multi-select",
    title: "What shared activities do you enjoy together?",
    maxSelections: 6,
    options: [
      { text: "Watching movies or shows", value: "movies", emoji: "🍿" },
      { text: "Cooking together", value: "cooking", emoji: "👨‍🍳" },
      { text: "Traveling and exploring", value: "travel", emoji: "✈️" },
      { text: "Exercise or sports", value: "exercise", emoji: "🏃‍♀️" },
      { text: "Reading or learning", value: "learning", emoji: "📚" },
      { text: "Social activities with friends", value: "social", emoji: "👥" },
    ],
  },
  {
    id: 24,
    type: "multi-select",
    title: "What does your partner appreciate most about you?",
    genderSpecific: {
      male: {
        title: "What does your wife/girlfriend appreciate most about you?",
      },
      female: {
        title: "What does your husband/boyfriend appreciate most about you?",
      },
    },
    maxSelections: 5,
    options: [
      { text: "My sense of humor", value: "humor", emoji: "😄" },
      { text: "My caring nature", value: "caring", emoji: "🤗" },
      { text: "My intelligence", value: "intelligence", emoji: "🧠" },
      { text: "My loyalty", value: "loyalty", emoji: "🛡️" },
      { text: "My passion", value: "passion", emoji: "🔥" },
    ],
  },
  {
    id: 25,
    type: "emoji-options",
    title: "What was your relationship like in the beginning?",
    options: [
      { text: "Passionate and intense", value: "passionate", emoji: "🔥" },
      { text: "Sweet and romantic", value: "romantic", emoji: "💕" },
      { text: "Fun and playful", value: "playful", emoji: "😄" },
      { text: "Comfortable and easy", value: "comfortable", emoji: "😌" },
      { text: "Exciting and adventurous", value: "exciting", emoji: "🎢" },
    ],
  },
  {
    id: 26,
    type: "multi-select",
    title: "How do you prefer to spend quality time together?",
    maxSelections: 6,
    options: [
      {
        text: "Intimate conversations at home",
        value: "conversations",
        emoji: "🏠",
      },
      { text: "Going on adventures", value: "adventures", emoji: "🏔️" },
      { text: "Romantic dates", value: "dates", emoji: "🍷" },
      { text: "Relaxing and unwinding", value: "relaxing", emoji: "🛋️" },
      { text: "Trying new experiences", value: "new-experiences", emoji: "🎭" },
      { text: "Working on projects together", value: "projects", emoji: "🔨" },
    ],
  },
  {
    id: 27,
    type: "multi-select",
    title: "What are your partner's best qualities?",
    genderSpecific: {
      male: {
        title: "What are your husband's/boyfriend's best qualities?",
      },
      female: {
        title: "What are your wife's/girlfriend's best qualities?",
      },
    },
    maxSelections: 5,
    options: [
      { text: "Kind and compassionate", value: "kind", emoji: "💕" },
      { text: "Strong and reliable", value: "strong", emoji: "💪" },
      { text: "Intelligent and wise", value: "intelligent", emoji: "🧠" },
      { text: "Funny and entertaining", value: "funny", emoji: "😄" },
      { text: "Supportive and encouraging", value: "supportive", emoji: "🤗" },
    ],
  },
  {
    id: 28,
    type: "elements",
    title: "Which image best represents your relationship goals?",
    options: [
      {
        text: "Adventure Together",
        value: "adventure",
        image: "/air.png",
      },
      {
        text: "Cozy Partnership",
        value: "cozy",
        image: "/fire.png",
      },
      {
        text: "Peaceful Harmony",
        value: "peaceful",
        image: "/water.png",
      },
      {
        text: "Stable Foundation",
        value: "stable",
        image: "/earth.png",
      },
    ],
  },
  {
    id: 29,
    type: "rating-scale",
    title: "How much do you want to strengthen your relationship?",
    ratingRange: {
      min: 1,
      max: 5,
      minLabel: "Somewhat",
      maxLabel: "Very much!",
    },
  },
  {
    id: 30,
    type: "text-input",
    title: "What's your partner's name?",
    genderSpecific: {
      male: {
        title: "What's your husband's/boyfriend's name?",
      },
      female: {
        title: "What's your wife's/girlfriend's name?",
      },
    },
    placeholder: "Name",
  },
];

// Function to get questions customized for the selected gender
export function getQuizQuestions(partnerGender?: string): QuizQuestionType[] {
  return baseQuizQuestions.map((question) => {
    if (question.genderSpecific && partnerGender) {
      const genderSpecific =
        question.genderSpecific[partnerGender as "male" | "female"];
      if (genderSpecific) {
        return {
          ...question,
          ...genderSpecific,
          options: genderSpecific.options || question.options,
        };
      }
    }
    return question;
  });
}

// Export the default questions for backward compatibility
export const quizQuestions = baseQuizQuestions;
