import Sheet from "../models/sheet.model.js";
import Question from "../models/question.model.js";
import Topic from "../models/topic.model.js";

export const getAllSheets = async (req, res) => {
  try {
    const sheets = await Sheet.find();
    return res.status(200).json({ sheets });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching sheets", error });
  }
};

export const getSpecificSheet = async (req, res) => {
  try {
    const foundSheet = await Sheet.findById(req.params.sheetId);

    if (!foundSheet)
      return res.status(404).json({ message: "Sheet not found" });

    return res.status(200).json({ foundSheet });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching specific sheet", error });
  }
};

export const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ sheetId: req.params.sheetId });

    return res.status(200).json({ topics });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch topics", error });
  }
};

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
