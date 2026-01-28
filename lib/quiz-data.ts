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
}

export const quizQuestions: QuizQuestionType[] = [
  {
    id: 1,
    type: "age-selection",
    title: "LET'S CREATE YOUR PERSONAL PLAN TO REKINDLE YOUR LOVE",
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
    title: "Can you sometimes be arrogant?",
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
    title: "Is your Ex more rational or emotional?",
    options: [
      { text: "More rational", value: "rational", emoji: "🧠" },
      { text: "More emotional", value: "emotional", emoji: "💖" },
      { text: "Combination of both", value: "both", emoji: "🤔" },
    ],
  },
  {
    id: 10,
    type: "emoji-options",
    title: "Your Ex rather...",
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
    title: "Rate how open your Ex is to new experiences",
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
    title: "What was the last time you were together as a couple?",
    options: [
      { text: "Less than a week ago", value: "week" },
      { text: "This month", value: "month" },
      { text: "1-3 months ago", value: "1-3months" },
      { text: "More than 3 months ago", value: "3months+" },
    ],
  },
  {
    id: 13,
    type: "text-only",
    title: "Tell us more about the breakup",
    options: [
      { text: "I was broken up with", value: "dumped" },
      { text: "I broke up with him", value: "dumper" },
      { text: "Breakup was mutual", value: "mutual" },
      { text: "Other", value: "other" },
    ],
  },
  {
    id: 14,
    type: "multi-select",
    title: "What issues did you experience in your relationship?",
    subtitle: "(Choose up to 3)",
    maxSelections: 3,
    options: [
      { text: "Constant arguing", value: "arguing", emoji: "😣" },
      { text: "Lack of communication", value: "communication", emoji: "🤐" },
      {
        text: "Loss of emotional or physical intimacy",
        value: "intimacy",
        emoji: "🙏",
      },
      {
        text: "Incompatibility in long-term goals",
        value: "goals",
        emoji: "🎯",
      },
      { text: "Financial disagreements", value: "financial", emoji: "💰" },
    ],
  },
  {
    id: 15,
    type: "emoji-options",
    title: "How long were you and your Ex together?",
    options: [
      { text: "More than 3 years", value: "3years+", emoji: "😊" },
      { text: "From 1 to 3 years", value: "1-3years", emoji: "🙂" },
      { text: "From 6 months to 1 year", value: "6months-1year", emoji: "😐" },
      { text: "Less than 6 months", value: "6months-", emoji: "😕" },
    ],
  },
  {
    id: 16,
    type: "emoji-options",
    title: "What is your current relationship with your Ex?",
    options: [
      { text: 'I use the "No Contact Rule"', value: "no-contact", emoji: "😐" },
      { text: 'We discuss only "business"', value: "business", emoji: "🤝" },
      { text: "We talk periodically", value: "periodic", emoji: "🙂" },
      { text: "We are still good friends", value: "friends", emoji: "😊" },
      {
        text: "We had intimate contact since the breakup",
        value: "intimate",
        emoji: "😏",
      },
    ],
  },
  {
    id: 17,
    type: "emoji-options",
    title: "Is your Ex dating someone else?",
    options: [
      { text: "Definitely not", value: "no", emoji: "😊" },
      { text: "I don't know", value: "unknown", emoji: "🤔" },
      { text: "Probably yes", value: "probably", emoji: "😕" },
      { text: "Definitely is", value: "yes", emoji: "😞" },
    ],
  },
  {
    id: 18,
    type: "emoji-options",
    title:
      "Sometimes, I want to text him and change my mind at the last second",
    options: [
      { text: "Agree", value: "agree", emoji: "😅" },
      { text: "Somehow agree", value: "somewhat", emoji: "😊" },
      { text: "Disagree", value: "disagree", emoji: "🤔" },
    ],
  },
  {
    id: 19,
    type: "emoji-options",
    title: "What would you like to improve in your relationship?",
    options: [
      { text: "Emotional support", value: "emotional", emoji: "🤗" },
      { text: "Communication", value: "communication", emoji: "👋" },
      { text: "Intimacy", value: "intimacy", emoji: "💖" },
      { text: "Feeling desired", value: "desired", emoji: "💥" },
      { text: "Financial stability", value: "financial", emoji: "💰" },
      { text: "Attention and presents", value: "attention", emoji: "🎁" },
    ],
  },
  {
    id: 20,
    type: "multi-select",
    title: "What negative changes do you observe?",
    subtitle: "(Choose up to 3)",
    maxSelections: 3,
    options: [
      { text: "I feel less motivated", value: "motivation", emoji: "😣" },
      { text: "I'm feeling much worse", value: "worse", emoji: "😞" },
      {
        text: "My self-esteem has hit rock bottom",
        value: "self-esteem",
        emoji: "😔",
      },
      {
        text: "I've come to dislike my reflection in the mirror",
        value: "reflection",
        emoji: "🤢",
      },
      { text: "All I do is cry", value: "cry", emoji: "😭" },
      { text: "I'm avoiding social situations", value: "social", emoji: "😶" },
    ],
  },
  {
    id: 21,
    type: "emoji-options",
    title: "Have you experienced any issues recently?",
    options: [
      { text: "New routine challenges", value: "routine", emoji: "😊" },
      { text: "Financial adjustments", value: "financial", emoji: "😊" },
      { text: "Shared commitments", value: "commitments", emoji: "😊" },
      {
        text: "Handling questions from family and friends",
        value: "questions",
        emoji: "😊",
      },
      { text: "None of the above", value: "none", emoji: "😊" },
    ],
  },
  {
    id: 22,
    type: "emoji-options",
    title: "Do you feel this relationship is the best you can have?",
    options: [
      { text: "Absolutely", value: "absolutely", emoji: "😊" },
      {
        text: "It's hard to imagine anything else",
        value: "hard-imagine",
        emoji: "😊",
      },
      { text: "It's a difficult question", value: "difficult", emoji: "🤔" },
    ],
  },
  {
    id: 23,
    type: "multi-select",
    title: "What shared memories do you and your Ex have?",
    maxSelections: 6,
    options: [
      {
        text: "Series or movies we loved to watch together",
        value: "movies",
        emoji: "🍿",
      },
      { text: "Our favorite song", value: "song", emoji: "🎵" },
      { text: "Our favorite place", value: "place", emoji: "☕" },
      {
        text: "A specific place where we first met",
        value: "first-met",
        emoji: "🏖️",
      },
      { text: "Shared hobby or activity", value: "hobby", emoji: "⚽" },
      { text: "Identical bracelets", value: "bracelets", emoji: "👫" },
    ],
  },
  {
    id: 24,
    type: "multi-select",
    title:
      "What did your Ex admire about you at the beginning of your relationship?",
    maxSelections: 5,
    options: [
      { text: "My beauty", value: "beauty", emoji: "🤗" },
      { text: "My sense of humor", value: "humor", emoji: "😄" },
      { text: "My figure", value: "figure", emoji: "🥰" },
      { text: "My intelligence", value: "intelligence", emoji: "😌" },
      { text: "My character", value: "character", emoji: "😊" },
    ],
  },
  {
    id: 25,
    type: "emoji-options",
    title: "What was your first date like?",
    options: [
      { text: "Shy and hesitant", value: "shy", emoji: "😳" },
      { text: "Love at first sight", value: "love-first-sight", emoji: "💝" },
      { text: "Playful and lighthearted", value: "playful", emoji: "😊" },
      { text: "Nervous but exciting", value: "nervous", emoji: "😬" },
      {
        text: "Memorable and heartwarming",
        value: "memorable",
        emoji: "😊",
      },
      { text: "Unforgettable and sweet", value: "unforgettable", emoji: "🥰" },
    ],
  },
  {
    id: 26,
    type: "multi-select",
    title: "How did you enjoy spending time together?",
    maxSelections: 6,
    options: [
      {
        text: "Exploring new places and adventures",
        value: "exploring",
        emoji: "🏔️",
      },
      { text: "Long walks and talks", value: "walks", emoji: "👫" },
      { text: "Cozy moments at home", value: "cozy", emoji: "🏠" },
      { text: "Watching movies and shows", value: "movies", emoji: "📷" },
      { text: "Engaging in fun activities", value: "activities", emoji: "🏂" },
      { text: "Fitness or sports activities", value: "fitness", emoji: "🤸" },
    ],
  },
  {
    id: 27,
    type: "multi-select",
    title: "How would you describe the positive qualities of your Ex?",
    maxSelections: 5,
    options: [
      { text: "Kind and caring", value: "kind", emoji: "🙏" },
      { text: "Strong and self-confident", value: "strong", emoji: "💪" },
      { text: "Smart", value: "smart", emoji: "🧠" },
      { text: "Handsome", value: "handsome", emoji: "👨" },
      { text: "Passionate", value: "passionate", emoji: "🌹" },
    ],
  },
  {
    id: 28,
    type: "elements",
    title: "Which image captures the vibe of your honeymoon phase?",
    options: [
      {
        text: "Road Trip",
        value: "road-trip",
        image: "/air.png",
      },
      {
        text: "Cozy Home",
        value: "cozy-home",
        image: "/fire.png",
      },
      {
        text: "Winter Romance",
        value: "winter",
        image: "/water.png",
      },
      {
        text: "City Nights",
        value: "city-nights",
        image: "/earth.png",
      },
    ],
  },
  {
    id: 29,
    type: "rating-scale",
    title: "How much do you want your Ex back?",
    ratingRange: {
      min: 1,
      max: 5,
      minLabel: "Not sure I want",
      maxLabel: "Very much!",
    },
  },
  {
    id: 30,
    type: "text-input",
    title: "What's your Ex's name?",
    placeholder: "Name",
  },
];
