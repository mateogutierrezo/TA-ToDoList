import { useState, useCallback, createContext } from 'react'
import './App.css'
import { TaskForm, TaskList } from "./components";

export const TasksContext = createContext();
export const DisplayModeContext = createContext();

function App() {
    const [tasks, setTasks] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const handleAddTask = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    }

    const handleComplete = useCallback((id) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    }, []);

    const handleDelete = useCallback((id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    const handleCheck = useCallback((event) => {
        setIsChecked(event.target.checked);
    }, []);

    return (
        <>
            <TaskForm onAddTask={handleAddTask} onChecked={handleCheck}/>
            <TasksContext.Provider value={{tasks, handleComplete, handleDelete}}>
                <DisplayModeContext.Provider value={{ isChecked }}>
                    <TaskList/>
                </DisplayModeContext.Provider>
            </TasksContext.Provider>
        </>
    )
}

export default App