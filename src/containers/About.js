import React from 'react';
import Title from '../components/Title/Title';
import photoprofile from '../assets/images/ghofranebenhmaid.jpg';


const About = () => {
   return (
      <div className=' about container'>
         <div className='about__title'>
            <div className='text--mb--s'>
               <Title headingStyle='subtitle' headingSize='heading--h3'>
                  about me
               </Title>
            </div>
            <div  className='text--mb--m'>
               <Title headingStyle='bolder--800' headingSize='heading--h1'>
                  <strong>
                     I am a Front-end Developer from Tunisia, living in
                     Copenhagen Danmark.I have studied IT & Multimedia in
                     Tunisia and have gained a lot of practical experience in
                     Photography, Graphic Design, and Web Design.
                  </strong>
               </Title>
            </div>

            <div className='aboute__descreption'>
               <Title headingStyle='normal--400' headingSize='heading--h3'>
                  <small>
                  This experience I have gained through different jobs working
                  for a political candidate’s campaign and later doing media
                  work for them as member of the Tunisian parliament. I have
                  also worked for a Tunisian magazine creating graphics and page
                  layout.
                  </small>
               </Title>
            </div>
         </div>

         <img src={photoprofile} alt='photo profile' />

         <div className='skils flex--wrap'>
            <div className='skils__section text--mb--l'>
               <div className='text--mb--s'>
                  <Title headingStyle='subtitle' headingSize='heading--h3'>
                     Desing
                  </Title>
               </div>

               <Title headingStyle='bolder--800' headingSize='heading--h2'>
                  <div className='skils__text flex--wrap'>
                     Art direction
                     <small>&#8725;</small>
                     Web & mobile
                     <small>&#8725;</small>
                     Brand identity
                     <small>&#8725;</small>
                     UX & UI
                     <small>&#8725;</small>
                     Iconography
                     <small>&#8725;</small>
                     Animation
                     <small>&#8725;</small>
                     Photography
                  </div>
               </Title>
            </div>
            <div className='skils__section '>
               <div className='text--mb--s'>
                  <Title headingStyle='subtitle' headingSize='heading--h3'>
                     Technologies
                  </Title>
               </div>
               <Title headingStyle='bolder--800' headingSize='heading--h2'>
                  <div className='skils__text flex--wrap'>
                     React
                     <small>&#8725;</small>
                     Javascript
                     <small>&#8725;</small>
                     Node.js
                     <small>&#8725;</small>
                     Express
                     <small>&#8725;</small>
                     Wordpress
                     <small>&#8725;</small>
                     PHP
                     <small>&#8725;</small>
                     Html5
                     <small>&#8725;</small>
                     CSS3
                     <small>&#8725;</small>
                     Sass
                  </div>
               </Title>
            </div>
         </div>
         
      </div>
   );
};

export default About;
