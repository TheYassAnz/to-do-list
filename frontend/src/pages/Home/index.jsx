import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const auth = useAuthUser();

  const fetchTasks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/tasks`)
      .then((response) => {
        console.info("response:", response.data);
        setTasks(response.data);
      })
      .catch((error) => console.error("error:", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="">
      <h3 className="text-2xl">
        Bienvenue <strong>{auth.firstname + " " + auth.lastname} </strong>
      </h3>
      <div>
        <h4 className="text-xl">Vos tâches:</h4>
        <ul className="list-disc">
          {tasks.map((task) => (
            <li key={task._id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
