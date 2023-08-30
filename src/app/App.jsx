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
          <section className="sidebar__category">
            <ul className="list">
              <Listitem
                text="Inbox"
                icon={<FaInbox className="list__item__icon" />}
                active={true}
              />
              <Listitem
                text="Today"
                icon={<FaCalendar className="list__item__icon" />}
                active={false}
              />
              <Listitem
                text="Next 7 days"
                icon={<FaCalendarAlt className="list__item__icon" />}
                active={false}
              />
            </ul>
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
              <ul className="list">
                <Listitem text="project A" icon={<FaInbox />} active={true} />
                <Listitem text="project B" icon={<FaInbox />} />
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo_content">TodoContent</div>
    </div>
  );
}

export default App;
