import React from 'react'
import './feed.css'
import { Sharebox } from './share/Sharebox'
import Feedcontent from './feedcontent/Feedcontent'
import { Posts } from '../../dummyData'
const feed = () => {
  return (
  <div className='feed'>
    <Sharebox/>
    {Posts.map((p)=><Feedcontent key={p.id} post={p}/>)}
    
  </div>
  )
}

export default feed