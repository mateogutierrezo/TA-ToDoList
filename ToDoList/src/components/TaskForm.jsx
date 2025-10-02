import {useRef, useEffect} from 'react';

const TaskForm = ({ onAddTask, onChecked }) => {
    const inputNameRef = useRef(null); 
    const inputDescriptionRef = useRef(null);
    const selectRef = useRef(null);

    const handleSubmit = () => {
        const inputText = inputNameRef.current.value.trim();
        const priorityNum = parseInt(selectRef.current.value);
        const inputDescription = inputDescriptionRef.current.value;
        if (!inputText) return;

        const newTask = {
            id: Date.now(),
            name: inputText,
            description: inputDescription,
            priorityNum: priorityNum,
            completed: false
        }
        onAddTask(newTask);
        inputNameRef.current.value = "";
        inputDescriptionRef.current.value = "";
    }

    useEffect(() => {
        inputNameRef.current.focus();
    }, []);

    return (
        <div className="header">
            <div className="form-container">
                <input ref={inputNameRef} type="text" placeholder="Ingrese una tarea..." />
                <input ref={inputDescriptionRef} type="text" placeholder="Descripción..."/>
                <select ref={selectRef} name="prioridad"> 
                    <option value="1">Prioridad Alta</option>
                    <option value="2">Prioridad Media</option>
                    <option value="3">Prioridad Baja</option>
                </select>
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div className="visualization">
                <p>Visualización detallada</p>
                <input type="checkbox" onChange={onChecked} className="visual-check"></input>
            </div>
        </div>
    )
}

export default TaskForm