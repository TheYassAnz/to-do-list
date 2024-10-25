import React, { useState } from 'react';
import axios from 'axios';

export default function Input({ tasks, setTasks }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (text !== '') {
            setText('')
            setTasks([...tasks, {
                id: tasks.length,
                name: text,
                archived: false,
            }])
            console.log()
            const postData = async () => {
                axios.post('http://localhost:8000/api/tasks/', { id: tasks.length > 0 ? Number(tasks[tasks.length - 1].id) + 1 : 0, name: text, archived: false })
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error))
            }
            postData();
        }
    }
    const [text, setText] = useState('');
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="task-input" value={text} onChange={e => setText(e.target.value)} />
                <input type="submit" value="Add Task" />
            </form>
        </>
    )
}