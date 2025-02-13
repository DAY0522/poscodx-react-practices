import React from "react";
import CardList from "./CardList";
import { Kanban_Board } from "./assets/scss/KanbanBoard.scss";

function KanbanBoard() {
  return (
    <div className={Kanban_Board}>
      <CardList />
    </div>
  );
}

export default KanbanBoard;
