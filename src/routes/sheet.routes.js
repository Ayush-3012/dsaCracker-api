import { Router } from "express";
import {
  getAllSheets,
  getSpecificSheet,
} from "../controllers/sheet.controller.js";

const sheetRouter = Router();

sheetRouter.route("/").get(getAllSheets);
sheetRouter.route("/:sheetId").get(getSpecificSheet);

export default sheetRouter;
