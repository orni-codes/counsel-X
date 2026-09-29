const TestSession = require("../models/TestSession");
const mbtiService = require("../services/mbtiService");

exports.startTest = async (req, res) => {
  const sessionData = mbtiService.startTest();

  const session = await TestSession.create({
    userId: req.user?.id || "guest",
    ...sessionData
  });

  const firstQuestion = session.pools.EI.pop();

  res.json({ sessionId: session._id, question: firstQuestion });
};

exports.answer = async (req, res) => {
  const { sessionId, question, answer } = req.body;

  const session = await TestSession.findById(sessionId);

  const result = mbtiService.answerQuestion(session, question, answer);

  await session.save();

  res.json(result);
};