import mongoose from "mongoose";

const sheetSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  totalTopics: { type: Number, default: 0 },
});

const Sheet = mongoose.model("Sheet", sheetSchema);
export default Sheet;
