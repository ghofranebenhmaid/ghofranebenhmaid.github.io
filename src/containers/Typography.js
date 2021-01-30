import React from 'react';

import Imen from '../assets/images/typography/Imen.jpg';
import Zaineb from '../assets/images/typography/Zaineb.jpg';
import Emna from '../assets/images/typography/Emna.jpg';
import Montaha from '../assets/images/typography/Montaha.jpg';
import Ghofrane from '../assets/images/typography/Ghofrane.jpg';
import Imen1 from '../assets/images/typography/Imen1.jpg';
import Zahra from '../assets/images/typography/Zahra.jpg';
// import tp8 from '../assets/images/typography/Zahra.jpg';

import Descreption from '../components/DescreptionSection/Descreption.component';
import Typography from '../components/Card/Typography.component';

const Logos = () => {
   return (
      <div className='container flex--wrap'>
         <div className='container'>
            <Descreption
               title='Logos I create..'
               paragraphe='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
            />
         </div>

         <div className='container'>
            <div className='wrapper1'>
               <div class="div1">

                  <Typography image={Imen} title='tp 1' goto='#' />
               </div>
               <div class="div2">

                  <Typography image={Zaineb} title='tp 2' goto='#' />
               </div>
               <div class="div3">

                  <Typography image={Emna} title='tp 3' goto='#' />
               </div>
               <div class="div4">

                  <Typography image={Montaha} title='Montaha' goto='#' />
               </div>
               <div class="div5">

                  <Typography image={Ghofrane} title='Ghofrane' goto='#' />
               </div>
               {/* <div class="div6"> */}

                  {/* <Typography image={tp6} title='tp 6' goto='#' /> */}
               {/* </div> */}
               <div class="div7">

                  <Typography image={Imen1} title='Imen 1' goto='#' />
               </div>
               <div class="div8">

                  <Typography image={Zahra} title='Zahra' goto='#' />
               </div>
            </div>
         </div>
        </div>
   );
};

export default Logos;
