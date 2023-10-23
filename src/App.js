import './App.css';
import { Task } from './Task';
import { useState } from 'react';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [newtask, setNewtask] = useState("");

  const handleChange = (e) => {
    setNewtask(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: todolist.length===0 ? 1 : todolist[todolist.length-1].id + 1,
      taskName: newtask
    }
    setTodolist([...todolist, task]);
  }

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <div className="addTask">
        <h1>To-Do List</h1>
        <input onChange={handleChange} />
        <button onClick={addTask} style={{marginLeft: "10px"}}>Add Task</button>
      </div>
      <div className="list">
        {todolist.map((task) => {
          return <Task id={task.id} taskName={task.taskName} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
