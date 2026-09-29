const questions = [
  // 🔵 EI (13)
  { id: 1, question: "You feel more energized after:", A: "Spending time with people", B: "Spending time alone", dimension: "EI" },
  { id: 2, question: "At a party, you:", A: "Interact with many people", B: "Stick with a few people", dimension: "EI" },
  { id: 3, question: "You prefer:", A: "Group activities", B: "Solo activities", dimension: "EI" },
  { id: 4, question: "You usually:", A: "Speak before thinking", B: "Think before speaking", dimension: "EI" },
  { id: 5, question: "You recharge by:", A: "Socializing", B: "Being alone", dimension: "EI" },
  { id: 6, question: "In conversations, you:", A: "Talk more", B: "Listen more", dimension: "EI" },
  { id: 7, question: "You enjoy:", A: "Being the center of attention", B: "Staying in the background", dimension: "EI" },
  { id: 8, question: "You prefer working:", A: "In teams", B: "Independently", dimension: "EI" },
  { id: 9, question: "Your communication style is:", A: "Expressive", B: "Reserved", dimension: "EI" },
  { id: 10, question: "When meeting new people:", A: "You initiate conversations", B: "You wait for others", dimension: "EI" },
  { id: 11, question: "Your ideal weekend is:", A: "Going out", B: "Staying in", dimension: "EI" },
  { id: 12, question: "You feel drained after:", A: "Too much alone time", B: "Too much social interaction", dimension: "EI" },
  { id: 13, question: "You prefer:", A: "Fast-paced environments", B: "Calm environments", dimension: "EI" },

  // 🟢 SN (13)
  { id: 14, question: "You focus more on:", A: "Facts and details", B: "Ideas and possibilities", dimension: "SN" },
  { id: 15, question: "You trust:", A: "Experience", B: "Instinct", dimension: "SN" },
  { id: 16, question: "You prefer:", A: "Practical solutions", B: "Creative solutions", dimension: "SN" },
  { id: 17, question: "You are more interested in:", A: "What is real", B: "What could be", dimension: "SN" },
  { id: 18, question: "You tend to:", A: "Follow instructions", B: "Explore alternatives", dimension: "SN" },
  { id: 19, question: "You remember:", A: "Specific details", B: "General impressions", dimension: "SN" },
  { id: 20, question: "You prefer learning:", A: "Step-by-step", B: "Big picture first", dimension: "SN" },
  { id: 21, question: "You are drawn to:", A: "Realistic ideas", B: "Abstract concepts", dimension: "SN" },
  { id: 22, question: "You rely on:", A: "Past experience", B: "Future possibilities", dimension: "SN" },
  { id: 23, question: "You prefer:", A: "Clear instructions", B: "Flexible guidelines", dimension: "SN" },
  { id: 24, question: "You enjoy:", A: "Hands-on tasks", B: "Brainstorming ideas", dimension: "SN" },
  { id: 25, question: "You focus on:", A: "Present reality", B: "Future potential", dimension: "SN" },
  { id: 26, question: "You value:", A: "Accuracy", B: "Innovation", dimension: "SN" },

  // 🔴 TF (12)
  { id: 27, question: "You make decisions based on:", A: "Logic", B: "Emotions", dimension: "TF" },
  { id: 28, question: "You value more:", A: "Justice", B: "Compassion", dimension: "TF" },
  { id: 29, question: "In conflicts, you:", A: "Stay objective", B: "Consider feelings", dimension: "TF" },
  { id: 30, question: "You are seen as:", A: "Analytical", B: "Empathetic", dimension: "TF" },
  { id: 31, question: "You prefer feedback that is:", A: "Direct", B: "Gentle", dimension: "TF" },
  { id: 32, question: "You prioritize:", A: "Truth", B: "Harmony", dimension: "TF" },
  { id: 33, question: "You decide by:", A: "Weighing pros and cons", B: "Following your heart", dimension: "TF" },
  { id: 34, question: "You are more:", A: "Firm", B: "Warm", dimension: "TF" },
  { id: 35, question: "You value:", A: "Fairness", B: "Kindness", dimension: "TF" },
  { id: 36, question: "You handle criticism by:", A: "Analyzing it", B: "Taking it personally", dimension: "TF" },
  { id: 37, question: "You prefer:", A: "Objective decisions", B: "Personal considerations", dimension: "TF" },
  { id: 38, question: "You are guided by:", A: "Principles", B: "Values", dimension: "TF" },

  // 🟡 JP (12)
  { id: 39, question: "You prefer:", A: "Planning ahead", B: "Going with the flow", dimension: "JP" },
  { id: 40, question: "Your work style is:", A: "Organized", B: "Flexible", dimension: "JP" },
  { id: 41, question: "You like:", A: "Schedules", B: "Spontaneity", dimension: "JP" },
  { id: 42, question: "You complete tasks:", A: "Early", B: "Last minute", dimension: "JP" },
  { id: 43, question: "You prefer:", A: "Clear structure", B: "Open options", dimension: "JP" },
  { id: 44, question: "You feel better when:", A: "Things are decided", B: "Options are open", dimension: "JP" },
  { id: 45, question: "You approach deadlines:", A: "Strictly", B: "Flexibly", dimension: "JP" },
  { id: 46, question: "You are more:", A: "Disciplined", B: "Adaptable", dimension: "JP" },
  { id: 47, question: "You prefer working:", A: "With a plan", B: "Improvising", dimension: "JP" },
  { id: 48, question: "You handle changes:", A: "Reluctantly", B: "Easily", dimension: "JP" },
  { id: 49, question: "You like your life to be:", A: "Structured", B: "Unpredictable", dimension: "JP" },
  { id: 50, question: "You prefer decisions to be:", A: "Final", B: "Reversible", dimension: "JP" }
];

module.exports = questions;