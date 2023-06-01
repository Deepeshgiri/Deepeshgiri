import react from 'react'
import { Link, Outlet } from 'react-router-dom'

export function Contact (){
    return(
        <div>
         


            <div>
                <Link to='alluser'>All users</Link>
                <Outlet/>
            </div>
        </div>
    )
}