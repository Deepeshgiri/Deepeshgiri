import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div> All Users page 
        <div>
            <Link to ='user/1'>user1</Link>
            <Link to ='user/2'>user2</Link>
            <Link to ='user/3'>user3</Link>
            <Link to ='user/4'>user4</Link>
            <Outlet/>
        </div>
    </div>

  )
}

export default Users