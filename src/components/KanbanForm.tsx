import './KanbanForm.css'

export default function KanbanForm(){
    return(
        <div className={'form'}>
            <input type="text" placeholder={'Neue Task'}/>
            <input type="text" placeholder={'Beschreibung'}/>
            <button>Hinzufügen</button>
        </div>
    )
}