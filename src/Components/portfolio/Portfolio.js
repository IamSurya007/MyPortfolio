import React from "react";
import img from '../../assets/chadwick.jpg'
import './Portfolio.css';
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
            <img id="img1" src={img} alt=""/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={img} alt=""/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={img} alt=""/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={img} alt=""/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={img} alt=""/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
        <img id="img1" src={img} alt=""/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className="btn">Github</a>
          <a href="http://github.com" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
