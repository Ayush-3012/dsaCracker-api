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

    const sheets = await Sheet.insertMany(
      sheetsData.map((sheet) => ({
        name: sheet.name,
        description: sheet.description,
        totalTopics: sheet.topics.length,
      }))
    );

    const allTopics = [];
    sheets.forEach((sheet, index) => {
      sheetsData[index].topics.map((topic) => {
        if (
          !allTopics.some(
            (existingTopic) => existingTopic.name === topic.topicName
          )
        ) {
          allTopics.push({
            sheetId: sheet._id,
            name: topic.topicName,
            description: topic.description,
          });
        }
      });
    });

    const insertedTopics = await Topic.insertMany(allTopics);

    const allQuestions = [];
    sheetsData.forEach((sheet) => {
      const sheetTopics = sheet.topics;
      sheetTopics.forEach((eachTopic) => {
        const matchedTopic = insertedTopics.find(
          (topic) => topic.name === eachTopic.topicName
        );

        if (matchedTopic) {
          eachTopic.questions.forEach((question) => {
            if (
              !allQuestions.some(
                (existingQuestion) => existingQuestion.URL === question.URL
              )
            ) {
              allQuestions.push({
                topicId: matchedTopic._id,
                Topic: matchedTopic.name,
                Problem: question.Problem,
                URL: question.URL,
                URL2: question.URL2,
              });
            }
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
