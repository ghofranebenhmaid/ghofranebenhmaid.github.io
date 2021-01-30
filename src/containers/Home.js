import React from 'react'
import Hero from '../components/Hero/Hero.component'
import Section from '../components/Sections/Section.component'
import SectionCoding from '../components/Sections/SectionCoding.component'
import SectionTypographie from '../components/Sections/SectionTypographie.component'
import SectionLogos from '../components/Sections/SectionLogos.component'


const Home = () => {
    return (
        <div >
            <Hero /> 
            <SectionCoding/>
            <SectionLogos/>
            <Section/>
            <SectionTypographie/>
            
            
        </div>
    )
}

export default Home
