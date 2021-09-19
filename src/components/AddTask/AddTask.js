import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../../js/action/todoAction";
import { Row } from "react-bootstrap";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.todoReducer);

  return (
    <div className="add">
      <Row>
        {" "}
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          onClick={() => {
            dispatch(addTask({ id: tasks.length, todo: text, isDone: false }));
            setText("");
          }}
        >
          Add Task
        </button>{" "}
      </Row>
    </div>
  );
};

export default AddTask;
