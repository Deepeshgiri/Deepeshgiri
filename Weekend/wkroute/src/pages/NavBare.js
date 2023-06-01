import React from 'react'
import { Link } from 'react-router-dom'

export const NavBare = () => {
  return (
    <>
        <div className='navParent'>
        <div className='navChild'>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/blogs'>blogs</Link>
        <Link to='/contact'>contact</Link>
        <Link  to ='product'>Product</Link>


        
        </div>
        </div>
       
     </>
  )
}
