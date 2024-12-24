import connectDB from "./config/connect.js";
import LoveBabbarQuestion from "./models/loveBabbar.model.js";
import questions from "./questions.js";

export const seedData = async () => {
  try {
    await LoveBabbarQuestion.deleteMany();
    console.log(" Existing data cleared");

    await LoveBabbarQuestion.insertMany(questions);
    console.log(" Data seeded successfully!");

    process.exit();
  } catch (error) {
    console.error(" Error seeding data:", error);
    process.exit(1);
  }
};
