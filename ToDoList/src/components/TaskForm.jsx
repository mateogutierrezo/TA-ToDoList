import {useRef} from 'react';

const TaskForm = ({onAddTask}) => {
    const inputNameRef = useRef(null); 
    const inputDescriptionRef = useRef(null);
    const selectRef = useRef(null);

    const handleSubmit = () => {
        const inputText = inputNameRef.current.value.trim();
        const priorityNum = selectRef.current.value;
        const inputDescription = inputDescriptionRef.current.value;
        if (!inputText) return;
        let priority = "";
        switch (priorityNum) {
            case "1": 
                priority = "Prioridad Alta";
                break;
            case "2": 
                priority = "Prioridad Media";
                break;
            case "3": 
                priority = "Prioridad Baja";
                break;
        }

        const newTask = {
            name: inputText,
            description: inputDescription,
            priority: priority,
            completed: false
        }
        onAddTask(newTask);
        inputNameRef.current.value = "";
        inputNameRef.current.focus();
    }

    return (
        <>
            <input ref={inputNameRef} type="text" placeholder="Ingrese una tarea..." />
            <input ref={inputDescriptionRef} type="text" placeholder="descripción"/>
            <button onClick={handleSubmit}>Add</button>
            <select ref={selectRef} name="prioridad"> 
                <option value="1">Prioridad Alta</option>
                <option value="2">Prioridad Media</option>
                <option value="3">Prioridad Baja</option>
            </select>
        </>
    )
}

export default TaskForm