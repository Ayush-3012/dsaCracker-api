import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  topicName: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
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
  questions: [
    {
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
    },
  ],
});
const ShradhaDiQuestion = mongoose.model("ShradhaDiQuestion", questionSchema);

export default ShradhaDiQuestion;
