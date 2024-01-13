import React from 'react'
import './feed.css'
import { Sharebox } from './share/Sharebox'
import Feedcontent from './feedcontent/Feedcontent'

const feed = () => {
  return (
  <div className='feed'>
    <Sharebox/>
    <Feedcontent/>
  </div>
  )
}

export default feed