export interface ITodo{
    id: number
    title: string
    complated: boolean
}

export enum ITYPES{
    ADD_TODO = "ADD_TODO",
    EDIT_TODO = "EDIT_TODO",
    DELETE_TODO = "DELETE_TODO"
}