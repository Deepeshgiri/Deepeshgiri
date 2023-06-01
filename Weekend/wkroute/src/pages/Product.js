import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>Product page
        <Link to='jeans'>Jeans</Link>
        <Link to ='shirts'>Shirt</Link>
        <Outlet/>
    </div>
  )
}

export default Product