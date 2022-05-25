import Header from "../components/Header";
import KanbanGallery from "../components/KanbanGallery";
import React from "react";
import KanbanForm from "../components/KanbanForm";

export default function KanbanPage(){
    return(
        <div className={'kanbanPage'}>
            <Header/>
            <KanbanForm/>
            <KanbanGallery/>
        </div>
    )
}