import axios from "axios";
export default function Task({ tasks, setTasks, selectedTask }) {
    function archiveTask() {
        const newList = tasks.map((task) => {
            if (task.id === selectedTask.id) {
                const updatedTask = {
                    ...task,
                    archived: !task.archived,
                };
                return updatedTask;
            }
            return task;
        });
        setTasks(newList);
        const updateTask = async (task) => {
            axios.put(`http://localhost:8000/api/tasks/${task.id}`, { archived: !task.archived })
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        updateTask(selectedTask)
    }

    function deleteTask() {
        setTasks(oldTasks => {
            return oldTasks.filter(task => task.id !== selectedTask.id)
        })
        const deleteData = async (task) => {
            axios.delete(`http://localhost:8000/api/tasks/${task.id}`)
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }
        deleteData(selectedTask);
    }
    return (

        <li>
            <button onClick={deleteTask}>-</button>
            <input type="checkbox" name="task" id={selectedTask.id} onChange={archiveTask} />
            <label for={selectedTask.id}>{selectedTask.name}</label>
        </li>
    )
}