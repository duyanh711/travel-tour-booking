import React from 'react'
import './main.css'
import image1 from '../../assets/hoi_an.png'
import image2 from '../../assets/hue.jpg'
import image3 from '../../assets/ninh_binh.jpg'
import image4 from '../../assets/quang_binh.jpg'
import image5 from '../../assets/sa_pa.jpg'
import image6 from '../../assets/vung_tau.jpg'

const Main = () => {
    const destinations = [
        {
            title: 'Hoi An',
            id: 1,
            src: image1,
            desc: 'As an ancient city that sits along Thu Bon River, Hoi An impresses travellers with its unique architectural ensemble that features iconic yellow houses and rich traditional heritage.'
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

        },
        {
            title: 'Quang Binh',
            id: 4,
            src: image4,
            desc: 'Thanks to the discovery of Son Doong - the worlds largest cave here, Dong Hoi is no longer a little-known place. Exploring the magnificent Son Doong Cave and seeing first-hand the magical moment when the sun shines through the caves sinkhole is guaranteed to be an incredible experience in Dong Hoi.'

        },
        {
            title: 'Sa Pa',
            id: 5,
            src: image5,
            desc: 'Sa Pa captivates thousands of visitors with its stunning views from the top of Fansipan mountain, picturesque ethnic villages and breathtaking terraced fields.'

        },
        {
            title: 'Vung Tau',
            id: 6,
            src: image6,
            desc: 'The tourist attraction of this place is the beautiful unspoiled natural landscape endowed with clear blue coastline and rich coral reefs, blended with a calm, peaceful atmosphere and cultural and historical imprints all over the island.'

        },
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
