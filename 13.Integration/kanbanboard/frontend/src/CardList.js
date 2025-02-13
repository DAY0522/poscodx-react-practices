import React from "react";
import Card from "./Card";
import { Card_List } from "./assets/scss/CardList.scss";

function CardList() {
  const title = ["To Do", "Doing", "Done"];

  return (
    <>
      <div className={Card_List}>
        <h1>{title[0]}</h1>
        <Card />
      </div>

      <div className={Card_List}>
        <h1>{title[1]}</h1>
      </div>

      <div className={Card_List}>
        <h1>{title[2]}</h1>
      </div>
    </>
  );
}

export default CardList;
