import React from "react";
import fitsync from '../../assets/fitsync.png'
import learnspace from '../../assets/learnspace.png'
import echowave from '../../assets/echowave.png'
import eventreply from '../../assets/Event Reply.png'
import frensy from '../../assets/Frensy.png'
import dating from '../../assets/Dating App.png'
import './Portfolio.css';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
        <img id="img1" src={echowave} alt=""/>
          <h3>Echowave</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/IamSurya007/EchoWave" target="_blank" className="btn">Github</a>
          <a href="https://echowave-8by4.onrender.com/" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
          <article className="portfolio_item">
              <img id="img1" src={eventreply} alt=""/>
              <h3>EventReply</h3>
              <div className="portfolio_item-cta">
                  <a href="https://eventreply.com/" target="_blank" className="btn btn-primary">Live Demo</a>
              </div>
          </article>
          <article className="portfolio_item">
              <img id="img1" src={frensy} alt=""/>
              <h3>Home Services App</h3>
              <div className="portfolio_item-cta">
                  <a href="https://m.dev.frensy.com/" target="_blank" className="btn btn-primary">Live Demo</a>
              </div>
          </article>
          <article className="portfolio_item">
              <img id="img1" src={dating} alt=""/>
              <h3>Home Services App</h3>
              <div className="portfolio_item-cta">
                  <a href="https://dqatg6n6q3gse.cloudfront.net/" target="_blank" className="btn btn-primary">Live Demo</a>
              </div>
          </article>
        <article className="portfolio_item">
        <img id="img1" src={learnspace} alt=""/>
          <h3>VVIT- LearnSpace</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/TechXcel/VVIT-LearnSpace" target="_blank" className="btn">Github</a>
          <a href="https://vvit-learnspace.vercel.app/" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
            <img id="img1" src={fitsync} alt=""/>
          <h3>Fit Sync</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/IamSurya007/fitsync" target="_blank" className="btn">Github</a>
          <a href="https://fitsync-nine.vercel.app/" target="_blank" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
