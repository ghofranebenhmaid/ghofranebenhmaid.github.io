import React from 'react'
import Descreption from '../components/DescreptionSection/Descreption.component'
import Repositories from '../components/Repositories/Repositories.component'

const Coding = () => {
    return (
        <div className='container'>
            <div className='container'>

         <Descreption  title='Logos I create..' paragraphe='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'/>
            </div>
            <div className='container'>
                
            <Repositories />
</div>
        </div>
    )
}

export default Coding