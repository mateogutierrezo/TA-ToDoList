import { useState } from 'react'
import './App.css'
import { TaskForm, TaskList } from "./components";

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    }

    return (
        <>
            <TaskForm onAddTask={handleAddTask}/>
            <TaskList tasks={tasks}/>
        </>
    )
}

export default App