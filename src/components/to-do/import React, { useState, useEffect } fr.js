import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Accordion, Button, Modal, Form } from "react-bootstrap";
import Loading from "../loading";
import { fetchToDoList } from "../../actions/to-do";
import { useHistory } from "react-router-dom";
import "./to-do.css";
const ToDo = ({ searchKey }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.toDoReducer);
  const isLoading = useSelector((state) => state.toDoReducer.isLoading);
  const [search, setSearch] = useState();
  const [toDoList, setToDoList] = useState(null);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [subTaskName, setSubTaskName] = useState("jj");
 

  useEffect(() => {
    (async () => {
      const toDoData =  await dispatch(fetchToDoList())
      console.log(toDoData)
      setToDoList(toDoData)
    })()
  }, []);

  

  const addSubTask = (event) => {
    setShow(true);
    event.stopPropagation();
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const saveSubTask = () => {
    console.log("save subtask");
  };
  const changeStatus = async (key , ekey) => {
    setSubTaskName(Math.random(10))
    setToDoList((prevState) => {
      const data=prevState;
      console.log("before",data[key].subTasks[ekey].status)
      data[key].subTasks[ekey].status = data[key].subTasks[ekey].status == 1 ? 0 : 1
      console.log("after",data[key].subTasks[ekey].status)
      return data; 
    })
  }
  useEffect(() => {
    console.log('searchKey');
  }, [toDoList]);
  return (
    <>
      <div className="middleContainer">
        {subTaskName}
        <Accordion defaultActiveKey="0">
        {toDoList && toDoList.map((val,key)=> <Card key={key} className="maintask">
            <Accordion.Toggle as={Card.Header} eventKey={key.toString()}>
              <span className="taskName">{val.taskName}</span>
              <span className="iconBox" onClick={addSubTask}>
                <i className="fa fa-plus"></i>
              </span>
            </Accordion.Toggle>
            {val.subTasks && val.subTasks.map((value , eKey) => 
            <Accordion.Collapse eventKey={key.toString()} key={eKey} onClick={() => changeStatus(key , eKey)}>
              <Card.Body>
                  <div >
                  {value.status ==1 ? <i className="fa fa-check-square"></i> : <i className="fa fa-square"></i>}
                  <div >{value.taskName}{value.status}</div>
                  </div>
              </Card.Body>
            </Accordion.Collapse>)}
          </Card>)}
          
        </Accordion>
      </div>
      <Modal show={show} onHide={handleClose}>
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
            <Button variant="primary" type="button" onClick={saveSubTask}>
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ToDo;
