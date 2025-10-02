import { useMemo, useContext } from 'react';
import { TaskItem } from './index';
import { TasksContext } from '../App'

const TaskList = () => {
    const { tasks } = useContext(TasksContext)

    const orderedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => a.priorityNum - b.priorityNum);
    }, [tasks]);

    return (
        <ul>
        {orderedTasks.map((task) => (
            <TaskItem
            key={task.id} 
            task={task}
            />
        ))}
        </ul>
    )
}

export { TaskList };
