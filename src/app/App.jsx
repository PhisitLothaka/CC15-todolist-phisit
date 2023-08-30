import "./App.scss";

import Header from "../component/Header";
import Listitem from "../component/Listitem";
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
            <Listitem
              text="Inbox"
              icon={<FaInbox className="list__item__icon" />}
            />
            <Listitem
              text="Today"
              icon={<FaCalendar className="list__item__icon" />}
            />
            <Listitem
              text="Next 7 days"
              icon={<FaCalendarAlt className="list__item__icon" />}
            />
          </ul>
        </aside>
      </div>
      <div className="todo_content">TodoContent</div>
    </div>
  );
}

export default App;
