import React from "react";
import TwitterIcon from "../images/twitter-icon.svg"
import GithubIcon from "../images/github-icon.svg"
import InstagramIcon from "../images/instagram-icon.svg"
import FacebookIcon from "../images/facebook-icon.svg";

export default function Footer(){
    return(
        <footer className="footer">

            <a href="https://twitter.com/helizabethan"><img src={TwitterIcon} alt="twitter-icon" /></a>
            <a href="https://github.com/Liztowoju"><img src={GithubIcon} alt="github-icon" /></a>
            <a href="https://www.instagram.com/lizzytowoju/"><img src={InstagramIcon} alt="instagram-icon" /></a>
            <a href="https://www.facebook.com/helizabethan"><img src={FacebookIcon} alt="facebook-icon" /></a>
            
        </footer>
    )
}