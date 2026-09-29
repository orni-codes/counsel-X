const express = require("express");
const router = express.Router();
const mbtiController = require("../controllers/mbtiController");

/**
 * @swagger
 * tags:
 *   name: MBTI
 *   description: MBTI Personality Test APIs
 */

/**
 * @swagger
 * /api/mbti/start:
 *   post:
 *     summary: Start a new MBTI test session
 *     tags: [MBTI]
 *     responses:
 *       200:
 *         description: Test session started successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessionId:
 *                   type: string
 *                   example: "65f1a2b3c4d5e6f7890abc12"
 *                 question:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       example: 1
 *                     question:
 *                       type: string
 *                       example: "You feel more energized after:"
 *                     A:
 *                       type: string
 *                       example: "Spending time with people"
 *                     B:
 *                       type: string
 *                       example: "Spending time alone"
 *                     dimension:
 *                       type: string
 *                       example: "EI"
 */
router.post("/start", mbtiController.startTest);

/**
 * @swagger
 * /api/mbti/answer:
 *   post:
 *     summary: Submit answer and get next question or result
 *     tags: [MBTI]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sessionId
 *               - question
 *               - answer
 *             properties:
 *               sessionId:
 *                 type: string
 *                 example: "65f1a2b3c4d5e6f7890abc12"
 *               question:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   dimension:
 *                     type: string
 *                     example: "EI"
 *               answer:
 *                 type: string
 *                 enum: [A, B]
 *                 example: "A"
 *     responses:
 *       200:
 *         description: Next question or final result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 done:
 *                   type: boolean
 *                   example: false
 *                 question:
 *                   type: object
 *                   description: Present if test is not completed
 *                 result:
 *                   type: object
 *                   description: Present if test is completed
 *                   properties:
 *                     type:
 *                       type: string
 *                       example: "INTJ"
 *                     confidence:
 *                       type: object
 *                       properties:
 *                         EI:
 *                           type: number
 *                           example: 80
 *                         SN:
 *                           type: number
 *                           example: 70
 *                         TF:
 *                           type: number
 *                           example: 90
 *                         JP:
 *                           type: number
 *                           example: 75
 */
router.post("/answer", mbtiController.answer);

module.exports = router;