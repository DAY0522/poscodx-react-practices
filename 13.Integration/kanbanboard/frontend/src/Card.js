import React from "react";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";
import { _Card } from "./assets/scss/Card.scss";

function Card({ no, title, description }) {
    console.log(no);

  return (
    <div className={_Card}>
      <CardTitle title={title} />
      <CardDetails no={no} description={description}/>
    </div>
  );
}

export default Card;
