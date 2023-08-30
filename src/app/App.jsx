import "./App.scss";
import Header from "../component/Header";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">SideBar</div>
      <div className="todo_content">TodoContent</div>
    </div>
  );
}

export default App;
