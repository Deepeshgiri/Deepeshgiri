
import './home.css'
import PersonIcon from '@mui/icons-material/Person';
import Leftsidebar from '../../components/leftsidebar/Leftsidebar';
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightsidebar/Rightbar';
import Topbar from '../../components/topbar/Topbar';

export default function Home  (){
return(
    <>
    <Topbar/>
    <div className="homeContainer">
    <Leftsidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    
    
    </>
)
}

