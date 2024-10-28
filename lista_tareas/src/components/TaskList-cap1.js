import React from "react";
import TaskItem from "./TaskItem-cap1";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TaskList;
