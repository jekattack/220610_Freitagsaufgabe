import './Form.css';
import {useEffect, useState} from "react";
import Todo from '../service/model';

interface FormProps{
    onTaskCreation: () => void;
}


export default function Form(props: FormProps){

    const [newTodo, setNewTodo] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const sendPostRequest = () => {
           fetch('http://localhost:8080/api/kanban', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                   task: newTodo,
                   description: newDescription,
                   status: "OPEN"
               })
           }).then(() => props.onTaskCreation())
    }

    return (
        <div className="form-wrapper">
            <div className="form-input-wrapper">
                <label htmlFor="task-input">Task:</label>
                <input type="text" id="task-input" value={newTodo} onChange={ev => setNewTodo(ev.target.value)} />
            </div>
            <div className="form-input-wrapper">
                <label htmlFor="despricption-input">Despricption:</label>
                <input type="text" id="despricption-input" value={newDescription} onChange={ev => setNewDescription(ev.target.value)} />
            </div>
            <button id="form-send-button" onClick={sendPostRequest}>Add Todo</button>
        </div>
    )
}