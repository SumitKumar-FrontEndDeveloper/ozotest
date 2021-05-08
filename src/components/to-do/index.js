import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Accordion, Button, Modal, Form } from "react-bootstrap";
import Loading from "../loading";
import { fetchToDoList, updateStatus, addTask } from "../../actions/to-do";
import "./to-do.css";
import Header from "../header";
const ToDo = () => {
  const dispatch = useDispatch();
  const { taskData } = useSelector((state) => state.toDoReducer);
  const isLoading = useSelector((state) => state.toDoReducer.isLoading);
  const [taskAddedData, setTaskAddedData] = useState({ taskId: 0, key: 0 });
  const [toDoList, setToDoList] = useState(null);
  const [show, setShow] = useState(false);
  const [subTaskName, setSubTaskName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [randomNumber, setRandom] = useState(0);

  useEffect(() => {
    (async () => {
      const toDoData = await dispatch(fetchToDoList());
      setToDoList(toDoData);
    })();
  }, []);
  const addMainTask = async (taskName) => {
    if (taskName) {
      const task = {
        task_name: taskName,
        task_id: "0",
      };
      const taskData = await dispatch(addTask(task));
      if (taskData) {
        setToDoList((prevState) => {
          const dtttt = [taskData.data, ...prevState];
          return dtttt;
        });
      }
    }
  };
  const addSubTask = (event, tid, key) => {
    setShow(true);
    setTaskAddedData({ taskId: tid, key: key });
    event.stopPropagation();
  };

  const saveSubTask = async () => {
    if (subTaskName == "" || subTaskName == null) {
      return false;
    } else {
      const task = {
        task_name: subTaskName,
        task_id: taskAddedData.taskId,
      };
      const taskData = await dispatch(addTask(task));
      setToDoList((prevState) => {
        const data = prevState;
        data[taskAddedData.key].subTasks.push(taskData.data);
        return data;
      });
      setShow(false);
    }
  };
  const changeStatus = async (taskId, key, ekey) => {
    let status = toDoList[key].subTasks[ekey].status == 1 ? 0 : 1;
    setToDoList((prevState) => {
      const data = prevState;
      dispatch(updateStatus(status, taskId));
      data[key].subTasks[ekey].status = status;
      return data;
    });
  };
  return (
    <React.Fragment>
      <div className="middleContainer">
        <Loading isLoading={isLoading} />
        <Header addMainTask={addMainTask} />
        <div className="contentContainer">
          <Accordion defaultActiveKey="0">
            {toDoList &&
              toDoList.map((val, key) => (
                <Card key={key} className="maintask">
                  <Accordion.Toggle as={Card.Header} eventKey={key.toString()}>
                    <span className="taskName">
                      {val.taskName && val.taskName} &nbsp;
                      {val.subTasks.length > 0 && `(${val.subTasks.length})`}
                    </span>
                    <span
                      className="iconBox"
                      id="add-task"
                      onClick={(e) => addSubTask(e, val.id, key)}
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </Accordion.Toggle>
                  {val.subTasks &&
                    val.subTasks.map((value, eKey) => (
                      <Accordion.Collapse eventKey={key.toString()} key={eKey}>
                        <Card.Body>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`${key.toString()}_${eKey.toString()}`}
                              checked={value.status == 1}
                              onChange={() => changeStatus(value.id, key, eKey)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`${key.toString()}_${eKey.toString()}`}
                            >
                              {value.taskName}
                            </label>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    ))}
                </Card>
              ))}
          </Accordion>
        </div>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add SubTask</Modal.Title>
        </Modal.Header>
        <Form className="formBox">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Task Name"
              value={subTaskName}
              onChange={(e) => setSubTaskName(e.target.value)}
            />
          </Form.Group>
          <div className="buttonBox">
            <Button variant="primary" id="modalId" type="button" onClick={saveSubTask}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default ToDo;
