import express from "express"
import { createNewTodo, deleteById, getAllTodo, getTodoById, toggleDoneTodo, updateTodo } from "./db/todo.quert.js";

export const todosRouter = express.Router();
// Get Todo
todosRouter.get("/",async (req,res)=>{
    const allTodo = await getAllTodo();
    res.json({
       data: allTodo
    })
})
// Get Todo by Id
todosRouter.get("/:todo_id",async (req,res)=>{
     const id = req.params.todo_id;
    const get_Todo_id = await getTodoById(id);
    res.json({
       data: get_Todo_id
    })
})
// Create Todo
todosRouter.post("/",async(req,res)=>{
    const { title, body, done } = req.body;
    const newTodo = await  createNewTodo(title, body, done)
     res.status(201).json({
    message: "Todo  is created ",
        data : newTodo
    });
})
// Update Todo
todosRouter.patch("/:todo_id",async(req,res)=>{
const id =req.params.todo_id;
    const { title, body, done } = req.body;
    const update_Todo = await  updateTodo(title, body, done,id)
     res.status(200).json({
        message :"Todo is updated",
        data : update_Todo
    });
})

// Delete Todo
todosRouter.delete("/:todo_id",async(req,res)=>{
const id =req.params.todo_id;
    const Deleted_Todo = await  deleteById(id)
     res.status(200).json({
        message :"Todo is Deleted",
        data : Deleted_Todo
    });
})

todosRouter.patch("/:todo_id/toggle_Todo",async(req,res)=>{
const id =req.params.todo_id;
    const toggle_Todo = await  toggleDoneTodo(id)
     res.status(200).json({
        message :"Todo is update false->true or true->false",
        data : toggle_Todo
    });
})