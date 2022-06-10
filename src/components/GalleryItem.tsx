import './GalleryItem.css';
import Todo from "../service/model";
import {useNavigate} from "react-router-dom";

interface GalleryItemProps{
    todo: Todo;
    onTaskChange: () => void;
}

export default function GalleryItem(props: GalleryItemProps) {


    const nav = useNavigate();

    const sendPutNext = () => {
        fetch('http://localhost:8080/api/kanban/next', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                task: props.todo.task,
                description: props.todo.description,
                status: props.todo.status,
                id: props.todo.id
            })
        }).then(() => props.onTaskChange())
    }
    const sendPutPrev = () => {
        fetch('http://localhost:8080/api/kanban/prev', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                task: props.todo.task,
                description: props.todo.description,
                status: props.todo.status,
                id: props.todo.id
            })
        }).then(() => props.onTaskChange())
    }
    const sendDelete = () => {
        fetch(`http://localhost:8080/api/kanban/${props.todo.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                task: props.todo.task,
                description: props.todo.description,
                status: props.todo.status,
                id: props.todo.id
            })
        }).then(() => props.onTaskChange())
    }



    return (

        <div className="gallery-item-border-wrapper">
            <div className="gallery-item-wrapper">
                <div className="todo-info-wrapper">
                    {props.todo.task}
                </div>
                <div className="todo-info-wrapper">
                    {props.todo.description}
                </div>
                <div className="todo-button-wrapper">
                    {
                        (props.todo.status !== "OPEN") &&
                        <button onClick={sendPutPrev}>Prev</button>
                    }
                        <button onClick={()=>nav('/'+props.todo.id)}>Edit</button>
                    {
                        (props.todo.status !== "DONE") &&
                        <button onClick={sendPutNext}>Next</button>
                    }
                    {
                        (props.todo.status === "DONE") &&
                        <button onClick={sendDelete}>Delete</button>
                    }
                </div>
            </div>
        </div>
    );
}