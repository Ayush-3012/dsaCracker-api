import Sheet from "./models/sheet.model.js";
import Topic from "./models/topic.model.js";
import Question from "./models/question.model.js";

import { loveBabbarQuestions } from "./data/loveBabbar.Questions.js";
import { shradhaDiQuestions } from "./data/shradhaDi.Questions.js";

export const seedData = async () => {
  try {
    await Sheet.deleteMany();
    await Topic.deleteMany();
    await Question.deleteMany();
    console.log(" Existing data cleared");

    const sheetsData = [
      {
        name: "LoveBabbar",
        description: "LoveBabbar DSA sheet for practicing problems.",
        topics: loveBabbarQuestions,
      },
      {
        name: "ShradhaDi",
        description: "ShradhaDi DSA sheet for practicing problems.",
        topics: shradhaDiQuestions,
      },
    ];

    const allSheets = await Sheet.insertMany(
      sheetsData.map((sheet) => ({
        name: sheet.name,
        description: sheet.description,
        totalTopics: sheet.topics.length,
      }))
    );

    const allTopics = [];
    allSheets.forEach((sheet, index) => {
      sheetsData[index].topics.map((topic) => {
        allTopics.push({
          sheetId: sheet._id,
          name: topic.topicName,
          description: topic.description,
        });
      });
    });
    const insertedTopics = await Topic.insertMany(allTopics);

    const allQuestions = [];
    sheetsData.forEach((sheet, sheetIndex) => {
      const currentSheet = allSheets[sheetIndex];
      sheet.topics.forEach((eachTopic) => {
        const matchedTopic = insertedTopics.find(
          (topic) =>
            topic.name === eachTopic.topicName &&
            topic.sheetId.toString() === currentSheet._id.toString()
        );

        if (matchedTopic) {
          eachTopic.questions.forEach((question) => {
            allQuestions.push({
              sheetId: currentSheet._id,
              topicId: matchedTopic._id,
              Topic: matchedTopic.name,
              Problem: question.Problem,
              URL: question.URL,
              URL2: question.URL2,
            });
          });
        }
      });
    });

    await Question.insertMany(allQuestions);

    console.log(" Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};
