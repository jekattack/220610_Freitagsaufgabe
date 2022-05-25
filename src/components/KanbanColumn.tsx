import KanbanCard from "./KanbanCard";
import './KanbanColumn.css'
import {KanbanItem} from "../service/models";

interface KanbanColumnInterface{
    tasks : Array<KanbanItem>
}

export default function KanbanColumn(props : KanbanColumnInterface){
    return(
        <div className={'column'}>
            {props.tasks.map(item =>
                <KanbanCard infos={item}/>
            )}
        </div>
    )
}