import { ITodo, ITYPES } from "../../interfaces"


interface IAction{
    type: string
    payload: any
} 

interface IState{
    state: ITodo[] 
}

export const TodoReducer = (state:ITodo[] = [] , action:IAction) => {
    if(action.type === ITYPES.ADD_TODO){
        return [...state, {id: Math.random(), title: action.payload, complated: false}]
    }
    else if(action.type === ITYPES.EDIT_TODO){
    //   ......
    }
    else if(action.type === ITYPES.DELETE_TODO){
        return state.filter((todo) => todo.id != action.payload)
    }
    else{
        return state
    }
    
}