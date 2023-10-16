import React from 'react'
import './home.css'
import homeImage from '../../assets/home-image.png'

const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'></div>
            <img src={homeImage} className='image' />

            <div className='hometext-container'>
                <form className='search-form'>
                    <h1 className='homeTitle'>
                        Search your Holiday
                    </h1>
                    <div className='destinationInput'>
                        <label htmlFor='city'>Search your destination:</label>
                        <div className='input flex'>
                            <input type='text' placeholder='Enter name here...' />
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Home
