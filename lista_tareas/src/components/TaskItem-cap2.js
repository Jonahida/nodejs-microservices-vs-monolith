import React from "react";

const TaskItem = ({ task, removeTask, markComplete }) => {
  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button onClick={() => markComplete(task)}>Completar</button>
      <button onClick={() => removeTask(task)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
