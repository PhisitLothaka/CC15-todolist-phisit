import "./App.scss";

import Header from "../component/Header";
import Listitem from "../component/Listitem";
import Lists from "../component/Lists";
import TodoHeader from "../component/Todo/TodoHeader";
import TodoCreate from "../component/Todo/TodoCreate";

import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  const generalLists = [
    { id: 1, text: "inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];

  // <Listitem text="project A" icon={<FaInbox />} active={true} />
  // <Listitem text="project B" icon={<FaInbox />} />
  const projectList = [
    { id: 4, text: "project A", icon: <FaInbox />, active: true },
    { id: 5, text: "project B", icon: <FaInbox />, active: false },
  ];
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion_item__icon accordion__item__active" />
                  <p className="accordion__item__text">projects</p>
                </li>
              </div>
              <Lists data={projectList} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo_content">
        <main className="todo__container">
          {/* Header */}
          <TodoHeader />

          {/* CerateTodo */}
          <TodoCreate />

          {/* TodoLists */}
        </main>
      </div>
    </div>
  );
}

export default App;

// Challenge: Refactor
// -ให้ 2 section render UI ที่...
//    - Option A (2/5) : render ต่างกัน <Lists/> กับ <Accordion/>
//    - Option B (4/5) : render UI เดียวกัน เข่น <Lists/>
//    - Option c (5/5) : render UI <Lists/> ภายใต้ <accordion> <Lists/> <accordion/>
// ใช้ props.children
{
  /* <ul className="list">
              {generalLists.map((obj) => (
                <Listitem
                  data={generalLists}
                  // key={obj.id}
                  // {...obj}
                  // text={obj.text}
                  // icon={obj.icon}
                  // active={obj.active}
                />
              ))}
            </ul> */
}
