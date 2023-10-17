import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from "react-icons/tb"
import { AiFillCloseCircle } from "react-icons/ai"

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar active')
    }

    const closeNav = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <div className='navbarWrapper'>
                <header className='header flex'>
                    <div className='logoDiv'>
                        <a href='#' className='logo'>
                            <h1><MdOutlineTravelExplore className='logo'></MdOutlineTravelExplore>Travel</h1>
                        </a>
                    </div>
                    <div className={active}>
                        <ul className='navLists flex'>
                            <li className='navItem'>
                                <a href='#' className='navLink'>Home</a>
                            </li>
                            <li className='navItem'>
                                <a href='#' className='navLink'>Sign Up</a>
                            </li>
                            <li className='navItem'>
                                <a href='#' className='navLink signIn'>Sign In</a>
                            </li>
                        </ul>
                        <div className='closeNavbar'>
                            <AiFillCloseCircle onClick={closeNav} className="icon" />

                        </div>

                    </div>
                    <div className='toggleNavbar'>
                        <TbGridDots onClick={showNav} className="icon"></TbGridDots>
                    </div>
                </header>
            </div>
        </section>
    )
}

export default Navbar
