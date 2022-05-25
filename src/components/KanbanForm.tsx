import './KanbanForm.css'

export default function KanbanForm(){
    return(
        <div className={'form'}>
            <input type="text" placeholder={'Neue Task'}/>
            <button>Hinzufügen</button>
        </div>
    )
}