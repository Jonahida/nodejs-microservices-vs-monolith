import React, { useState } from "react";
import TaskList from "./components/TaskList-cap2";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { name: task, completed: false }]);
  };

  const markComplete = (taskToComplete) => {
    setTasks(
      tasks.map((task) =>
        task.name === taskToComplete.name ? { ...task, completed: true } : task
      )
    );
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        markComplete={markComplete}
      />
    </div>
  );
};

export default App;
