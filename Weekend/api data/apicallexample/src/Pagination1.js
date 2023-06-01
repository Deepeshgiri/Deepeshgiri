import React, { useEffect, useState } from 'react'
import {Table} from 'reactstrap'

function Pagination1() {
 
  const recordPerPage =5
  

    let url ="https://jsonplaceholder.org/users"
    const [user , setUser]=useState([])

    async function getdata(){
        let data= await fetch(url)
        console.log (data)
        let result =  await data.json()
        setUser(result)
    }
    useEffect(()=>{ 
        getdata()
      },[])

   
  return (
    <>
    <h3>User data list</h3>
    <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
            {user.map((list )=>
          <tr key={recordPerPage}>
            <th scope="row">{list.id}</th>
            <td>{list.firstname}</td>
            <td>{list.lastname}</td>
            <td>{list.email}</td>
          </tr>
          )}
         
        </tbody>
      </Table>
    </>
   

  )
}

export default Pagination1