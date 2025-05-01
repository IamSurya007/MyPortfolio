import React from "react";
import kitchen from '../../assets/kitchen.png'
import learnspace from '../../assets/learnspace.png'
import VConnect from '../../assets/vconnect.jpg'
import shamiCons from '../../assets/shamiConsultancy.jpg'
import biidCOde from '../../assets/visa(16).png'
import sweet_treat from '../../assets/sweet_treat.jpg'
import c2c from '../../assets/c2c.jpg'

import './Portfolio.css';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item ">
          <img id="img1" src={kitchen} alt=""/>
          <h3>Kitchen Cafe and Resto</h3>
          <div className="portfolio_item-cta">
          <a href="https://kitchencandr.ccbp.tech/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      
        <article className="portfolio_item">
        <img id="img1" src={biidCOde} alt=""/>
          <h3>Bird Code Community</h3>
          <div className="portfolio_item-cta">
          <a href="https://drive.google.com/file/d/1uVqULwruU8Zm9RYNJlM_GJ-vMrErDjJF/view?usp=drive_link" target="_blank" className="btn btn-primary">See My Work</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={VConnect} alt=""/>
          <h3>VConnect Globe</h3>
          <div className="portfolio_item-cta">
          <a href="https://drive.google.com/file/d/18KK-Gxz7tTW5D9dWMVh3gG2vPC3t5p4K/view?usp=drive_link" target="_blank" className="btn btn-primary">See My Work</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={shamiCons} alt=""/>
          <h3>Shami Consultancy</h3>
          <div className="portfolio_item-cta">
          <a href="https://drive.google.com/file/d/1TTrbC3fXAJ_8-O6lI7NTUvkVUwr2nRFP/view?usp=drive_link" target="_blank" className="btn btn-primary">See My Work</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={c2c} alt=""/>
          <h3>Code to Career</h3>
          <div className="portfolio_item-cta">
          <a href="https://drive.google.com/file/d/19FBIfak8iEV8YZOCASq3NCSIo6bA33Ht/view?usp=sharing" target="_blank" className="btn btn-primary">See My Work</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={sweet_treat} alt=""/>
          <h3>Sweet Treat</h3>
          <div className="portfolio_item-cta">
          <a href="https://drive.google.com/file/d/1F7BcOS5BYhoe3dKDw_UrP2AYBIlhvb8Y/view?usp=drive_link" target="_blank" className="btn btn-primary">See My Work</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={learnspace} alt=""/>
          <h3>VVIT- LearnSpace</h3>
          <div className="portfolio_item-cta">
          <a href="https://vvit-learnspace.vercel.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
