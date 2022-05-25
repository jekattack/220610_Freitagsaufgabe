import KanbanColumn from "./KanbanColumn";
import './KanbanGallery.css'

export default function KanbanGallery(){
    const status = ["Open","In Progress","Done"]

    return(
        <div className={'gallery'}>
            {status.map(item=> <div>
                <h1>{item}</h1>
                <KanbanColumn/>
            </div>)}
        </div>
    )
}