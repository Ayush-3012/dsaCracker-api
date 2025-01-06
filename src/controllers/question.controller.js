import Question from "../models/question.model.js";

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({
      topicId: req.params.topicId,
    });
    return res.status(200).json(questions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch questions" });
  }
};
