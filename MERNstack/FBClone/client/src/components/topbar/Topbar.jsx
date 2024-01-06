import './topbar.css'
import { Person } from '@mui/icons-material'
export default function(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className='logo'>Fearbook</span>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <imput className="searchInput" placeholder="search for people, post or video"></imput>

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
                        <span className="topbarIconBadge"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}