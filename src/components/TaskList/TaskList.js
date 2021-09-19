import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import { useState } from "react";
import Filter from "../Filter/Filter";
const TaskList = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const tasks = useSelector((state) => state.todoReducer.tasks);

  return (
    <div>
      <Filter handleChange={handleChange} text={text} />

      {tasks
        .filter(
          (task) =>
            task.todo.toLowerCase().includes(text.toLowerCase()) &&
            task.isDone === false
        )
        .map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
    </div>
  );
};

export default TaskList;
