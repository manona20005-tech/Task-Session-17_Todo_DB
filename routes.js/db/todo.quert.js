import { pool } from "../../db.js";

export async function getAllTodo(){
const res = await pool.query("SELECT * FROM todos");
return res.rows;
}
export async function getTodoById(id) {
  const res = await pool.query("select * from todos where id = $1 limit 1",[id]);
  return res.rows[0];
}
export async function createNewTodo(title, body, done){
const res = await pool.query("INSERT INTO todos (title, body, done) VALUES ($1,$2,$3)",
[title, body, done])
console.log(res);
return res.rows[0];
}
export async function deleteById(id){
    const res = await pool.query("DELETE FROM todos WHERE id=$1",[id]);
    return res;
}
export async function updateTodo(title, body, done,id){
const res = await pool.query("UPDATE todos SET title =$1 ,body =$2,done =$3 WHERE id = $4",
[title, body, done,id]);
return res;
}

export async function toggleDoneTodo(id){
const res = await pool.query("UPDATE todos SET done = NOT done WHERE id = $1",[id])
console.log(res);
return res;
}
