import React from "react";
import { Task_List, Input_Add_Task } from "./assets/scss/TaskList.scss";
import Task from "./Task";

function TaskList() {
  return (
    <div className={Task_List}>
      <ul>
        <Task />
      </ul>
      <input
        className={Input_Add_Task}
        type="text"
        placeholder="테스크 추가"
      ></input>
    </div>
  );
}

export default TaskList;
