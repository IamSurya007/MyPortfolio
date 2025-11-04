import React from "react";
import "./About.css";
import { CgAwards } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { GiFilmProjector } from "react-icons/gi";
import vizagTour2 from "../../assets/vizagTour2.jpg";
// import chadwick from '../../assets/chadwick.jpg';
import portfolio from '../../assets/portfolio.jpg'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img id="image" src={portfolio} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <CgAwards className="about_icon" />
              <h5>Experience</h5>
              <small>Two Years Experience</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>No Clients</small>
            </article>
            <article href="#portfolio" className="about_card">
              <GiFilmProjector className="about_icon" />
              <h5>Project</h5>
              <small>Six Projects</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
