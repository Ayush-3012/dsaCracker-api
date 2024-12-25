import LoveBabbarQuestion from "./models/loveBabbar.model.js";
import { loveBabbarQuestions } from "./data/loveBabbar.Questions.js";
import { shradhaDiQuestions } from "./data/shradhaDi.Questions.js";
import ShradhaDiQuestion from "./models/shraddhaDi.model.js";

export const seedData = async () => {
  try {
    await LoveBabbarQuestion.deleteMany();
    await ShradhaDiQuestion.deleteMany();
    console.log(" Existing data cleared");

    await LoveBabbarQuestion.insertMany(loveBabbarQuestions);
    await ShradhaDiQuestion.insertMany(shradhaDiQuestions);
    console.log(" Data seeded successfully!");

    process.exit();
  } catch (error) {
    console.error(" Error seeding data:", error);
    process.exit(1);
  }
};
