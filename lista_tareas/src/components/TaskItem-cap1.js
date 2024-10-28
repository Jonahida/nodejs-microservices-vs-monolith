import React from "react";

const TaskItem = ({ task, removeTask }) => {
  return (
    <li>
      {task}
      <button onClick={() => removeTask(task)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
