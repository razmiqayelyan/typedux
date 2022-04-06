import { ITodo, ITYPES } from "../interfaces"

interface ICTodo{
    type: ITYPES.ADD_TODO
    payload: string
}

export const createTodo = (todo:string):ICTodo => {return {type:ITYPES.ADD_TODO, payload:todo}}