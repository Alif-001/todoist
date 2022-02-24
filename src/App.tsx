import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ChangeEvent, FC, useState } from "react";
import { FormControl, InputGroup } from 'react-bootstrap';
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="mt-5">
        Todoist
      </h1>
      <div className="m-5">
        <div className="inputContainer">
          
          <div className="d-flex flex-column">
          <p>Add Task : </p>
          
          </div>

          <div>


          <InputGroup className="mb-3">
    <FormControl
      placeholder="enter your task"
      aria-label="enter your task"
      aria-describedby="basic-addon2" type="text"
     
      name="task"
      value={task}
         required
      onChange={handleChange}
    />
 
  </InputGroup>
          </div>
          

        
        </div>
        <button className="btn btn-primary "  onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
