import styles from "./TodoLists.module.scss";

import TodoItem from "./TodoItem";

function TodoLists() {
  return (
    <ul className={styles.todo__lists}>
      {/* TodoItem */}

      <TodoItem task="DoHw" done={true} date="31 Aug" />
      <TodoItem task="drink" done={false} date="1 Sep" />
    </ul>
  );
}

export default TodoLists;
