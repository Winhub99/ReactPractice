import { useState } from 'react'

import './App.css'

function App() {
  const [selectedValue,setSelectedValue] = useState("");

  const handleRadioChange=(val:string)=>{
    console.log(val)
    setSelectedValue(val)
  }
  return (
    <>
    <h2>Create radio buttons here</h2>
    <div id='container' style={{display:'flex',gap:'10px' }}>
      <span style={{marginLeft:'75px'}}>
        <input id='option1' type='radio' value={"red"} checked={selectedValue ==="red"} onChange={()=>handleRadioChange("red")}/>
        <label htmlFor="option1">Red</label>
      </span>
      <span>
        <input id='option2' type='radio' value={"green"} checked={selectedValue==="green"} onChange={()=> handleRadioChange("green")} />
        <label htmlFor="option2">Green</label>
      </span>
      <span>
        <input id='option3' type='radio' value={"blue"} checked={selectedValue==="blue"} onChange={()=> handleRadioChange("blue")}/>
        <label htmlFor="option3">Blue</label>
      </span>

    </div>
    <div id='colorBox' style={{width:'350px',height:'175px',backgroundColor:'black', marginTop:'20px'}}>

</div>
    </>
  )
}

export default App
