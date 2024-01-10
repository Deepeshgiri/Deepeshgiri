import React from "react";
import "./leftsidebar.css";
import {
  Bookmark,
  Camera,
  Chat,
  Group,
  Person,
  PlayCircleFilledOutlined,
  School,
  Work,
} from "@mui/icons-material";
import { Button } from "@mui/material";

const Leftsidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="wrapper">
        <ul>
          <li>
            <Chat />
            <span>Chat</span>
          </li>
        </ul>
        <ul>
          <li>
            <PlayCircleFilledOutlined />
            <span>Videos</span>
          </li>
        </ul>
        <ul>
          <li>
            <School />
            <span>Courses</span>
          </li>
        </ul>
        <ul>
          <li>
            <Work />
            <span>Jobs</span>
          </li>
        </ul>
        <ul>
          <li>
            <Group />
            <span>Groups</span>
          </li>
        </ul>
        <ul>
          <li>
            <Bookmark />
            <span>Bookmark</span>
          </li>
        </ul>
            <ul>
                <li>
                <Button>Show More</Button>
                </li>
            </ul>
        
        <ul className="bottomlist">
        <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          <li className="btmlistitem">
            <img src="assets/bloomd.jpg" alt="img" className="imageleftbar" />
            <span className="personname">name of person</span>
          </li>
          
        </ul>
      
      </div>
      
    </div>
  );
};

export default Leftsidebar;
