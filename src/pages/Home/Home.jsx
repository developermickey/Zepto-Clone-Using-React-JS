import React from "react";
import HeroImg from "../../assets/paan-corner-desktop.webp";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
  return (
    <div className="main">
      <div className="page1">
        <div className="hero-img">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
      <div className="page2">
        <div className="top">
          <h3>Grocery & Kitchen</h3>
          <a className="seeAll" href="">See All <IoIosArrowForward fontSize={20} />
</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
