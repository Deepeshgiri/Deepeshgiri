import './topbar.css'
import { Chat, Notifications, Person, Search } from '@mui/icons-material'
export default function(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className='logo'>Fearbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search/><input className="searchInput" placeholder="search for people, post or video">
                    
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
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="" alt="image" className="topbarImage" />
            </div>
        </div>
    )
}