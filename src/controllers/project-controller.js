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
    const { title, completed } = req.body;
    const newTodo = new Todo({
      title,
      completed,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const deleteOne = async (req, res) => {
  try {
    const todoId = req.params.id;
    const deleteTodo = await Todo.findOneAndDelete({ _id: todoId });
    if (!deleteTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    console.log(error);
  }
};

export const deleteAll = async (req, res) => {
  try {
    await Todo.deleteMany();
    res.status(200).json({ message: "All tasks deleted successfully." });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompleted = async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.status(200).json({ message: "Completed tasks deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "an error occurred" });
    console.log(error);
  }
};

export const updateCompletionStatus = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { completed } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      todoId,
      { completed },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    console.log(error);
  }
};
