import axios from "axios";

export const getAllItems = () =>{
    return axios.get(`api/kanban`)
        .then(response => response.data)
}