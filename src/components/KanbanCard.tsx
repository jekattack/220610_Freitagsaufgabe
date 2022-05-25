import './KanbanCard.css'

export default function KanbanCard(){
    return(
        <div className={'card'}>
            <h3>Code schreiben</h3>
            <p>Code für die Freitagsaufgabe fertigstellen</p>
            <div className={'cardBtn'}>
                <button className={'btn'}>{"<Back"}</button>
                <button className={'btn'}>{"Next>"}</button>
            </div>
        </div>
    )
}