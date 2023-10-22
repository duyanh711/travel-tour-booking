import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
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

                    <Link to="/">
                        <div className='logoDiv'>
                            <div className='logo'>
                                <h1><MdOutlineTravelExplore className='logo'></MdOutlineTravelExplore>Travel</h1>
                            </div>
                        </div>
                    </Link>

                    <div className={active}>
                        <ul className='navLists flex'>
                            <Link to="/">
                                <li className='navItem'>
                                    <p className='navLink'>Home</p>
                                </li>
                            </Link>
                            <Link to="/signup">
                                <li className='navItem'>
                                    <p className='navLink'>Sign Up</p>
                                </li>
                            </Link>
                            <Link to="/login">
                                <li className='navItem'>
                                    <p className='navLink signIn'>Sign In</p>
                                </li>
                            </Link>
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
