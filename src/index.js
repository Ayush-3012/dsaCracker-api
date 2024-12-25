import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/connect.js";
import cors from "cors";
import { seedData } from "./seed.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello, Welcome!"));

app.listen(process.env.PORT, () => {
  console.log(` Server is listening to port ${process.env.PORT}`);
});

connectDB();
//   .then(() => {
//     // seedData();
//     app.listen(process.env.PORT, () => {
//       console.log(` Server is listening to port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => console.log("MongoDb Connection failed: ", err));

// import loveBabbarRouter from "./routes/loveBabbar.routes.js";
// import shradhaDiRouter from "./routes/shradhaDi.routes.js";

// app.use("/api/v1/loveBabbarQuestions", loveBabbarRouter);
// app.use("/api/v1/shrdhaDiQuestions", shradhaDiRouter);
