import './KanbanCard.css'
import {KanbanItem} from "../service/models";
import {changeItem, deleteItem, getAllItems} from "../service/apiService";
import {Dispatch, SetStateAction} from "react";

interface KanbanCardProps{
    infos : KanbanItem
    onChange : Dispatch<SetStateAction<KanbanItem[]>>
}

export default function KanbanCard({infos, onChange} : KanbanCardProps){

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

    const updateItem = () => {
        changeItem(infos)
            .then(() =>{
                getAllItems()
                    .then(data => onChange(data))
            })
            .catch(err => console.log(err.message))
    }

    return(
        <div className={'card'}>
            <h3>{infos.task}</h3>
            <p>{infos.description}</p>
            <div className={'cardBtn'}>
                {infos.status==="OPEN"?
                    <button className={'btn'} onClick={()=>removeItem()}>{"<Delete"}</button>
                    :
                    <button className={'btn'} onClick={()=>returnItem()}>{"<Back"}</button>
                }
                {infos.status==="DONE"?
                    <button className={'btn'} onClick={()=>removeItem()}>{"Delete>"}</button>
                    :
                    <button className={'btn'} onClick={()=>advanceItem()}>{"Next>"}</button>
                }
            </div>
        </div>
    )
}