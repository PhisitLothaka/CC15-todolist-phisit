import styles from "./TodoForm.module.scss";
import { Button } from "../Common/Button/Button";
import React from "react";

function TodoForm(props) {
  /*
  props = {
    textSubmit : strig
    setIsOpenForm : FN
  }

  cc1 - Form Hamdle
  - ใช้



*/
  const [isError, setIsError] = React.useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log("submit");
  };

  const handleCancel = function () {
    console.log("cancel");
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder="Task Name" />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}>
          {isError ? "Title is required" : null}
        </p>
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
