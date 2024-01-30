import React from 'react'
import './sharebox.css'
import { Collections, EmojiEmotions, PinDrop } from '@mui/icons-material'


export const Sharebox = () => {
  return (
    <div className='sharewrapper'>
        <div className="box">
            <img src="assets/discbot.jpg" alt="" className="profileimg" ></img>
            
            <textarea name="" id="" cols="70" rows="6" className="shareinputtext"  placeholder="what's in your mind"></textarea>
            <div className="shareicons">
                    <PinDrop className="shareicon"/><span>Location</span>
                    <Collections className="shareicon"/><span>Photo or Video</span>
                    <EmojiEmotions className="shareicon"/><span>Feeling or activity</span>
                    <button className='sharebutton'>Share</button>
                </div>

        </div>
    </div>
  )
}
