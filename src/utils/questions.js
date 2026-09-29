const MBTI_QUESTIONS = [
  // E vs I (6 Fragen)
  {
    id: 1,
    dimension: 'EI',
    question: "At a social event, do you usually...",
    A: "Interact with many people, including strangers",
    B: "Interact with a few people you already know",
    weight: { A: 'E', B: 'I' }
  },
  {
    id: 2,
    dimension: 'EI',
    question: "Do you prefer to spend your free time...",
    A: "In active environments with others",
    B: "In a quiet space by yourself or with one close friend",
    weight: { A: 'E', B: 'I' }
  },
  {
    id: 3,
    dimension: 'EI',
    question: "When you are in a group, do you tend to...",
    A: "Speak up and share your thoughts immediately",
    B: "Listen first and share your thoughts after reflection",
    weight: { A: 'E', B: 'I' }
  },
  {
    id: 4,
    dimension: 'EI',
    question: "Do you find being around a lot of people...",
    A: "Energizing and exciting",
    B: "Draining, needing time alone to recharge",
    weight: { A: 'E', B: 'I' }
  },
  {
    id: 5,
    dimension: 'EI',
    question: "In a conversation, do you usually...",
    A: "Start the conversation and keep it going",
    B: "Wait for others to start and then contribute",
    weight: { A: 'E', B: 'I' }
  },
  {
    id: 6,
    dimension: 'EI',
    question: "Do you prefer work that involves...",
    A: "Heavy collaboration and frequent meetings",
    B: "Independent focus and deep work",
    weight: { A: 'E', B: 'I' }
  },

  // S vs N (6 Fragen)
  {
    id: 7,
    dimension: 'SN',
    question: "When learning something new, are you more interested in...",
    A: "Practical applications and facts",
    B: "Underlying theories and possibilities",
    weight: { A: 'S', B: 'N' }
  },
  {
    id: 8,
    dimension: 'SN',
    question: "Do you tend to focus more on...",
    A: "What is happening in the present moment",
    B: "What might happen in the future",
    weight: { A: 'S', B: 'N' }
  },
  {
    id: 9,
    dimension: 'SN',
    question: "Would you rather be described as...",
    A: "A sensible and realistic person",
    B: "An imaginative and creative person",
    weight: { A: 'S', B: 'N' }
  },
  {
    id: 10,
    dimension: 'SN',
    question: "When solving a problem, do you usually...",
    A: "Follow established methods that have worked before",
    B: "Try to find a new or unconventional solution",
    weight: { A: 'S', B: 'N' }
  },
  {
    id: 11,
    dimension: 'SN',
    question: "In your daily life, do you pay more attention to...",
    A: "Specific details and concrete experiences",
    B: "Patterns, meanings, and the 'big picture'",
    weight: { A: 'S', B: 'N' }
  },
  {
    id: 12,
    dimension: 'SN',
    question: "Do you prefer instructions that are...",
    A: "Step-by-step and explicit",
    B: "Open-ended and allow for interpretation",
    weight: { A: 'S', B: 'N' }
  },

  // T vs F (6 Fragen)
  {
    id: 13,
    dimension: 'TF',
    question: "When making a tough decision, do you rely more on...",
    A: "Logical analysis and objective facts",
    B: "Personal values and the impact on people",
    weight: { A: 'T', B: 'F' }
  },
  {
    id: 14,
    dimension: 'TF',
    question: "If a friend is upset, is your first instinct to...",
    A: "Offer a practical solution to the problem",
    B: "Provide emotional support and empathy",
    weight: { A: 'T', B: 'F' }
  },
  {
    id: 15,
    dimension: 'TF',
    question: "Do you value...",
    A: "Justice and fairness above all",
    B: "Harmony and compassion above all",
    weight: { A: 'T', B: 'F' }
  },
  {
    id: 16,
    dimension: 'TF',
    question: "Are you more likely to follow your...",
    A: "Head (logic)",
    B: "Heart (feelings)",
    weight: { A: 'T', B: 'F' }
  },
  {
    id: 17,
    dimension: 'TF',
    question: "When giving feedback, are you usually...",
    A: "Direct and honest, even if it's blunt",
    B: "Gentle and tactful to avoid hurting feelings",
    weight: { A: 'T', B: 'F' }
  },
  {
    id: 18,
    dimension: 'TF',
    question: "Do you prefer a workplace that is...",
    A: "Task-oriented and professional",
    B: "People-oriented and supportive",
    weight: { A: 'T', B: 'F' }
  },

  // J vs P (7 Fragen)
  {
    id: 19,
    dimension: 'JP',
    question: "Do you prefer to have your day...",
    A: "Planned out with a clear schedule",
    B: "Open and flexible for spontaneous ideas",
    weight: { A: 'J', B: 'P' }
  },
  {
    id: 20,
    dimension: 'JP',
    question: "When starting a project, do you usually...",
    A: "Organize everything and set deadlines early",
    B: "Dive in and see where the process takes you",
    weight: { A: 'J', B: 'P' }
  },
  {
    id: 21,
    dimension: 'JP',
    question: "Do you feel more comfortable when...",
    A: "A decision has been reached and a plan is in place",
    B: "Options are still open and you can adapt",
    weight: { A: 'J', B: 'P' }
  },
  {
    id: 22,
    dimension: 'JP',
    question: "Regarding deadlines, do you tend to...",
    A: "Finish well in advance to avoid stress",
    B: "Work best under the pressure of the final stretch",
    weight: { A: 'J', B: 'P' }
  },
  {
    id: 23,
    dimension: 'JP',
    question: "Is your workspace typically...",
    A: "Organized and tidy",
    B: "Messy but functional",
    weight: { A: 'J', B: 'P' }
  },
  {
    id: 24,
    dimension: 'JP',
    question: "When traveling, do you prefer...",
    A: "A detailed itinerary of what to do and see",
    B: "Knowing the destination but exploring freely",
    weight: { A: 'J', B: 'P' }
  },
  {
    id: 25,
    dimension: 'JP',
    question: "Do you find that routines...",
    A: "Help you stay productive and focused",
    B: "Feel restrictive and boring",
    weight: { A: 'J', B: 'P' }
  }
];

export default MBTI_QUESTIONS;
