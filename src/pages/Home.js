import React from 'react'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <Search />
            <Main />
            <Footer />
        </>
    )
}

export default Home
