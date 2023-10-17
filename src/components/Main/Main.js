import React from 'react'
import './main.css'
import image1 from '../../assets/hoi_an.png'
import image2 from '../../assets/hue.jpg'
import image3 from '../../assets/ninh_binh.jpg'

const Main = () => {
    const destinations = [
        {
            title: 'Hoi An',
            id: 1,
            src: image1,
            desc: 'As an ancient city that sits along Thu Bon River, Hoi An impresses travellers with its unique architectural ensemble that features iconic yellow houses and rich traditional heritage,'
        },
        {
            title: 'Hue',
            id: 2,
            src: image2,
            desc: 'Hue, the famous ancient capital located in central Vietnam, is known for its poetic and romantic beauty.'
        },
        {
            title: 'Ninh Binh',
            id: 3,
            src: image3,
            desc: 'Ninh Binh has become familiar to international tourists after its majestic landscape was chosen as the backdrop for the Hollywood blockbuster “Kong: Skull Island”.'

        }
    ]
    return (
        <section className='main'>
            <div className='main-wrapper'>
                <h2 className='main-title'>Most popular places</h2>
                <div className='detail-container'>
                    {destinations.map((destination, index) => (
                        <div className='destination-detail' key={index} title={destination.title}>
                            <img className='des-img' src={destination.src} alt={destination.title} />
                            <p className='description'>{destination.desc}</p>
                        </div>))}
                </div>
            </div>
        </section>
    )
}

export default Main
