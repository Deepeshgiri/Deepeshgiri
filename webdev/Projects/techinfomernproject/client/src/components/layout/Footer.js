import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    
      <div className=" footer">
        <h4 className="text-center">All right reserved copy right Deepesh</h4>
        <p className="text-center mt3"><Link to='/about'>About</Link> |
        <Link to='/policy'>policy</Link> |
        <Link to='/contact'>contact</Link> 
       </p> 
       
      </div>
   
  );
};
