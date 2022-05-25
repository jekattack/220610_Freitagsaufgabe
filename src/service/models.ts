export const status = ["Open","In Progress","Done"]

export interface KanbanItem {
    id : string,
    task : string,
    description : string,
    status : string;
}