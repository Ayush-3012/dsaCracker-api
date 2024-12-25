import { Router } from "express";
import {
  getQuestionsByTopic,
  getTopics,
} from "../controllers/shradhaDi.controller.js";

const shradhaDiRouter = Router();

shradhaDiRouter.route("/topics").get(getTopics);
shradhaDiRouter.route("/topics/:topicName").get(getQuestionsByTopic);

export default shradhaDiRouter;
