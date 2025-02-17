import React from "react";
import Card from "./Card";
import { Card_List } from "./assets/scss/CardList.scss";
import data from "./assets/json/data";

function CardList() {
  const task = ["To Do", "Doing", "Done"];
  const todoTask = data.filter((task) => task.status === "ToDo");
  const doingTask = data.filter((task) => task.status === "Doing");
  const doneTask = data.filter((task) => task.status === "Done");

  return (
    <>
      <div className={Card_List}>
        <h1>{task[0]}</h1>
        {todoTask.map((task) => (
          <Card
            no={task.no}
            title={task.title}
            description={task.description}
            tasks={task.tasks}
          />
        ))}
      </div>

      <div className={Card_List}>
        <h1>{task[1]}</h1>
        {doingTask.map((task) => (
          <Card
            no={task.no}
            title={task.title}
            description={task.description}
            tasks={task.tasks}
          />
        ))}
      </div>

      <div className={Card_List}>
        <h1>{task[2]}</h1>
        {doneTask.map((task) => (
          <Card
            no={task.no}
            title={task.title}
            description={task.description}
            tasks={task.tasks}
          />
        ))}
      </div>
    </>
  );
}

export default CardList;
