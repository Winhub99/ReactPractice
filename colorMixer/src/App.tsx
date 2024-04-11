import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  })

  const [finalColor,setFinalColor]= useState("")

  const handleCheckboxes = (event: { target: { name: any; checked: any; }; }) => {
    
    const { name, checked } = event.target;
    console.log("the name property is: ",name)
    console.log("the checked property is: ",checked)
    setCheckboxes((prev) =>({...prev,[name]:checked}))
    // console.log(finalColor)

  }
  useEffect(()=>{

    function mixColors(col1:string,col2:string){

      return `color-mix(in srgb,${col1},${col2})`
    }
    function setColor(){
      if(checkboxes.checkbox1){
        if(checkboxes.checkbox2){
          const color=mixColors("red","green")
          console.log("mixed color is:",color)
          setFinalColor(color)
        }else if(checkboxes.checkbox3){
          const color=mixColors("red","blue")
          setFinalColor(color)
        }else{
          setFinalColor("red")

        }
        
      }else if(checkboxes.checkbox2){
        setFinalColor("green")
      }else if(checkboxes.checkbox3){
        setFinalColor("blue")
      }
      
      else{
        setFinalColor("")
      }
    };
    setColor();
  },[checkboxes])

  //const bgColor= (selectedValue==="red"?"red":selectedValue==="green"?"green":"blue");
  return (
    <>
      <h2>Create radio buttons here</h2>
      <div id='container' style={{ display: 'flex', gap: '10px' }}>
        <span style={{ marginLeft: '75px' }}>
          <input id='option1' type='checkbox' name='checkbox1'  checked={checkboxes.checkbox1} onChange={handleCheckboxes} />
          <label htmlFor="option1">Red</label>
        </span>
        <span>
          <input id='option2' type='checkbox' name='checkbox2'  checked={checkboxes.checkbox2} onChange={handleCheckboxes} />
          <label htmlFor="option2">Green</label>
        </span>
        <span>
          <input id='option3' type='checkbox' name='checkbox3'  checked={checkboxes.checkbox3} onChange={handleCheckboxes} />
          <label htmlFor="option3">Blue</label>
        </span>

      </div>
      <div id='colorBox' style={{ width: '350px', height: '175px', backgroundColor: finalColor, marginTop: '20px' }}  >

      </div>
    </>
  )
}

export default App
