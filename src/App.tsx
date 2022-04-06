import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITYPES } from './interfaces'
import { createTodo } from './redux/actions'
import { State } from './redux/reducers/Reducer'

const App = () => {

  const [todo, setTodo] = useState<string>('')
  const dispatch = useDispatch()
  const todos = useSelector((state:State) => {return state.todo})
  
  return (
    <div>
      <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)}/>
      <button
        onClick={() => {

          todo && dispatch(createTodo(todo));
          setTodo('')
        }
        }
      >Add</button>
      <br />
      <div>Click for Delete</div>
      <ul>
        {todos? todos?.map(todo => <li onClick={() => {
          dispatch({type: ITYPES.DELETE_TODO, payload:todo.id})
        }} key={todo.id}>{todo.title}</li> ): ""}
      </ul>
    </div>
  )}


export default App