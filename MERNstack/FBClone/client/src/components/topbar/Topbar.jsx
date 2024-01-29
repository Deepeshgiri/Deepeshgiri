import { useState } from 'react'
import './topbar.css'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'

// import { } from '../../../public/assets/bloom.jpg'
// client\public\assets\bloom.jpg

export default function(){
    const[search,setsearch] = useState('')

    const handlesearch=(e)=>{
        e.preventdefault()
        console.log(e)
    }
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className='logo'>Fearbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className='searchIcon'/><input className="searchInput" placeholder="search for people, post or video">
                    
                    </input>    

                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person className='icon'/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications className='icon'/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat className='icon'/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="assets/bloom.jpg" alt="image" className="topbarImage" />
            </div>
        </div>
    )
}