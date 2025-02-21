import React, {useEffect, useState} from "react";
import {_Task, Task_Remove} from "./assets/scss/Task.scss";
import axios from 'axios';

function Task({no, name, done, deleteTask}) {

    const [isChecked, setIsChecked] = useState(done);

    const updateCheck = async (no, check) => {
        try {
            const response = await axios.put(`/kanbanboard/task/${no}?done=${check}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setIsChecked(check);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setIsChecked(isChecked);
    }, []);

    return (
        <li className={_Task}>
            <input type="checkbox" checked={isChecked === 'Y'}
                   onChange={(e) => {
                       updateCheck(no, isChecked === 'Y' ? 'N' : 'Y');
                   }}></input> {name}
            <a href="#" className={Task_Remove}
               onClick={(e) => {
                   console.log("click");
                   deleteTask(no);
               }
               }></a>
        </li>
    );
}

export default Task;
