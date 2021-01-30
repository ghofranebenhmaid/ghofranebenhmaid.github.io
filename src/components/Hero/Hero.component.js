import React from 'react';
import Title from '../Title/Title';
import errow from '../../assets/arrowRight.svg';
import { Link } from 'react-router-dom';
import RotateText from '../RotateText/RotateText.component';

const Hero = () => {
   return (
      <div className='hero container '>
         <div className='hero__title flex--center'>
            <Title headingStyle='bold--700' headingSize='heading--h1'>
               <h1>
                  Website and
                  <br />
                  user interface
                  <br /> designer
                  <Link to='/about'>
                     <div
                        style={{ display: 'inline-block' }}
                        
                     >
                        <img
                           className='hero__arrow'
                           src={errow}
                           alt='hero arrow'
                        />
                     </div>
                  </Link>
               </h1>
            </Title>
         </div>
         <div className='hero__rotate nav-links'>
            {/* <RotateText /> */}
         </div>
      </div>
   );
};

export default Hero;
