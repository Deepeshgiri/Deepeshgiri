import React, { useState } from 'react'
import movie from './movie.json'
import { Table } from 'reactstrap';

function Moviepage() {
   
const [not,setnot] = useState([])
    
    // let medium,original
    
  
   
  
  
//   function movies(e){
//     console.log(e)
//     if (e.show.image!=null){
//         if(e.show.image==="medium"){
//             return (e.show.image.medium)
//         }
//     }else{
//         return null
//     }

//   }

  
    return (
      <>
        Movie Data
        <Table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {movie.map((row, i) => (
              <tr key={i}>
                <th>{(i = i + 1)}</th>
                <td>{row.score}</td>
                <td>{row.show.id}</td>
               
                <td>{row.show.name}</td>
               
                    {/* <td>{movies(row)}</td> */}

                    {/* 654 && 767
                    666 ? uuuu :687686 */}
                   
                     <td>{row.show.image.medium}</td> 
                
                
                
                
                
              </tr>
            ))}
          </tbody>
        </Table>
        
      </>
    );
    
    
  }

export default Moviepage