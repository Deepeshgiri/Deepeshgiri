import React from 'react'
import './leftsidebar.css'
import { Bookmark, Camera, Chat, Group, Person, PlayCircleFilledOutlined, School, Work } from '@mui/icons-material';
import { Button } from '@mui/material';

const Leftsidebar = () => {
  return (
    <div className='leftsidebar'>
        

        <div className="wrapper" >
            <ul>
                <li>
                <Chat/>
                Chat
                </li>
            </ul>
            <ul>
                <li>
                <PlayCircleFilledOutlined/>
                <span>Videos</span>
                </li>
            </ul>
            <ul>
                <li>
                <School/>
                <span>Courses</span>
                </li>
            </ul>
            <ul>
                <li>
                <Work/>
                <span>Jobs</span>
                </li>
            </ul>
            <ul>
                <li>
                <Group/>
                <span>Groups</span>
                </li>
            </ul>
            <ul>
                <li>
                <Bookmark/>
                <span>Bookmark</span>
                </li>
            </ul>
            
            
            
           
           
           

            <Button>Show More</Button>
            
        </div>
        </div>
  )
}

export default Leftsidebar