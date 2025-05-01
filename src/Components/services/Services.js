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
    <h3>Graphic Designing</h3>
  </div>

  <ul className="service_list">
    <li>
      <BiCheck className="service_list-icon" />
      <p>
        Designed branding assets, social media creatives, and marketing visuals tailored to various platforms.
      </p>
    </li>
    <li>
      <BiCheck className="service_list-icon" />
      <p>
        Created original graphics, illustrations, and multimedia content to enhance project presentation.
      </p>
    </li>
    <li>
      <BiCheck className="service_list-icon" />
      <p>
        Improved visual identity and user engagement by applying design principles effectively.
      </p>
    </li>
    <li>
      <BiCheck className="service_list-icon" />
      <p>
        Showcased high-quality design work including logos, posters, UI mockups, and marketing materials in my portfolio.
      </p>
    </li>
  </ul>
</article>

        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
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
                Utilizing HTML, CSS, JavaScript.
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
        
      </div>
    </section>
  );
};

export default Services;
