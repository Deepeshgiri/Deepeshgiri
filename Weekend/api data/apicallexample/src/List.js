import React, { useState } from "react";

function List1() {
    const [country,setCountry] =useState("--country--")
    const [state,setState] = useState("--city--")
    const [city,setcity] = useState("--city--")
    const [states,setStates] =useState([])
    const [cities,setCities] = useState([])

    const changeCountry =(e)=>{
        setCountry(e.target.value)
        setStates(countries.find((ctr)=>ctr.name===e.target.value).states)
    }

    const changeState =(e)=>{
        setState(e.target.value)
        setCities(states.find((state)=>state.name===e.target.value).cities)
    }

    const changeCity =(e)=>{
        setcity(e.target.value)
    }
  let countries = [
    {
      name: "los angeles",
      states: [
        {
          name: "1 los angles",
          cities: ["area 1", "area 2"],
        },
        {
          name: "2 los angles",
          cities: ["area 3", "area 4"],
        },
        {
          name: "3 los angles",
          cities: ["area 5", "area 6"],
        },
      ],
    },
    {
      name: "virgina",
      states: [
        {
          name: "1 virgina",
          cities: ["area 11", "area 211"],
        },
        {
          name: "2 virgina",
          cities: ["area 33", "area 44"],
        },
        {
          name: "3 virgina",
          cities: ["area 55", "area 66"],
        },
      ],
    },
    {
      name: "paris",
      states: [
        {
          name: "1 paris",
          cities: ["area 111", "area 222"],
        },
        {
          name: "2 paris",
          cities: ["area 3333", "area 44444"],
        },
        {
          name: "3 paris",
          cities: ["area 5555", "area 6666"],
        },
      ],
    },
  ];
  return <>
  
    <select value={country} onChange={changeCountry}>
        <option>---country---</option>
        {
            countries.map((ctr,i)=>
            <option value={ctr.name} key={i}>{ctr.name}</option>)
        }
    </select>

    <select value={state} onChange={changeState}>
        <option>---state---</option>
        {
            states.map((state,i)=>
             <option value={state.name} key={i}>{state.name}</option>
            )
        }
    </select>

    <select value={city} onChange={changeCity}>
        <option>---city---</option>
        {
            cities.map((city,i)=>
            <option value={city} key={i}>{city}</option>
         )
       
        }
    
        
    </select>
  
  </>;
}

export default List1;
