function Todo({ task, togglePopup }) {
  function deleteHandler() {
    console.log(`Deleting task: ${task[2]}`);
  }
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={togglePopup} >Delete</button>
    </div>
  );
}

export default Todo;
