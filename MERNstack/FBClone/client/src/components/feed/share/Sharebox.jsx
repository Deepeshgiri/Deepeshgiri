import React from 'react'
import './sharebox.css'
import { Collections, EmojiEmotions, PinDrop } from '@mui/icons-material'

export const Sharebox = () => {
  return (
    <div className='sharewrapper'>
        <div className="box">
            <input type="text" className="shareinputtext" placeholder="what's in your mind"></input>
            <div className="shareicons">
                    <PinDrop></PinDrop>
                    <Collections/>
                    <EmojiEmotions/>
                </div>

        </div>
    </div>
  )
}
