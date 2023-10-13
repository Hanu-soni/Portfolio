import React, { useEffect, useState } from 'react';
import AboutImage from '../../assets/profileimg.jpeg';
import CV from '../../assets/Resume-1.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';
import AOS from "aos";
import Typewriter from 'typewriter-effect';
const About = () => {
  

  useEffect(() => {
    
    AOS.init({ duration: 2000 });
  });

  const Typewrittereffect = () => {
    // Return the Typewriter component here
    return (
      <Typewriter
        options={{
          strings: ["WHO AM I ?", "Full Stack Developer", "Problem Solver","Almabetter Trainee"],
          autoStart: true,
          loop: true,
        }}
      />
    );
  };

  return (
    <section id="about" data-aos="fade-up">
    <div className="container about__container">
   
        <div className="about__left">
        <img src={AboutImage} alt="AboutImage" className="img-fluid" />
        </div>
    
      
      <div className="about__right">
      <h2
          style={{ fontFamily: "sans-serif", color: "#007786",fontWeight:"bold" }}
          data-aos="fade-up"
        >
          {/* Rahul Keshri */}
          {Typewrittereffect()}
        </h2>

      
        <div style={{fontWeight:'bold'}} className="about__cards">
          {data.map((item) => (
            <Card key={item.id} className="about__card">
              <span className="about__card-icon">{item.icon}</span>
              <h5 style={{fontWeight:'bold'}}>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <p style={{color:'black'}}>
        Passionate and driven MERN Stack Developer with a solid background in web development,
         dedicated to crafting efficient, scalable, and visually captivating applications. 
         Experienced in constructing dynamic and responsive web solutions using MongoDB, 
         Express.js, React, and Node.js. Excited to apply my technical expertise and 
         imagination to support groundbreaking projects and engage in teamwork across
          various domains.
        </p>
        <p style={{color:'black'}}>
        Greetings, I'm PANKAJ SONI, based in India. I hold a<span className='text-danger fw-bold'> Bachelor's degree in 
        CS & IT</span> and specialize as a full-stack web developer.
         My expertise lies in developing and launching responsive, user-centric websites
          for small enterprises using the <b>MERN stack</b>, ultimately enhancing their online 
          presence and customer interactions. I've successfully implemented robust data
           storage and retrieval systems using <b>MongoDB</b>, ensuring efficient data management
            and scalability. My approach involves close <b>collaboration with clients</b>,
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
