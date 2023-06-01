import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export function UseEffectApi() {

  // const [user,setuser] =useState(1)
  const [details, setDetails] = useState([])
  const [user, setuser] = useState(2)




  async function getData() {
    // console.log(user)
    let response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`)
    // console.log(user)
    console.log(response)
    var data = await response.json()
    console.log(data.length)
    console.log(data)
    setDetails(data)
  }
  useEffect(() => {
    getData()

  }, [user])



  return (

    <div>

      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          
            {details.map((item, i) => <tr key={i}>
              <td>{i=item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              </tr>) }
             
          
        </tbody>


      </Table>
      <button onClick={()=>{setuser(user+1)}}>next data</button>
    </div>
  )
}