import React, { useState } from 'react'

function Dependency() {
  const [city, setCity]= useState("city")
  const [country, setCountry ]= useState("country")
  const [state, setState] = useState("state")


  function changeCountry(e){
    setCountry(e.target.value)
  }
  const countries =[
    {
    name:"india",
    state:[
      {name:"uttarakhand",city:"dehradun"},
      {name:"bihar",city:"patna"},
      {name:"new delhi", city:"noida"}
    ]
  },{
    name:"russia",
    state:[
      {name:"moscow", city:"cremlin"}
    ]
  }]
  return (
    <div>
      <select value={country} onChange={changeCountry}><option>--country--</option>
      {countries.map((ctr)=><option value={ctr.name}>{ctr.name}</option>)}</select>

      <select value={state} onChange={changeState}><option>--state--</option>
      {countries.map((ctr)=><option value={ctr.state.name}>{ctr.state.name}</option>)}</select>

      </div>
  )
}

export default Dependency