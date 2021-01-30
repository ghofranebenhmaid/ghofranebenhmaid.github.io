import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';

const Slider = ({ slides }) => {
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      // setCurrent((current ) % slides.length)
      setTimeout(
         () => setCurrent(current === slides.length - 1 ? 0 : current + 1),
         5000
      );
      // setCurrent(current === slides.length  ? 0 : current )
      return function () {
         clearTimeout(current % slides.length);
      };
   }, [current]);

   const handleSetClick = (event) => {
      const e = event.target.getAttribute('data-slides');
      // setCurrent(current  === e ? slides[e] : 'error' );
      if (e) setCurrent(slides[e]);

      console.log('hallo', e);
   };

   //  if (!Array.isArray(slides) || slides.length <= 0) return null;

   return (
      <section className='slider '>
         {slides.map((s, i) => (
            <div
               // if active slide, include the "active" class
               className={i === current ? 'slide slide-right  active' : 'slide'}
               key={s.title}
               // if not active, hide from screen readers for accessibility
               //  aria-hidden={i !== current}
            >
               <div className='slide-top'>
                  <div className='text--mb--s'>
                     <Title
                        headingStyle='bolder--800'
                        headingSize='heading--h2'
                     >
                        {s.title}
                     </Title>
                  </div>
                  <div className='text--mb--s'>
                     <Title
                        headingStyle='normal--400'
                        headingSize='heading--small'
                     >
                        {s.subtitle}
                     </Title>
                  </div>

                  <div className='flex'>
                     {Object.keys(slides).map((index, i) => (
                        <span
                           className={
                              i === current
                                 ? 'activeSlide active'
                                 : 'activeSlide'
                           }
                           //  onClick={(event) => handleSetClick(event)}
                           onClick={handleSetClick}
                           data-slides={index}
                           key={index}
                        >
                           {'0'.concat(Number(index) + 1)}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
};

export default Slider;
