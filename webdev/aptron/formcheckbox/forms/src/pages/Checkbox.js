import React, { useState } from 'react'

function Checkbox() {

    const [fruits,setFruits] = useState([])
    function handleInput(e){
        let value = e.target.value
        let checked = e.target.checked
        console.log(value , checked)


        if (checked){
            setFruits([...fruits,value])
        }else{
            setFruits(fruits.filter((fruits)=>fruits!==value))
        }
    }
 function handleSubmit(e){
    e.preventdefault()
    console.log(fruits)

    
 }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type='checkbox' value='apple'name='apple' onChange={handleInput}></input><label>apple</label><br/>  
            <input type='checkbox' value='mango'name='mango' onChange={handleInput}></input><label>mango</label><br/>  
            <input type='checkbox' value='papaya'name='papaya' onChange={handleInput}></input><label>papaya</label><br/>  
            <input type='checkbox' value='grapes'name='grapes' onChange={handleInput}></input><label>grapes</label><br/>  

            <button type='submit'>submit</button>

        </form>

    </>
  )
}

export default Checkbox