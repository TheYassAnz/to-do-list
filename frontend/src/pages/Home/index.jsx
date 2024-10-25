import Task from '../../components/Task';
import Input from '../../components/Input';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('http://localhost:8000/api/tasks');
                setTasks(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <h2>Welcome to the Home Page 🙋</h2>
            <h3>Current Tasks</h3>
            <ul style={{ listStyle: 'none' }}>
                {tasks.map((task, index) => (
                    !task.archived && <Task key={index} selectedTask={task} tasks={tasks} setTasks={setTasks} />
                ))}
            </ul>
            <details>
                <summary style={{ fontSize: 'large' }}>Archived Tasks</summary>
                <ul style={{ listStyle: 'none' }}>
                    {tasks.map((task, index) => (
                        task.archived && <Task key={index} selectedTask={task} tasks={tasks} setTasks={setTasks} />
                    ))}
                </ul>
            </details><br />
            <Input tasks={tasks} setTasks={setTasks} />
        </>
    )
}