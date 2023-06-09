import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div>
        <video loop autoPlay muted id="bg-video">
          <source src={require("../../videos/Ropes.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="about-us-content">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-text">
          Welcome to our fitness community! We are a group of passionate fitness
          enthusiasts dedicated to creating a safe and supportive environment for
          sharing and discovering fitness tips and tricks. Our goal is to provide
          a platform where you can find valuable information and inspiration to
          help you on your fitness journey.
        </p>
        <p className="about-us-text">
          Our app is not just about exercises; it's a holistic approach to
          fitness. You'll find a wealth of knowledge on various topics, including
          workout routines, meal preps, diet hacks, and more. We believe that
          fitness is not just about physical strength but also about nourishing
          your body and mind.
        </p>
        <p className="about-us-text">
          We encourage our members to share their own fitness experiences,
          successes, and challenges. Together, we can motivate and support one
          another, fostering a positive and inclusive community. Join us and
          embark on a journey towards a healthier and happier lifestyle.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;