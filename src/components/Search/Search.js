import React from 'react'
import './search.css'
import homeImage from '../../assets/home-image.png'

const Search = () => {
    return (
        <section className='home'>
            <div className='overlay'></div>
            <img src={homeImage} className='image' />

            <div className='hometext-container'>

                <h1 className='homeTitle'>
                    Search your Destination
                </h1>
                <form className='search-form flex'>
                    <div className='destinationInput'>
                        <label htmlFor='city'>Search your destination:</label>
                        <div className='input flex'>
                            <input type='text' placeholder='Enter name here...' />
                        </div>
                    </div>
                    <div className='dateInput'>
                        <label htmlFor='date'>Search your date:</label>
                        <div className='input flex'>
                            <input type='date' />
                        </div>
                    </div>
                    <div className='priceInput'>
                        <div className='label_total flex'>
                            <label htmlFor='price'>Max price: </label>
                            <h3 className='total'> $5000</h3>
                        </div>
                        <div className='input flex'>
                            <input type='range' max="5000"
                                min="1000" />
                        </div>
                    </div>
                    <div className='searchBtn'>
                        <button className='btn'>Search</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Search
