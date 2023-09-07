// Dependencies
import "./App.scss";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
// -----------------------------------------------------------------------------
// const data = [
//   {
//     id: 1,
//     task: "Suspendisse potenti.",
//     status: false,
//     due_date: "2023-04-26",
//   },
//   {
//     id: 2,
//     task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//     status: false,
//     due_date: "2023-05-08",
//   },
//   {
//     id: 3,
//     task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//     status: false,
//     due_date: "2023-04-30",
//   },
// ];

const END_POINT = "http://localhost:8080/api/todos";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    // fetchAllTodo
    async function fetchAllTodo() {
      try {
        let response = await fetch(END_POINT, {
          method: "GET",
        });
        let todoData = await response.json();

        const newTodoLists = todoData.todos.map((todo) => {
          const newTodo = { ...todo, due_date: todo.date };
          delete todo.date;
          return newTodo;
        });
        setAllTodos(newTodoLists);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllTodo();
  }, []);

  const addTodo = async function (taskName) {
    const newTodo = {
      id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format("YYYY-MM-DD"),
    };

    try {
      const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTodo),
      };
      let response = await fetch(END_POINT, options);
      let data = await response.json();
      const createdTodo = { ...data.todo, due_date: data.todo.date };
      delete newTodo.date;

      setAllTodos((p) => [createdTodo, ...p]);
    } catch (error) {
      console.log(error);
    }
  };

  // delete
  const deleteTodo = async function (todoId) {
    try {
      const options = { method: "DELETE" };
      let response = await fetch(`${END_POINT}/${todoId}`, options);
      if (response.status === 204)
        setAllTodos(allTodos.filter((obj) => obj.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };

  // findTodo

  // update
  const editTodo = async function (todoId, newTodoObj) {
    try {
      let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if (foundedIndex !== -1) {
        const updateTodo = { ...allTodos[foundedIndex], ...newTodoObj };
        updateTodo.date = updateTodo.due_date;
        const options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updateTodo),
        };

        const response = await fetch(`${END_POINT}/${todoId}`, options);
        const data = await response.json();
        console.log(data.todo);

        const newTodoLists = [...allTodos];
        newTodoLists[foundedIndex] = { ...data.todo, due_date: data.todo.date };
        setAllTodos(newTodoLists);
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(todoId, newTodoObj);

    // #Practice
    //   let foundedTodo = allTodos.find((todo) => todo.id === todoId);
    //   console.log(foundedTodo);
    //   if (!foundedTodo) return;
    //   const newTodo = Object.assign({}, foundedTodo, newTodoObj);

    //   let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
    //   if (foundedIndex === -1) return;

    //   const newTodoLists = [...allTodos];
    //   newTodoLists.splice(foundedIndex, 1, newTodo);
    //   setAllTodos(newTodoLists);
    // };

    // #Practice #2
    // const newTodoLists = allTodos.map(function (todo) {
    //   if (todo.id !== todoId) return todo;
    //   else return { ...todo, ...newTodoObj };
    // });
    // setAllTodos(newTodoLists);

    // #Practice3
    // const newTodoLists = allTodos.reduce((acc, todo) => {
    //   if (todo.id !== todoId) acc.push(todo);
    //   else acc.push({ ...todo, ...newTodoObj });
    //   return acc;
    // }, []);
    // setAllTodos(newTodoLists);
  };
  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate addTodo={addTodo} />
          <TodoLists
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            data={allTodos}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
