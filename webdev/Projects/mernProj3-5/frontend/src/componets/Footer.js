
import { Link } from 'react-router-dom'

export function Footer(){
    return(
        <div className='bg-dark text-light p-3' id='footer'> 
        <h4>All rights reserved for &copy; Caption</h4>
        <p>
            <Link to='/about'>About</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/Policy'}>Policy</Link>
            </p>
        </div>
    )
}