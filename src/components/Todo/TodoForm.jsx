import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import { useState } from "react";

function TodoForm(props) {
  /*
  props = {
    textSubmit : strig
    setIsOpenForm : FN
  }

  cc1 - Form Hamdle
  - ใช้



*/
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const handleChange = function (event) {
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    // FormValidation
    // case1 : submit ได้
    // case2 : submit ไม่ได้ => แสดง Error
    console.log("submit");
  };

  const handleCancel = function () {
    console.log("cancel");
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={taskInput}
        onChange={handleChange}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}></p>
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
