import { memo } from 'react'

const TaskItem = memo(({taskContent, onComplete, onDelete, classes, index, priority}) => {
    return (
        <li key={index} className={classes}>
            {taskContent}
            <button onClick={onComplete}>✔️</button>
            <button onClick={onDelete}>🚮</button>
            <p>{priority}</p>
        </li>
    )
})

export default TaskItem
