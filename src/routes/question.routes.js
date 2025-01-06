import { Router } from "express";
import { getAllQuestions } from "../controllers/question.controller.js";

const questionRouter = Router();

questionRouter.route("/:topicId/").get(getAllQuestions);

export default questionRouter;
