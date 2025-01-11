import { Router } from "express";
import {
  getAllQuestions,
  getAllTopics,
  getAllSheets,
  getSpecificSheet,
} from "../controllers/main.controller.js";

const apiRouter = Router();

apiRouter.route("/sheets").get(getAllSheets);
apiRouter.route("/sheets/:sheetId").get(getSpecificSheet);

apiRouter.route("/sheets/:sheetId/topics").get(getAllTopics);

apiRouter.route("/sheets/:sheetId/topics/:topicId/questions").get(getAllQuestions);

export default apiRouter;
