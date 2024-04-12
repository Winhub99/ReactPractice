import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [current, setCurrent] = useState("Start")
  const [isRunning, setIsrunning] = useState(false)

 useEffect(()=>{
  let timer: number | undefined;
  if(isRunning){
    timer = setTimeout(()=>{
      setCount(prev => prev+1)
    },1000);
  }else{
    clearTimeout(timer)
  }

  return ()=> clearTimeout(timer)
 },[count,isRunning])

  const handleButtonClick = () => {
    console.log("btn clicked")
    setIsrunning(prev => !prev)
    setCurrent(prev => (prev ==="Start"?"Stop":"Start"))
  }


  return (
    <div id='stopwatch' style={{display:'flex',flexDirection:'column',gap:'20px'}}>
      {count}
      <label htmlFor="watch">StopWatch</label>

      <button id='watch' onClick={handleButtonClick}>{current}</button>


    </div>
  )
}

export default App
