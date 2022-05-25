import './KanbanCard.css'
import {KanbanItem} from "../service/models";

interface KanbanCardProps{
    infos : KanbanItem
}

export default function KanbanCard({infos} : KanbanCardProps){
    return(
        <div className={'card'}>
            <h3>{infos.task}</h3>
            <p>{infos.description}</p>
            <div className={'cardBtn'}>
                <button className={'btn'}>{"<Back"}</button>
                <button className={'btn'}>{"Next>"}</button>
            </div>
        </div>
    )
}