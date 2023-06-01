import React, { useContext } from 'react'
import { dname } from '../App'


function C() {
  const data1 = useContext(dname)
  return (
    <div>I AM {data1}</div>
  )
}

export default C