import React, {useState} from "react";
import TaskList from "./TaskList";

function CardDetails({no, description}) {

    return (
        <div className={"Card_Details"}>
            {description}
            <TaskList no={no}/>
        </div>
    );
}

export default CardDetails;
