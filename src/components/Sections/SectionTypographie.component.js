import React, { useRef } from 'react';

import { handleServesReturn, handleServes } from './Animation';

// import Title from '../Title/Title';
// import photography from '../../assets/images/photography.jpg';
import typographie from '../../assets/images/typographie.jpg';
import { Link } from 'react-router-dom';
// import coding from '../../assets/images/coding.jpg';

const serves = [
   // {
   //    name: 'Photography',
   //    image: photography,
   // },
    {
       name: 'Typographie',
       image: typographie,
    },
   //  {
   //     name: 'Coding',
   //     image: coding,
   //  },
];

const Section = () => {
   let servesBackground = useRef(null);

   return (
      <div className='service container'>
         <div
            className='service_background'
            ref={(el) => {
               servesBackground = el;
            }}
         ></div>

         <Link to='/typography'>
            
             
         
            <div className='service_title' >
               {serves.map((el) => (
                  <span
                     key={el.name}
                     onMouseEnter={() =>
                        handleServes(el.image, servesBackground)
                     }
                     onMouseOut={() => handleServesReturn(servesBackground)}
                  >
                     {el.name}
                  </span>
               ))}
            </div>
           </Link>
      </div>
   );
};

export default Section;
