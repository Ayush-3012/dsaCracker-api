import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  sheetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sheet",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  started: {
    type: Boolean,
    default: false,
  },
  doneQuestions: {
    type: Number,
    deault: 0,
  },
  description: {
    type: String,
    required: true,
  },
});

const Topic = mongoose.model("Topic", topicSchema);
export default Topic;
