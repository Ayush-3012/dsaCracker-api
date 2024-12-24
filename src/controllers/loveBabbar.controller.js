import LoveBabbarQuestion from "../models/loveBabbar.model.js";

export const getTopics = async (req, res) => {
  try {
    const topics = await LoveBabbarQuestion.find({}, "topicName description");
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch topics", error });
  }
};

export const getQuestionsByTopic = async (req, res) => {
  const { topicName } = req.params;

  try {
    const topic = await LoveBabbarQuestion.findOne({ topicName });
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }
    res.status(200).json(topic.questions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch questions", error });
  }
};
