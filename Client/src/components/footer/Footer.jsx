/*import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Footer = () => {
    return (
        <div className="footer"> 
        <div className="container">
            <div className="top">
                <div className="item">
                    <h2>Categories</h2>
                    <span> Graphics & Design</span>
<span >Digital Marketing</span>
<span >Writing & Translation</span>
<span >Video & Animation</span>
<span >Music & Audio</span>
<span >Programming & Tech</span>
<span >AI Services</span>
<span >Consulting</span>
<span >Data</span>
<span >Business</span>
<span >Personal Growth & Hobbies</span>
<span >Photography</span>
<span >Finance</span>
<span >End-to-End Projects</span>
<span >Service Catalog</span>
<span>Sitemap</span>


                </div>
                <div className="item">
                    <h2>Categories</h2>
                    <span> Graphics & Design</span>
<span >Digital Marketing</span>
<span >Writing & Translation</span>
<span >Video & Animation</span>
<span >Music & Audio</span>
<span >Programming & Tech</span>
<span >AI Services</span>
<span >Consulting</span>
<span >Data</span>
<span >Business</span>
<span >Personal Growth & Hobbies</span>
<span >Photography</span>
<span >Finance</span>
<span >End-to-End Projects</span>
<span >Service Catalog</span>
<span>Sitemap</span>


                </div>
                <div className="item">
                    <h2>Categories</h2>
                    <span> Graphics & Design</span>
<span >Digital Marketing</span>
<span >Writing & Translation</span>
<span >Video & Animation</span>
<span >Music & Audio</span>
<span >Programming & Tech</span>
<span >AI Services</span>
<span >Consulting</span>
<span >Data</span>
<span >Business</span>
<span >Personal Growth & Hobbies</span>
<span >Photography</span>
<span >Finance</span>
<span >End-to-End Projects</span>
<span >Service Catalog</span>
<span>Sitemap</span>


                </div>
                <div className="item">
                    <h2>Categories</h2>
                    <span> Graphics & Design</span>
<span >Digital Marketing</span>
<span >Writing & Translation</span>
<span >Video & Animation</span>
<span >Music & Audio</span>
<span >Programming & Tech</span>
<span >AI Services</span>
<span >Consulting</span>
<span >Data</span>
<span >Business</span>
<span >Personal Growth & Hobbies</span>
<span >Photography</span>
<span >Finance</span>
<span >End-to-End Projects</span>
<span >Service Catalog</span>
<span>Sitemap</span>


                </div>
                <div className="item">
                    <h2>Categories</h2>
                    <span> Graphics & Design</span>
<span >Digital Marketing</span>
<span >Writing & Translation</span>
<span >Video & Animation</span>
<span >Music & Audio</span>
<span >Programming & Tech</span>
<span >AI Services</span>
<span >Consulting</span>
<span >Data</span>
<span >Business</span>
<span >Personal Growth & Hobbies</span>
<span >Photography</span>
<span >Finance</span>
<span >End-to-End Projects</span>
<span >Service Catalog</span>
<span>Sitemap</span>


                </div>
            </div>
            <hr/>
            <div className="botom">
                <div className="left">
                    <h2>Skill-Trade.</h2>
                    <span>&copy;Skill-Trade , International , 2024</span>
                </div>
                <div className="right">
                    <div className="social">
                        <img src="../img/linkedin.png" alt="" />
                        <img src="../img/twitter.png" alt="" />
                        <img src="../img/youtube.png" alt="" />
                        <img src="../img/medium.png" alt="" />
                        <img src="../img/tik-tok.png" alt="" />
                        <img src="../img/instagram.png" alt="" />

                    </div>
                    <div className="link">
                        <img src="../img/globe.png" alt="" />
                         <span>English</span>

                    </div>
                    <div className="link">
                        <img src="../img/coin.png" alt="" />
                         <span>CAD</span>
                          </div>
                        <img src="../img/accessibility.png" alt="" />
                </div>
            </div>
            </div> 
            </div>
    )
}

export default Footer ; */

import React from 'react';
import "./Footer.scss";

const categories = [
  "Web Development", "Front-end", "Back-end", 
  "Full-Stack", "Content-Writing", "UX/UI Design", 
  "Logo Design", "AI Services"
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          {/* Dynamically render category columns */}
          {[...Array(1)].map((_, index) => (
            <div className="item" key={index}>
              <h2>Categories</h2>
              {categories.map((category, i) => (
                <span key={i}>{category}</span>
              ))}
            </div>
          ))}
        </div>
        <hr />
        <div className="bottom"> {/* Fixed the class name from "bootom" to "bottom" */}
          <div className="left">
            <h2>Skill-Trade.</h2>
            <span>&copy; Skill-Trade, International, 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="../img/linkedin.png" alt="LinkedIn" />
              <img src="../img/twitter.png" alt="Twitter" />
              <img src="../img/youtube.png" alt="YouTube" />
              <img src="../img/medium.png" alt="Medium" />
              <img src="../img/tik-tok.png" alt="TikTok" />
              <img src="../img/instagram.png" alt="Instagram" />
            </div>
            <div className="link">
              <img src="../img/globe.png" alt="Language" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="../img/coin.png" alt="Currency" />
              <span>CAD</span>
            </div>
            <img src="../img/accessibility.png" alt="Accessibility" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
