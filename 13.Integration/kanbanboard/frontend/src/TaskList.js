import React, {useEffect, useState} from "react";
import {Task_List, Input_Add_Task} from "./assets/scss/TaskList.scss";
import Task from "./Task";

function TaskList({no}) {

    const [tasks, setTasks] = useState(null);

    const fetchTasks = async () => {

        try {
            const response = await fetch(`/kanbanboard/task?cardNo=${no}`, {
                method: "get",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null,
            });

            const jsonResult = await response.json();

            if (!response.ok || jsonResult.response === 'fail') {
                throw new Error(`${response.status} ${jsonResult.message}`);
            }

            setTasks(jsonResult.data);

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className={Task_List}>
            <ul>
                {tasks?.map((task) => (
                    <Task no={task.no} name={task.name} done={task.done}/>
                ))}
            </ul>
            <input
                className={Input_Add_Task}
                type="text"
                placeholder="테스크 추가"
            ></input>
        </div>
    );
}

export default TaskList;
