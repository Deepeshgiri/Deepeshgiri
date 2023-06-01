import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function Page1() {
  const [users, setUsers] = useState([]);
  //========== pagination ============
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
//   const rows = users.slice(currentPage*recordPerPage,currentPage+1*recordPerPage)
//   const handlePageChange = (pageNumber)=>{
//     setCurrentPage(pageNumber)

//   }
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const npages = Math.ceil(users.length / recordPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let data = await fetch(`https://jsonplaceholder.org/users`);
    // console.log(data)
    let result = await data.json();
    setUsers(result);
    // console.log(result);
  }


  return (
    <>
      User Data
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
          {records.map((row, i) => (
            <tr key={i}>
              <th>{(i = i + 1)}</th>
              <td>{row.firstname}</td>
              <td>{row.lastname}</td>
              <td>{row.email}</td>
              <td>{row.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>

        {numbers.map((n, i) => (
          <PaginationItem key={i}>
            <PaginationLink href="#" onClick={()=>changePage(n)}>{n}</PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </>
  );
  function changePage(i)
  {
    
  }
}

export default Page1;