import React from 'react';
import Title from '../Title/Title';

const Card = (props) => {
   const { image, title, goto } = props;

   return (
      <div className='card '>
         <a href={`${goto}`}>
            <div className='card__img mb--l'>
               <img src={`${image}`} alt={title} />
            </div>
            <div className='card__text'>
               <div>
                  {!!title && (
                     <Title
                        headingStyle='normal--400'
                        headingSize='heading--h4'
                     >
                        {title}
                     </Title>
                  )}
               </div>
            </div>
         </a>
      </div>
   );
};

export default Card;
