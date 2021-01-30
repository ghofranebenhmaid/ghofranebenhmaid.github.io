import React from 'react'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';


const Buttons = () => {
    return (
        <div className='container'>
             <header className='text--mb--l'>
                <Title headingStyle='bolder--800' headingSize='heading--h1' > Buttons</Title>
            </header>

            <section className='section flex text--mb--m'>
                <article className='mr' >
                    <h2 className='text--mb--s'>Small</h2>
                    <p className='text--mb--l'>Laboramus ullamcorper sit ad. Lusto urbanitas aliq am ea cum, eu propriae accusata quo, videm inter esset eum te. Moremis timeam id cum dos.</p>
                <Button buttonSize='btn--small'>Send More</Button>
                </article>
                <article className='mr'>
                    <h2 className='text--mb--s'>Medium</h2>
                    <p className='text--mb--l'>Laboramus ullamcorper sit ad. Lusto urbanitas aliq am ea cum, eu propriae accusata quo, videm inter esset eum te. Moremis timeam id cum dos.</p>

                <Button buttonSize='btn--medium'>Send More</Button>
                </article>
                <article className='mr'>
                    <h2 className='text--mb--s'>Large</h2>
                    <p className='text--mb--l'>Laboramus ullamcorper sit ad. Lusto urbanitas aliq am ea cum, eu propriae accusata quo, videm inter esset eum te. Moremis timeam id cum dos.</p>
                    
                <Button buttonSize='btn--large'>Send More</Button>
                </article>
            </section>

            <section className='section flex text--mb--m'>
                <article className='mr text--mb--l' >
                    <h2 className='text--mb--s'>Simple</h2>
                    <p className='text--mb--l'>Laboramus ullamcorper sit ad. Lusto urbanitas aliq am ea cum, eu propriae accusata quo, videm inter esset eum te. Moremis timeam id cum dos.</p>
                <Button buttonSize='btn--simple' buttonStyle='btn--simple'>Send More</Button>
                </article>
                <article className='mr'>
                    <h2 className='text--mb--s'>Arrow (Left/Right)</h2>
                    <p className='text--mb--l'>Laboramus ullamcorper sit ad. Lusto urbanitas aliq am ea cum, eu propriae accusata quo, videm inter esset eum te. Moremis timeam id cum dos.</p>

                <Button  buttonStyle='btn--cercle'><AiOutlineLeft /></Button>
                <Button buttonStyle='btn--cercle'><AiOutlineRight /></Button>
                </article>
                
            </section>
        </div>
    )
}

export default Buttons
