import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";
import { useState } from "react";
/*
CRUD = create-Read-Update-Delete


TodoObj
data = Array<{id:number, task:string, status:boolean, due_date:date}

data = Array[]todoObj
dataRender = Array[]<TodoItem task= .... done=.... date=..../>
*/

// CRUD = create-Read-Update-Delete

function TodoLists({ editTodo, deleteTodo, data }) {
  // CRUD = create-Read-Update-Delete

  const dataRender = data.map((todoObj) => (
    <TodoItem
      key={todoObj.id}
      id={todoObj.id}
      task={todoObj.task}
      done={todoObj.status}
      date={todoObj.due_date}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
    />
  ));

  return (
    <ul className={styles.todo__lists}>
      {/* TodoItem */}

      {dataRender}

      {/* <TodoItem task="DoHw" done={true} date="31 Aug" />
      <TodoItem task="drink" done={false} date="1 Sep" /> */}
    </ul>
  );
}

export default TodoLists;
