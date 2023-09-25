import React from "react";
import logo from '../img/logo.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="w-32 h-32 mx-auto mb-4" id="logo" src={logo} alt="NightCrawl Logo"/>
    </div>
  );
};

export default Logo;
