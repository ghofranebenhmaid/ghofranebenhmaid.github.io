import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';


function Footer() {
   return (
      <div>
         <div className='footer footer-cursor'>
            <div className='box box--container'>
               <div className='box__author wrapper'>
                  <span className='box__logo'>GHOFRANE.</span>
                  <span className='box__fullname'>&copy; 2020 Ghofrane Ben Hmaid</span>
               </div>
               <div className='box__contact wrapper'>
                  <span  className='box__email'>ghofranebh@gmail.com</span>
                  <span className='box__phone'>+45 60 68 92 69</span>
               </div>
               <div className='box__adress wrapper'>
                  <span className='box__country'>Danmark Copenhagen</span>
                  <span className='box__city'>Ballerup</span>
               </div>
               <div className='box__socialmedia wrapper'>
                  <span>You can follow me on</span>
                  <span>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.linkedin.com/in/ghofranebenhmaid/'
                           className='social-icon'
                        >

                           <FaLinkedin />
                        </a>
                        <a
                           target='blank'
                           rel='noopener noreferrer'
                           href='https://github.com/ghofranebenhmaid'
                           className='social-icon'
                        >
                           <FaGithub />
                        </a>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.instagram.com/ghofranbenhmaid/'
                           className='social-icon'
                        >
                           <FaInstagram />
                        </a>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.behance.net/Ghofranebh'
                           className='social-icon'
                        >
                           <FaBehance />
                        </a>

                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Footer;
