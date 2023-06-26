import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

const Todo = model("todo", todoSchema);

export default Todo;
