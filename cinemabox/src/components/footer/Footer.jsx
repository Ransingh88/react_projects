import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

import ContentWrapper from "../contentWrapper/ContentWrapper"

import "./style.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Discover the world of cinema at our movie website. Browse through our
          extensive collection of movies and TV shows, read reviews, and create
          your own watchlist. With a user-friendly interface and regular
          updates, we are the ultimate destination for movie enthusiasts.
          Explore now and join the community of cinema lovers.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
