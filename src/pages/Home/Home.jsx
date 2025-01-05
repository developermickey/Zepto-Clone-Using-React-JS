import React from "react";
import HeroImg from "../../assets/paan-corner-desktop.webp";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";



const Home = () => {
  const productData = [
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
    {image: "https://cdn.zeptonow.com/production///tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/4b28a9a2-8714-455c-ad17-fa765bbc3576.png"},
  ]
  
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
          <a className="seeAll" href="">See All <IoIosArrowForward fontSize={20} /></a>
        </div>
        <div className="bottom">
          {productData.map((item, index) => (
            <div key={index} className="items">
              <img src={item.image} alt="Images" />
            </div>
          ))}
       </div>
      </div>
      <div className="page2">
        <div className="top">
          <h3>Snacks & Drinks</h3>
          <a className="seeAll" href="">See All <IoIosArrowForward fontSize={20} /></a>
        </div>
        <div className="bottom">
          {productData.map((item, index) => (
            <div key={index} className="items">
              <img src={item.image} alt="Images" />
            </div>
          ))}
       </div>
      </div>
      <div className="page2">
        <div className="top">
          <h3>Beauty & Personal Care</h3>
          <a className="seeAll" href="">See All <IoIosArrowForward fontSize={20} /></a>
        </div>
        <div className="bottom">
          {productData.map((item, index) => (
            <div key={index} className="items">
              <img src={item.image} alt="Images" />
            </div>
          ))}
       </div>
      </div>
    </div>
  );
};

export default Home;
