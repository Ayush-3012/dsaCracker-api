import { Router } from "express";
import { getAllTopics } from "../controllers/topic.contoller.js";

const topicRouter = Router();

topicRouter.route("/:sheetId/").get(getAllTopics);
// topicRouter.route("/:sheetId/:topicId").get(getSpecificTopic);

export default topicRouter;
