import React from "react";
import TaskItem from "./TaskItem-cap2";

const TaskList = ({ tasks, removeTask, markComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          removeTask={removeTask}
          markComplete={markComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
