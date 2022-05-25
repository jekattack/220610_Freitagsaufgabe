import './KanbanForm.css'
import {FormEvent,  useState} from "react";
import {postNewItem} from "../service/apiService";

interface KanbanFormProps{
    onChange: ()=>void
}

export default function KanbanForm(props : KanbanFormProps){

    const [task, setTask] = useState("");
    const [description, setDescription] = useState("")

    const handleSubmit = (ev : FormEvent)=>{
        ev.preventDefault();
        postNewItem({'task':task,'description':description,'status':"OPEN"})
            .then(()=> props.onChange)

    }

    return(
        <form className={'form'} onSubmit={event => handleSubmit(event)}>
            <input type="text" placeholder={'Neue Task'} value={task} onChange={ev=> setTask(ev.target.value)}/>
            <input type="text" placeholder={'Beschreibung'} value={description} onChange={ev=> setDescription(ev.target.value)}/>
            <button type={'submit'}>Hinzufügen</button>
        </form>
    )
}