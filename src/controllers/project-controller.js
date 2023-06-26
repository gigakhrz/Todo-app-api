import Todo from "../models/Todo.js";

export const getAlltodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(201).json(todos);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const postTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({
      title,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
