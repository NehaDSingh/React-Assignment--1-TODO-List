import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]); // Stores the list of tasks
  const [newTask, setNewTask] = useState(""); // Stores input text for new task


  // Adds a new task
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty! Please enter a valid task."); // Show alert if task is empty
      return;
    }
    
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask(""); // Clear input field
  };
  

  // Toggles completion status of a task
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Deletes a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Edits a task
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="input-container">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
}
