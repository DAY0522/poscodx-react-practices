import React from "react";
import { Card_Title } from "./assets/scss/CardTitle.scss";

function CardTitle({ title }) {
  return <div className={Card_Title}>{title}</div>;
}

export default CardTitle;
