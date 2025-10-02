import { useState, useCallback, createContext } from 'react'
import './App.css'
import { TaskForm, TaskList } from "./components";

export const TasksContext = createContext()

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    }

    const handleComplete = useCallback((id) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    }, []);

    const handleDelete = useCallback((id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    return (
        <>
            <TaskForm onAddTask={handleAddTask}/>
            <TasksContext value={{tasks, handleComplete, handleDelete}}>
                <TaskList/>
            </TasksContext>
        </>
    )
}

export default App