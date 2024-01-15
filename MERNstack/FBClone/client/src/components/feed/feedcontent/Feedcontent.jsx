import React from 'react'
import './feedcontent.css'
import { Favorite, MoreVert, ThumbDown, ThumbUp } from '@mui/icons-material'


const Feedcontent = () => {
  return (
    // <div className="photovideo">
    //     <div className="content">
    //         <img src="./assets/14.jpeg" alt="" className='imagevideo' />
    //     </div>

    //     <div className="content">
    //         <img src="./assets/13.jpeg" alt="" className='imagevideo' />
    //     </div>
    //     <div className="content">
    //         <img src="./assets/12.jpeg" alt="" className='imagevideo' />
    //     </div>

    //     <div className="content">
    //         <img src="./assets/16.jpeg" alt="" className='imagevideo' />
    //     </div>
    //     <div className="content">
    //         <img src="./assets/17.jpeg" alt="" className='imagevideo' />
    //     </div>
    //     <div className="content">
    //         <img src="./assets/18.jpeg" alt="" className='imagevideo' />
    //     </div>
    // </div>
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                    <img src="./assets/discbot.jpg" alt="" className="postProfileimg" />
                    <span className="postUserName">Cap Dist</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postRight"></div>
                <MoreVert></MoreVert>
            </div>
            <div className="postCenter"></div>
            <span className="postText">Hey its mmy first post</span>
            <img src="./assets/bloomd.jpg" alt="" className="postImg" />
            <div className="postBottom">  </div>
            <div className="postBottomLeft">
                <Favorite/>
                <ThumbDown/>
                <ThumbUp/>
                <span className="postLikeCounter">5 people reacted</span>
            </div>

            <div className="postBottomRight">
                <span className="postCommentText">comments go here</span>
            </div>
        </div>
    </div>
  )
}

export default Feedcontent