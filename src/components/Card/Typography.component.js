import React from 'react';


const Typography = (props) => {
   const { image, title, goto } = props;

   return (
      <div className='typography--content'>
         <a href={`${goto}`}>
            <div className='typography--content__img mb--l'>
               <img src={`${image}`} alt={title} />
            </div>
            
         </a>
      </div>
   );
};

export default Typography;
