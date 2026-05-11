import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/popup.jsx";
import { useState, useEffect, use} from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  function togglePopup() {
    setPopupOpen(true);
    console.log("toggling popup");
  }

  function closePopup() {
    setPopupOpen(false);
    console.log("closing popup");
  }

  useEffect(() => {
    console.log("Component mounted or popup state changed");
  }, [popupOpen]);

  return (
    <>
      <TodoTitle />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setPopupOpen(true)}>Add Task</button>
      </div>
      <Todo
        togglePopup={togglePopup}
        task="Learn React"
        description="code along and build a simple app"
      />
      <Todo
        togglePopup={togglePopup}
        task="Finish Asap Frontend"
        description="complete the frontend implementation"
      />
      <Todo
        togglePopup={togglePopup}
        task="land a junior job"
        description="apply to positions and prepare for interviews"
      />
      <Todo
        togglePopup={togglePopup}
        task="Earn 100k+"
        description="work hard and advance your career"
      />
      {popupOpen && <Popup closePopup={closePopup} Popupcontent="Are you sure buddy?" />}

      {/* <Counter /> */}
    </>
  );
}

export default App;
