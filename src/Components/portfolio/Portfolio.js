import React from "react";
import fitsync from '../../assets/fitsync.jpg'
import learnspace from '../../assets/learnspace.png'
import twitter from '../../assets/twitter.jpg'
import './Portfolio.css';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
            <img id="img1" src={fitsync} alt=""/>
          <h3>Fit Sync</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/IamSurya007/fitsync" className="btn">Github</a>
          <a href="https://fitsync-nine.vercel.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={learnspace} alt=""/>
          <h3>VVIT- LearnSpace</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/TechXcel/VVIT-LearnSpace" className="btn">Github</a>
          <a href="https://vvit-learnspace.vercel.app/" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={twitter} alt=""/>
          <h3>Echowave</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/IamSurya007/EchoWave" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
