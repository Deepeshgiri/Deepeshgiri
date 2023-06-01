import react, { useEffect, useState } from 'react'

export function Home (){
    // setTimeout(()=>{
    //     useEffect(()=>{
    //         console.log('use effect called')
    //     })

    // },3000)

    const [count, setCount] = useState(0)

   
    useEffect(()=>{
        console.log("use effect has been used")
    })
    
   
    return(
        <div>
        <h1 style={{color:'yellow'}}>Home component</h1>
        <h2 style={{color:'red'}}>{count}</h2>
        <button style={{color:'blue'}} onClick={()=>setCount(count+1)}>Update</button>
        </div>

    )
}