import ShradhaDiQuestion from "../models/shraddhaDi.model.js";

export const getTopics = async (req, res) => {
  try {
    const topics = await ShradhaDiQuestion.find({}, "topicName description");
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch topics", error });
  }
};

export const getQuestionsByTopic = async (req, res) => {
  const { topicName } = req.params;

  try {
    const topic = await ShradhaDiQuestion.findOne({ topicName });
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }
    res.status(200).json(topic.questions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch questions", error });
  }
};
