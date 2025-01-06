import Topic from "../models/topic.model.js";

export const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ sheetId: req.params.sheetId });

    return res.status(200).json({ topics });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch topics", error });
  }
};
