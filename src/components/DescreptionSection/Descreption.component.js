import React from 'react';
import Title from '../Title/Title';

const Descreption = ({ title, paragraphe }) => {
   return (
      <div className='descreption container'>
         <div className='descreption_title text--mb--s'>
            <Title headingStyle='bolder--800' headingSize='heading--h1'>
               {title}
            </Title>
         </div>
         <div className='descreption_paragraphe'>
            <Title headingStyle='normal--400' headingSize='heading--h4'>
               {paragraphe}
            </Title>
         </div>
      </div>
   );
};

export default Descreption;
