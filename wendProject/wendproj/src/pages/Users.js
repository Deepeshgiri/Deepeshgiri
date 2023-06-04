import React, { useEffect, useState } from 'react'
import{Table} from 'reactstrap'
import axios from 'axios'

function Users() {
    const [data, setData]=useState([])
   

    function getData(){
        axios.get(`http://localhost:3333/users`).then((res)=>{setData(res.data)})
    }
    
    useEffect(()=>{
        getData()
    },[])
    console.log(data)
  return (
    <div>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Users