import React from 'react'
import { useState } from 'react';
import './Practice.css'



export const Practice = () => {
  const [isclicked, setisclicked]= useState(0)
  const handleClick= ()=>{
    setisclicked(isclicked + 1)
  }
const [getInput, setgetInput]=useState(
  {
    name:"",
    state:"",
    date:""
  }
)

 const grabInput = (event)=>{
  setgetInput((getInput)=>{
      return {
        ...getInput,
        setname : event.target.value,
        }
        
  })

}

 
 const grabInput1 = (event)=>{
  setgetInput({
    ...getInput,
    setstate :event.target.value
  });
  console.log(getInput)
 }
 const grabInput2 = (event)=>{
  setgetInput({
    ...getInput,
    setdate :event.target.value
  });
  console.log(getInput)
 }
 

  return (
    <div>
<button onClick={handleClick} >{isclicked}</button>

<form>
<input placeholder='username'  type="text"  onChange={grabInput}/>
<input placeholder='userstate'  type="text" onChange={grabInput1}/>
<input placeholder='username' type="number" onChange={grabInput2}/>
</form>
</div>
  )
}
