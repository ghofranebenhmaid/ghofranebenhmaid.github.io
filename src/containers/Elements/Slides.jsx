import React from 'react'
import Slider from '../../components/Slider/Slider';
import defaultSlides from '../../components/Slider/defaultSlides';
 import Carousel from '../../components/Slider/Carousel';


const Slides = () => {
    return (
        <div className='container'>
            <Slider slides={ defaultSlides } />
            <Carousel />

        </div>
    )
}

export default Slides
