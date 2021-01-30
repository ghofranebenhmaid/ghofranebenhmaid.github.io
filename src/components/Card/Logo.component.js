import React from 'react';


const Logo = (props) => {
   const { image, title, goto } = props;

   return (
      <div className='logo--content'>
         <a href={`${goto}`}>
            <div className='logo--content__img mb--l'>
               {/* <div className='slide slide-bottom'> */}
                  <div className='slide_content'>
                     <h2 className='slide slide-bottom'>
                         {title} 
                     </h2>
                
               </div>
               <img src={`${image}`} alt={title} />
               {/* </div> */}
            </div>
            
         </a>
      </div>
   );
};

export default Logo;
