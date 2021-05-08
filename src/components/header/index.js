import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./header.css";

const Header = ({ addMainTask }) => {
  const [taskName, setTaskName] = useState("");
  
  return (
    <div className="row headerContainer">
      <div className="col-sm-12 col-xs-12 inputContainer">
        <Form.Control
          type="text"
          value={taskName}
          placeholder="Enter Task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button
          variant="primary"
          type="button"
          className="searchButton"
          onClick={() => {
            addMainTask(taskName)
            setTaskName("")
          }}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default Header;
