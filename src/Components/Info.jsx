import React from "react";
import Headshot from "../images/elizabeth-headshot.jpeg";
import MailIcon from "../images/email-icon.svg";
import LinkedinIcon from "../images/linkedin-icon.svg";

export default function Info() {
  return (
    <header className="profile-area">
      <img src={Headshot} alt="headshot-photo" />
      <h1 className="name">Elizabeth Towoju</h1>
      <h4 className="job-role">Frontend Developer</h4>
      <a href="pluginette.com" className="web-address" target="_blank">liztowoju.com</a>
      <div className="profile-area-contact">
        <a href="mailto:liztowoju@gmail.com" className="email-contact">
          <img src={MailIcon} alt="email-icon" /> <span>Email</span>{" "}
        </a>
        <a href="https://www.linkedin.com/in/h-elizabeth/" className="linkedin-contact" target="_blank"> 
          <img src={LinkedinIcon} alt="linkedin-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </header>
  );
}
