import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="bg-chinese_black text-white px-10 py-4 pt-10 flex justify-between">
      <div className="flex-1 flex flex-col justify-between text-sm ml-20">
        <h1 className="text-3xl font-Ubuntu text-mustard font-semibold">
          Pencil
        </h1>
        <div>
          <p>Follow Us</p>
          <ul className='flex gap-2 py-1 text-mustard'>
            <li>
              <IoLogoFacebook />
            </li>
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <IoLogoTwitter />
            </li>
            <li>
              <IoLogoLinkedin />
            </li>
            <li>
              <IoLogoYoutube />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 flex-1 justify-evenly text-sm font-light footer-links">
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Investors</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms</li>
        </ul>
        <ul>
          <li>Tech on Pencil</li>
          <li>Help and Support</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer