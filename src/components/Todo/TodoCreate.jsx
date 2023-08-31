import { useState } from "react";
import styles from "./TodoCreate.module.scss";
import React from "react";
import TodoForm from "./TodoForm";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

// Condition Rendering
// -default : Show Button & Text
// - Active ; Show TodoForm

// concept : true : <addTask/>:<TodoForm/>

// cc2 - EVENT HANDLELING
// -เอาฟังก์ชันไปผูกติดกับ UI เพื่อให้ USER เป็นคนเรียกใช้ฟังก์ชันเอง
// -onClick จะทำงานก็ต่อเมื่อ Click ก่อน , FN ถึงจะรัน
//    - USER ทำการคลิก
//    - Browser จะเป็นคนเรียกใช้ฟังก์ชัน โดยส่ง parameter มา 1 ตัว
//    handleClick(enentObject)

// cc3 - js Value ไม่สามารถทำให้ React Rerender ได้
// ต้องใช้ State

// cc4 - React State
// const [state, setState] useState(innitialState: any) <= array Destructuring
// element 1 : current State
// element 2 : Fn สำหรับ SetState
// เมื่อ State เปลี่ยน Function Conponent จะ Rerender
// Rerender 1 ครั้ง === Code ทั้งหมดใน FC จะถูกรันใหม่ 1 ครั้ง

//#1 : Fc = Function Component (Render)
function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = React.useState(false);

  function habdleClick() {
    setIsOpenForm(!isOpenForm);
  }
  return (
    <>
      {isOpenForm ? (
        <TodoForm />
      ) : (
        <div className={styles.todo__create} onClick={habdleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
