import React from 'react'
import './feedcontent.css'
import { Favorite, MoreVert, ThumbDown, ThumbUp } from '@mui/icons-material'
import { Users } from '../../../dummyData'


const Feedcontent = ({post}) => {
    const styleicon ={
        color: 'blue',
        fontSize: '16px',
        
        padding: '10px',
        borderRadius: '5px',
    }
   const user = Users.filter



  return (
   
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                    <img src={Users.filter((u)=>u.id === post?.userId)[0].profilePicture} alt="" className="postProfileimg" />
                    <span className="postUserName">{Users.filter((u)=>u.id === post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postRight"></div>
                <MoreVert></MoreVert>
            </div>
            <div className="postCenter"></div>
            <span className="postText">{post?.desc}</span>
            <img src={post.photo}  alt="" className="postImg" />
            <div className="postBottom">  
            <div className="postBottomLeft">
                <Favorite id="heart"/>
                <ThumbDown id="thumbdown"/>
                <ThumbUp id="thumbup"/>
                <span className="postLikeCounter" style={styleicon }>{post?.like} people reacted</span>
            </div>

            <div className="postBottomRight"></div>
         
                <span className="postCommentText">{post ?.comment} comments</span>
            </div>
        </div>
    </div>
  )
}

export default Feedcontent