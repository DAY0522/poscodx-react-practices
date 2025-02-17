import React from "react";
import { _Task } from "./assets/scss/Task.scss";

function Task({ no, name, done }) {
  return (
    <li className={_Task}>
      <input type="checkbox" checked={done}></input> {name}
      <a href="#" className={"Task_Remove"}></a>
    </li>
  );
}

export default Task;
