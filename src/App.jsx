
import { useState } from 'react'
import './App.css'
import AntBut from './components/AntButton'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/layout/Main'


/* import Revan from './Revan' */

import Revan from './Revan'
import { Button, Div, Button2 } from './styledComponent/styled'
import FormTodo from './components/todos/Form'
import Todos from './components/todos/Todos'

/* import './styled/revan.scss' */

function App() {

  // hooks
  // useState
  // value  // function     // initial value
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(false);



  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  console.log(todos);
  

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([...todos,input]);
    setInput("");
  }



  /* console.log(show);

  document.body.style.backgroundColor = show ? "blue" : "yellow";
   */


  return (

    <div className='m-5 flex flex-col items-center justify-center gap-4'>
<div className='bg-blue-600 h-52 flex items-center justify-center rounded-2xl w-6xl'>Revan branchi</div>
 
      <FormTodo submitHandler={submitHandler} input={input} setInput={setInput} />
      <Todos todos={todos} />

      


      {/* <input onChange={(e)=>{setInput(e.target.value)}} className='bg-gray-200  border w-[200px] border-yellow-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" placeholder="Enter text here..." />


<div>{input}</div>


<button onClick={()=>{setShow(!show)}} className='bg-yellow-600 py-3 px-5 rounded-md text-white cursor-pointer'>night mode</button>
 */}


      {/* <button style={count > 10 ? {backgroundColor : "gray"} : {}} onClick={()=>setCount(count+1)} className='m-5 cursor-pointer rounded-sm bg-green-600 w-48 text-cyan-50'>increment</button>
<button disabled={count === 0} onClick={()=>setCount(count-1)} className='m-5 cursor-pointer rounded-sm bg-red-600 w-48 text-cyan-50'>decrement</button>

    <div>{count}</div> */}

      {/*  <Header/>
    <Main/>
    <Footer/> */}




      {/*   <AntBut/> */}


      {/* <Div>Revan</Div>

  <Button>Click me</Button>
  <Button revan>Click me</Button>
  <Button2>Click you</Button2> */}



      {/*   <Revan color="blue" hello="Revan Neteresen"  />
      <Revan color="green" hello="Another Revan" />
      <Revan color="red" hello="Yet Another Revan" />
      <Revan color="yellow" hello="One More Revan" /> */}

    </div>
  )
}

export default App

