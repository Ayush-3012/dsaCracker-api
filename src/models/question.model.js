import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  sheetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sheet", 
    required: true,
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
    required: true,
  },
  Topic: {
    type: String,
    requrired: true,
  },
  Problem: {
    type: String,
    required: true,
  },
  Done: {
    type: Boolean,
    default: false,
  },
  Bookmark: {
    type: Boolean,
    default: false,
  },
  Notes: {
    type: String,
    default: "",
  },
  URL: {
    type: String,
    required: true,
  },
  URL2: {
    type: String,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
