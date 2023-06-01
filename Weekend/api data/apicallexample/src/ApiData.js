import React from 'react'
import data1 from './data.json'

function ApiData() {
    
  return (
    <>
    {data1.map((list,id)=><h1 key={id}>{list.id}<span> </span>{list.name}<span> </span>{list.city}</h1>)}
    
    </>
  )
}

export default ApiData