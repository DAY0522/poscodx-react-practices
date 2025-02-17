import React from "react";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";
import { _Card } from "./assets/scss/Card.scss";

function Card({ no, title, description, tasks }) {
  return (
    <div className={_Card}>
      <CardTitle title={title} />
      <CardDetails description={description} tasks={tasks} />
    </div>
  );
}

export default Card;
