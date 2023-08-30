import "./Listitem.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

function Listitem(props) {
  return (
    <li className="list__item">
      <span className="list__item__icon">{props.icon}</span>
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}
export default Listitem;
