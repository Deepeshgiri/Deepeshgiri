import React, { useEffect, useState } from 'react'
import{Table} from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Users() {
    const [data, setData]=useState([])
   
    // function HandleUpdate(e){
    //   console.log(e)
    // }

    function setLocalStorage(id,name,email){
      localStorage.setItem("id",id)
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
    }
    function HandleDelete(e){
      console.log(e)
      axios.delete(`http://localhost:3333/users/${e}`).then(()=>getData())
    }

    function getData(){
        axios.get(`http://localhost:3333/users`).then((res)=>{setData(res.data)})
    }
    
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
  return (
    <div className='container'>
        <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e,i)=><tr key={i}>
            <th>{i+1}</th>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.password}</td>
            <td><Link to="/update"><button onClick={()=>setLocalStorage(e.id,e.name,e.email)} className='buttonoperation'>
              <i className="fa-solid fa-pen-to-square"></i> Update</button></Link>&nbsp;
                <button onClick={()=>{if(window.confirm("press ok to delete"))
                HandleDelete(e.id)}} className='buttonoperation'>
                  <i className="fa-solid fa-trash"></i>
 Delete</button></td>
          </tr>)}
          
        </tbody>
      </Table>
    </div>
  )
}

export default Users