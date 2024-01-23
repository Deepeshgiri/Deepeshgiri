import React from 'react'
import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="./assets/18.jpeg" alt="" className="bdayimage" />
          <span className="bdaytext"> xyz and 32 others have birthday today</span>
        </div>
        <img src="./assets/hire-me.png" alt="" className="rightbarAd" />
        <marquee behavior="" direction="" className="adtext">Ad goes here</marquee>

        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarfriend">
            <div className="rightbarPrfileImgContainer">
              <img src="./assets/34.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
              <span className="rightbarusername">Cap dist</span>
            </div>
            
          </li>
          <li className="rightbarfriend">
            <div className="rightbarPrfileImgContainer">
              <img src="./assets/34.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
              <span className="rightbarusername">Cap dist</span>
            </div>
            
          </li>
          <li className="rightbarfriend">
            <div className="rightbarPrfileImgContainer">
              <img src="./assets/34.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
              <span className="rightbarusername">Cap dist</span>
            </div>
            
          </li>
          <li className="rightbarfriend">
            <div className="rightbarPrfileImgContainer">
              <img src="./assets/34.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
              <span className="rightbarusername">Cap dist</span>
            </div>
            
          </li><li className="rightbarfriend">
            <div className="rightbarPrfileImgContainer">
              <img src="./assets/34.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbaronline"></span>
              <span className="rightbarusername">Cap dist</span>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar