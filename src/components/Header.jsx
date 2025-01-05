import React from "react";
import "./header.css"
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";





const Header = () => {
  return (
    <div className="header">
      <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.25.0/images/header/primary-logo.svg" alt="Logo" />
      <div className="location">
        <h5>Delivery in 12 Mins</h5>
        <p>Baner, Pune, Maharashtra </p>
      </div>
      <div className="input">
      <IoSearch className="searchIcon" />

        <input className="search" type="text" placeholder="Search or" />
      </div>
      <div className="menu">
        <a className="menuItem" href="">
        <FaRegCircleUser fontSize={24} />

        Login
        </a>
        <a className="menuItem" href="">
        <BsCart2  fontSize={24}/>

        Cart</a>
      </div>
    </div>
  );
};

export default Header;
