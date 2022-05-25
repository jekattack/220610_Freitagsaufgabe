import axios from "axios";
import {KanbanItem} from "./models";

export const getAllItems = () =>{
    return axios.get(`api/kanban`)
        .then(response => response.data)
}

export const postNewItem = (item : KanbanItem) =>{
    return axios.post(`api/kanban`,item)
        .then(response => response.data)
}