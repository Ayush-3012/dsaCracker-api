import { Router } from "express";
import {
  getQuestionsByTopic,
  getTopics,
} from "../controllers/loveBabbar.controller.js";

const loveBabbarRouter = Router();

loveBabbarRouter.route("/topics").get(getTopics);
loveBabbarRouter.route("/topics/:topicName").get(getQuestionsByTopic);

export default loveBabbarRouter;
