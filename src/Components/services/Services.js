import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UX/UI Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Focuses on creating intuitive, visually appealing interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Aims to optimize user interactions for digital products.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Involves understanding user needs and conducting research.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Includes wireframing, prototyping, and testing for seamless
                experiences.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Designs user-friendly interfaces for websites and applications.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Building and maintaining websites or web applications to
                showcase my skills. .
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Utilizing HTML, CSS, JavaScript, and frameworks like React or
                Angular.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Demonstrating proficiency in creating functional, responsive,
                and scalable websites.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Tailoring websites to client requirements and highlighting them
                in my portfolio
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Crafting compelling content for various platforms to exhibit my
                writing skills. .
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Creating graphics, videos, and multimedia assets for portfolio
                enhancement.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Increasing brand visibility and audience engagement through
                content creation.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Showcasing professionally written articles, visually appealing
                graphics, and captivating videos in my portfolio
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
