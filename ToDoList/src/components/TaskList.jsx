import { useMemo, useContext } from 'react';
import { TaskItem } from './index';
import { TasksContext } from '../App'

const TaskList = () => {
    const { tasks } = useContext(TasksContext)

    const orderedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => a.priorityNum - b.priorityNum);
    }, [tasks]);

    const pendingTasks = useMemo(() => {
        return [...tasks].filter(task => task.completed === false).length
    }, [tasks])

    return (
        <>
            <p>Tareas pendientes: {pendingTasks}</p>
            <ul>
            {orderedTasks.map((task) => (
                <TaskItem
                key={task.id} 
                task={task}
                />
            ))}
            </ul>
        </>
    )
}

export { TaskList };
