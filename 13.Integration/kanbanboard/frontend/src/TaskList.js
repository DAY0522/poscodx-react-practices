import React, {useEffect, useState} from "react";
import {Task_List, Input_Add_Task} from "./assets/scss/TaskList.scss";
import Task from "./Task";
import task from "./Task";

function TaskList({no}) {

    const [tasks, setTasks] = useState(null);
    const [newTask, setNewTask] = useState('');  // 입력값을 저장

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

    const addTask = async (task) => {
        try {
            const response = await fetch('/kanbanboard/task', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            const jsonResult = await response.json();

            if (!response.ok || jsonResult.result === 'fail') {
                throw new Error(`${response.status} ${jsonResult.message}`);
            }

            setTasks([...tasks, jsonResult]);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // 입력값 변경 시 상태 업데이트
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    return (
        <div className={Task_List}>
            <ul>
                {tasks?.map((task) => (
                    <Task key={task.no} no={task.no} name={task.name} done={task.done} cardNo={no}/>
                ))}
            </ul>
            <form onSubmit={e => {
                e.preventDefault();

                if (newTask === '') {
                    alert('Task cannot be empty!');
                    return;
                }

                const task = {
                    no: null,
                    name: newTask,
                    done: 'N',
                    cardNo: no
                }

                addTask(task);
                setNewTask('');

            }}>
                <input
                    className={Input_Add_Task}
                    type="text"
                    placeholder="테스크 추가"
                    value={newTask}  // 상태로 연결
                    onChange={handleInputChange}  // 입력값 변경 핸들러
                />
            </form>

        </div>
    );
}

export default TaskList;
