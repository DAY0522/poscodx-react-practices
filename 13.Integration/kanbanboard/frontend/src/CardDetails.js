import React from "react";
import TaskList from "./TaskList";

function CardDetails({ description, tasks }) {
  return (
    <div className={"Card_Details"}>
      {description}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default CardDetails;
