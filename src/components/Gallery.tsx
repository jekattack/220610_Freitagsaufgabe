import './Gallery.css';
import './GalleryColumn.css';
import GalleryColumn from "./GalleryColumn";
import GalleryItem from "./GalleryItem";
import React, {useEffect, useState} from "react";
import Todo from "../service/model";
import Form from "./Form";

export default function Gallery(){

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetchTasks()
    }, []);

    const openTodos = todos.filter(todo => todo.status === "OPEN")
    const inProgressTodos = todos.filter(todo => todo.status === "IN_PROGRESS")
    const doneTodos = todos.filter(todo => todo.status === "DONE")

    const fetchTasks = () => {
        fetch('http://localhost:8080/api/kanban')
            .then(response => response.json())
            .then((todos: Todo[]) => {
                setTodos(todos)
            })
    }


    return (
        <div>
            <div className="form-wrapper">
                <Form onTaskCreation={fetchTasks}/>
            </div>
            <div className="gallery-column-wrapper">
                <div className="single-column-wrapper">
                    <div>OPEN</div>
                    <GalleryColumn todos={openTodos} onTaskChange={fetchTasks} />
                </div>
                <div className="single-column-wrapper">
                    <div>IN PROGRESS</div>
                    <GalleryColumn todos={inProgressTodos} onTaskChange={fetchTasks} />
                </div>
                <div className="single-column-wrapper">
                    <div>DONE</div>
                    <GalleryColumn todos={doneTodos} onTaskChange={fetchTasks} />
                </div>
            </div>
        </div>
    )
}