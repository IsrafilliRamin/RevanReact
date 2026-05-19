import React from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
  return (
    <ul className=' rounded-lg flex  flex-col gap-3 w-96 text-gray-900'>
      {
        todos.map((todo,index)=><Todo key={index} todo={todo} />)
      }
    </ul>
  )
}

export default Todos