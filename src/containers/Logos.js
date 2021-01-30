import React, { useEffect, useState } from 'react';

import Logo from '../components/Card/Logo.component';

import logo1 from '../assets/images/logos/logo1-100.jpg';
import logo2 from '../assets/images/logos/logo2-100.jpg';
import logo3 from '../assets/images/logos/logo3-100.jpg';
import logo4 from '../assets/images/logos/logo4-100.jpg';
import logo5 from '../assets/images/logos/logo5-100.jpg';
import logo6 from '../assets/images/logos/logo6-100.png';
import logo7 from '../assets/images/logos/logo7-100.jpg';
import logo8 from '../assets/images/logos/logo8-100.svg';
import logo9 from '../assets/images/logos/logo9-100.svg';
import Title from '../components/Title/Title';
import Descreption from '../components/DescreptionSection/Descreption.component';

const Logos = () => {
   return (
       <div className='container flex--wrap'>
         
         <div className='container'>

         <Descreption  title='Logos I create..' paragraphe='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
         </div>
         
      <div className='container'>
      <div className='flex--wrap'>
         
            <Logo image={logo1} title='logo1' goto='#' />
            <Logo image={logo2} title='logo2' goto='#' />
            <Logo image={logo3} title='logo3' goto='#' />
            <Logo image={logo4} title='logo4' goto='#' />
            <Logo image={logo5} title='logo5' goto='#' />
            <Logo image={logo6} title='logo6' goto='#' />
            <Logo image={logo7} title='logo7' goto='#' />
            <Logo image={logo8} title='logo7' goto='#' />
            <Logo image={logo9} title='logo9' goto='#' />
         </div>
      </div>
      </div>
      
   );
};

export default Logos;
