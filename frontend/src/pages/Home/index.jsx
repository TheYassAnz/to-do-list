import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const auth = useAuthUser();

    const fetchTasks = () => {
        axios
            .get(`http://localhost:8000/api/tasks`)
            .then((response) => {
                console.info('response:', response.data);
                setTasks(response.data);
            })
            .catch((error) => console.error('error:', error));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2>Bienvenue {auth.firstname + ' ' + auth.lastname}</h2>
            </div>
        </>
    );
}
