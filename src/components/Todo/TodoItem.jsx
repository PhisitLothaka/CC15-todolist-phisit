import styles from "./TodoItem.module.scss";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import TodoForm from "./TodoForm";
import React from "react";

function TodoItem() {
  const [isOpenForm, setIsOpenForm] = React.useState(false);

  function clickToEdit() {
    setIsOpenForm(!isOpenForm);
  }
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit Task" setIsOpenForm={setIsOpenForm} />
      ) : (
        <li className={styles.todo}>
          <div
            className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}
          >
            <HiOutlineCheck className={styles.todo__checkbox__icon} />
          </div>
          <p className={`${styles.todo__task} ${styles.todo__task__done} `}>
            todo-item 1{" "}
          </p>
          <span className={styles.todo__date}>30 Aug</span>
          <div className={styles.todo__action}>
            <span onClick={clickToEdit}>
              <FaPen className={styles.todo__edit} />
            </span>
            <span>
              <FaTrashAlt className={styles.todo__delete} />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
