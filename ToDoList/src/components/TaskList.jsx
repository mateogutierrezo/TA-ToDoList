import { useMemo, useCallback, useState } from 'react';
import { TaskItem } from './index';

const TaskList = ({tasks}) => {
    const orderedTasks = useMemo(() => {
        console.log("no ordeno :(")
        return [...tasks].sort((a, b) => a.priority - b.priority);
    }, [tasks]);

    const handleComplete = useCallback((key) => {

    }, []);

    const handleDelete = useCallback((index) => {
        tasks = orderedTasks.splice(index, 1);
        console.log(tasks)
    }, []);

    return (
        <ul>
            {orderedTasks.map((task, index) => (
                <TaskItem key={index} 
                taskContent={task.name} 
                onComplete={handleComplete} 
                onDelete={() => handleDelete(index)} 
                priority={task.priority}/>
            ))}
        </ul>
    )
}

export { TaskList }