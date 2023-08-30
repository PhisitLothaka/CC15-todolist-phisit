import "./App.scss";
import Header from "../component/Header";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category"></section>
          <ul className="list">
            <li className="list__item">
              <span className="list__item__icon">
                <FaInbox />
              </span>
              <p className="list__item__text">Inbox</p>
            </li>
            <li className="list__item">
              <span className="list__item__icon">
                <FaCalendar />
              </span>
              <p className="list__item__text">Today</p>
            </li>
            <li className="list__item">
              <span className="list__item__icon">
                <FaCalendarAlt />
              </span>
              <p className="list__item__text">Next 7 days</p>
            </li>
          </ul>
        </aside>
      </div>
      <div className="todo_content">TodoContent</div>
    </div>
  );
}

export default App;
