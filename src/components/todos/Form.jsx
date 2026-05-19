import React from 'react'

const FormTodo = ({ input, setInput,submitHandler }) => {




  return (
    <form onSubmit={submitHandler}>
      <input  value={input}  onChange={(e)=>setInput(e.target.value)} type="text" placeholder='enter todo' className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <button className='bg-green-600 py-2 px-4 rounded-md text-white ml-2'>Add Todo</button>
    </form>
  )
}

export default FormTodo