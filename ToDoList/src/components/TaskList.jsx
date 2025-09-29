import { memo, useCallback, useState } from 'react';
import { TaskItem } from './index';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const handleComplete = useCallback((tid) => {

    }, []);

    const handleDelete = useCallback((tid) => {
        
    }, []);

    const addTasks = () => {

    }
    return (
        <ul>
            {tasks.map((task, index) => (
                memo(<TaskItem taskContent={taskContent}/>)
            ))}
        </ul>
    )
}

export default TaskList