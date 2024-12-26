import { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [isTaskUpdated, setIsTaskUpdated] = useState(true);
    const getTasks = () => {
        setIsTaskUpdated(!isTaskUpdated);
    };

    return (
        <TaskContext.Provider value={{ isTaskUpdated, getTasks }}>
            {children}
        </TaskContext.Provider>
    );
};
