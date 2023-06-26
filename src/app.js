import Express from "express";
import connect from "./DataBase/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import { getAlltodo, postTodo } from "./controllers/project-controller.js";
import bodyParser from "body-parser";

dotenv.config();

connect();

const app = Express();
app.use(cors());
app.use(bodyParser.json());

app.use("/images", Express.static("./public/images"));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app working!" });
});

app.get("/todos", getAlltodo);

app.post("/todos", postTodo);

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
