import React from "react";
import CardTitle from "./CardTitle";
import CardDetails from "./CardDetails";
import { _Card } from "./assets/scss/Card.scss";

function Card() {
  return (
    <div className={_Card}>
      <CardTitle />
      <CardDetails />
    </div>
  );
}

export default Card;
