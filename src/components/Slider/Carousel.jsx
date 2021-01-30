import React, { useState } from 'react';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Button from '../Button/Button';

const Carousel = () => {
   const [slides] = useState([
      {
         source: 'https://picsum.photos/1300',
         title: 'Half Moon Pier',
      },
      {
         source: 'https://picsum.photos/1350',
         title: 'Port Washington Rocks',
      },
      {
         source: 'https://picsum.photos/1400',
         title: 'Abandoned Rail',
      },
   ]);

   // SET CAROUSEL DEFAULTS
   let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
   let currentSlide = slides[currentPosition]; // variable index value we can reference later



   const arrowRigthClick = () => {
      currentPosition !== slides.length - 1 // Check index length
         ? setCurrentPosition(currentPosition + 1)
         : setCurrentPosition((currentPosition = 0));
      currentSlide = slides[currentPosition];
   };

   const arrowLeftClick = () => {
      currentPosition !== 0 // Check index length
         ? setCurrentPosition(currentPosition - 1)
         : setCurrentPosition((currentPosition = slides.length - 1));
      currentSlide = slides[currentPosition];
   };
   const handleSetClick = (event) => {
      setCurrentPosition(slides[event.target.getAttribute('data-slides')]);
   };

  

   return (
      <div className='carousel-block '>
         <div className='flex-container'>
            <div id='slider-list'>
               <div className='slide'>
                  <img
                     src={currentSlide.source}
                     alt={currentSlide.title}
                     title={currentSlide.title}
                     className='slider-img'
                  />
                  <div className='arrows'>
                     
                <Button buttonStyle='btn--cercle' onClick={arrowLeftClick}><AiOutlineLeft /></Button>
                <Button buttonStyle='btn--cercle' onClick={arrowRigthClick}> <AiOutlineRight /></Button>
                     

                  </div>
                  <div className='flex'>
                     {Object.keys(slides).map((index, i) => (
                        <span
                           onClick={(event) => handleSetClick(event)}
                           data-slides={index}
                           key={index}
                           className={
                              currentPosition === i
                                 ? 'activeSlide flex active'
                                 : 'activeSlide'
                           }
                        >
                           {'0'.concat(Number(index) + 1)}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Carousel;
