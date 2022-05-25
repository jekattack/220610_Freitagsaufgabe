import './KanbanCard.css'
import {KanbanItem} from "../service/models";
import {changeItem, deleteItem, getAllItems} from "../service/apiService";
import {Dispatch, SetStateAction, useState} from "react";

interface KanbanCardProps{
    infos : KanbanItem
    onChange : Dispatch<SetStateAction<KanbanItem[]>>
}

export default function KanbanCard({infos, onChange} : KanbanCardProps){

    const [edit, setEdit] = useState(false)
    const [task, setTask] = useState(infos.task)
    const [description, setDescription] = useState(infos.description)

    const removeItem = () =>{
        deleteItem(infos.id)
            .then(() => {
                getAllItems()
                    .then(data => onChange(data))
            })
            .catch(err => console.log(err))
    }

    const advanceItem = () => {
        if (infos.status==="OPEN"){
            infos.status="IN_PROGRESS"
        } else {
            infos.status="DONE"
        }
        updateItem()
    }

    const returnItem = () => {
        if (infos.status==="DONE"){
            infos.status="IN_PROGRESS"
        } else {
            infos.status="OPEN"
        }
        updateItem()
    }

    const saveItem = () => {
        infos.task=task
        infos.description=description
        updateItem()
        setEdit(!edit)
    }

    const updateItem = () => {
        changeItem(infos)
            .then(() =>{
                getAllItems()
                    .then(data => onChange(data))
            })
            .catch(err => console.log(err.message))
    }


        return edit ?
             <div className={'card_edit'}>
                 <input type="text" placeholder={'Aufgabe'} value={task} onChange={ev=> setTask(ev.target.value)}/>
                 <input type="text" placeholder={'Beschreibung'} value={description} onChange={ev=> setDescription(ev.target.value)}/>
                 <button className={'btn_edit'} onClick={saveItem}>save</button>
            </div>
            :
            <div className={'card'}>
                <h3>{infos.task}</h3>
                <p>{infos.description}</p>
                <div className={'cardBtn'}>
                    {infos.status==="OPEN"?
                        <button className={'btn'} onClick={()=>removeItem()}>{"<Delete"}</button>
                        :
                        <button className={'btn'} onClick={()=>returnItem()}>{"<Back"}</button>
                    }
                    <button className={'btn'} onClick={()=>setEdit(!edit)}>Edit</button>
                    {infos.status==="DONE"?
                        <button className={'btn'} onClick={()=>removeItem()}>{"Delete>"}</button>
                        :
                        <button className={'btn'} onClick={()=>advanceItem()}>{"Next>"}</button>
                    }
                </div>
            </div>


}