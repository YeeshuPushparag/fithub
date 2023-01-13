import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';



const Footer = () => (
  <footer id="footer">
<div className="footer-container">
      <div className="working-hours">
        <h2 className='footer-subhead'>Opening  Hours</h2>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    <div className="find-us">
        <h2 className='footer-subhead'>Our Address</h2>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
        <div className="footer-icons-list">
          <FiFacebook className='footer-icons-list-icon' color="#fff" fontSize={26}/>
          <FiTwitter className='footer-icons-list-icon' color="#fff" fontSize={26}/>
          <FiInstagram className='footer-icons-list-icon' color="#fff" fontSize={26}/>
        </div>
      </div>
</div>
   <p>Copyright &copy; Created by <a href="https://yeeshupushparag.github.io/" className="link creator"  target='_blank' rel="noreferrer" >Yeeshu Pushparag</a></p>
  </footer>
);

export default Footer;