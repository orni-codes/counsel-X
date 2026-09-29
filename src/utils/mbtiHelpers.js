export const MBTI_DATA = {
  INFP: {
    title: "Harmonizer, Clarifier",
    description: "INFPs hold a core set of deeply personal values that shape everything they perceive. Their outward intuition channels these values into imagination and creative possibility. They are among the most loyal and individualistic of types, often giving voice to what others leave unsaid.",
    traits: ["Empathy", "Brainstorming", "Values", "Idealism"],
    color: "#FF5722",
  },
  INTJ: {
    title: "Architect, Strategist",
    description: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves.",
    traits: ["Deduction", "Logic", "Strategy", "Vision"],
    color: "#673AB7",
  },
  ENFP: {
    title: "Campaigner, Inspirer",
    description: "ENFPs are enthusiastic, creative, and free spirits, who can always find a reason to smile. They are intensely individualistic and strive toward creating their own unique methods, looks, and ideas.",
    traits: ["Creativity", "Social", "Inspiration", "Freedom"],
    color: "#4CAF50",
  },
  ENTJ: {
    title: "Commander, Leader",
    description: "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision.",
    traits: ["Leadership", "Logic", "Efficiency", "Planning"],
    color: "#2196F3",
  },
  ISTJ: {
    title: "Logistician, Realist",
    description: "ISTJs are quiet, serious, and earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible, they decide logically what should be done and work toward it steadily.",
    traits: ["Reliability", "Detail", "Focus", "Order"],
    color: "#607D8B",
  },
  ISFJ: {
    title: "Defender, Protector",
    description: "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, motivated to provide for others and protect them from the perils of life.",
    traits: ["Nurturing", "Service", "Loyalty", "Practicality"],
    color: "#00BCD4",
  },
  ESTJ: {
    title: "Executive, Manager",
    description: "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, they like to get things done and tend to go about projects in a systematic way.",
    traits: ["Organization", "Dedication", "Focus", "Efficiency"],
    color: "#3F51B5",
  },
  ESFJ: {
    title: "Provider, Caregiver",
    description: "ESFJs are warmhearted, popular, and conscientious. They are typically social butterflies who strive to make everyone feel included and valued in their community.",
    traits: ["Harmony", "Social", "Cooperation", "Service"],
    color: "#E91E63",
  },
  ISTP: {
    title: "Virtuoso, Craftsperson",
    description: "ISTPs are observant artisans with a fascination for troubleshooting. They approach environments with a detached logic and a curious adaptability, searching for practical solutions to problems.",
    traits: ["Troubleshooting", "Adaptability", "Hands-on", "Observation"],
    color: "#795548",
  },
  ISFP: {
    title: "Adventurer, Artist",
    description: "ISFPs are gentle caretakers who live in the moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer.",
    traits: ["Experience", "Expression", "Harmony", "Sensitivity"],
    color: "#FFC107",
  },
  ESTP: {
    title: "Entrepreneur, Persuader",
    description: "ESTPs are energetic thrill-seekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them.",
    traits: ["Action", "Logic", "Directness", "Adventure"],
    color: "#FF9800",
  },
  ESFP: {
    title: "Entertainer, Performer",
    description: "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people.",
    traits: ["Social", "Fun", "Action", "Compassion"],
    color: "#FF4081",
  },
  INTP: {
    title: "Logician, Philosopher",
    description: "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life.",
    traits: ["Independence", "Analysis", "Theory", "Logic"],
    color: "#9C27B0",
  },
  ENTP: {
    title: "Debater, Visionary",
    description: "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them.",
    traits: ["Creativity", "Analysis", "Strategy", "Innovation"],
    color: "#009688",
  },
  INFJ: {
    title: "Advocate, Counselor",
    description: "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges.",
    traits: ["Humanity", "Vision", "Integrity", "Deep Insight"],
    color: "#8BC34A",
  },
  ENFJ: {
    title: "Protagonist, Teacher",
    description: "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for individual and group growth because of their ability to see potential in others.",
    traits: ["Leadership", "Empathy", "Vision", "Social Harmony"],
    color: "#CDDC39",
  }
};

export const DIMENSION_DETAILS = {
  E: { name: "Extraversion", trait: "Outward Energy", icon: 1 },
  I: { name: "Introversion", trait: "Inner Focus", icon: 1 },
  S: { name: "Sensing", trait: "Inward Sensing", icon: 3 },
  N: { name: "Intuition", trait: "Outward Intuition", icon: 2 },
  T: { name: "Thinking", trait: "Outward Thinking", icon: 4 },
  F: { name: "Feeling", trait: "Inward Feeling", icon: 1 },
  J: { name: "Judging", trait: "Structured", icon: 3 },
  P: { name: "Perceiving", trait: "Flexible", icon: 2 }
};

export const TRAIT_LABELS = {
  EI: { name: "Energy Source", left: "Introversion", right: "Extraversion", trait: "Individuality" },
  SN: { name: "Information", left: "Intuition", right: "Sensing", trait: "Perspective" },
  TF: { name: "Decisions", left: "Feeling", right: "Thinking", trait: "Logic" },
  JP: { name: "Lifestyle", left: "Perceiving", right: "Judging", trait: "Structure" }
};
