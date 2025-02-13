import React from "react";
import { _Task } from "./assets/scss/Task.scss";

function Task() {
  return (
    <li className={_Task}>
      <input type="checkbox" />
      사용자 스토리리스트업
      <a href="#" className={"Task_Remove"}></a>
    </li>
  );
}

export default Task;
