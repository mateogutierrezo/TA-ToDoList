const TaskItem = (taskContent, handleComplete, handleDelete, classes, index) => {
    return (
        <li key={index} className={classes}>
            {taskContent}
            <button onClick={handleComplete(index)}>✔️</button>
            <button onClick={handleDelete(index)}>🚮</button>
        </li>
    )
}

export default TaskItem
