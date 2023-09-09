import React, { useEffect, useState } from 'react';
import AboutImage from '../../assets/profileimg.jpeg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';
import AOS from "aos";

const About = () => {
  

  // Add an effect to trigger the fade-out animation after the component mounts
  useEffect(() => {
    // we have use the style in this because once our page loads or mount then our useeffect will run
    AOS.init({ duration: 2000 });
  });

  return (
    <section id="about" data-aos="fade-in">
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="AboutImage" />
        </div>
      </div>
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <p>
        Passionate and driven MERN Stack Developer with a solid background in web development,
         dedicated to crafting efficient, scalable, and visually captivating applications. 
         Experienced in constructing dynamic and responsive web solutions using MongoDB, 
         Express.js, React, and Node.js. Excited to apply my technical expertise and 
         imagination to support groundbreaking projects and engage in teamwork across
          various domains.
        </p>
        <p>
        Greetings, I'm PANKAJ SONI, based in India. I hold a Bachelor's degree in 
        INFORMATION TECHNOLOGY and specialize as a full-stack web developer.
         My expertise lies in developing and launching responsive, user-centric websites
          for small enterprises using the MERN stack, ultimately enhancing their online 
          presence and customer interactions. I've successfully implemented robust data
           storage and retrieval systems using MongoDB, ensuring efficient data management
            and scalability. My approach involves close collaboration with clients,
             gathering their unique requirements, providing regular project updates
        , and delivering custom-tailored solutions that align with their distinct needs.
        </p>
        <a href={CV} download className="btn primary">
          Download CV <HiDownload />
        </a>
      </div>
    </div>
  </section>
  );
};

export default About;
