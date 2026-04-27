import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/popup.jsx";

function App() {
  return (
    <>
      <TodoTitle />
      <Todo
        task="Learn React"
        description="code along and build a simple app"
      />
      <Todo
        task="Finish Asap Frontend"
        description="complete the frontend implementation"
      />
      <Todo
        task="land a junior job"
        description="apply to positions and prepare for interviews"
      />
      <Todo
        task="Earn 100k+"
        description="work hard and advance your career"
      />
      <Popup Popupcontent= "Are you sure buddy?" />
    </>
  );
}

export default App;
