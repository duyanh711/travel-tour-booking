import React from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { TbGridDots } from "react-icons/tb"
import { AiFillCloseCircle } from "react-icons/ai"

const Navbar = () => {
    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo'>
                        <h1><MdOutlineTravelExplore className='logo'></MdOutlineTravelExplore>Travel</h1>
                    </a>
                </div>
                <div className='navBar'>
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
                        <AiFillCloseCircle className="icon" />

                    </div>

                </div>
                <div className='toggleNavbar'>
                    <TbGridDots className="icon"></TbGridDots>
                </div>
            </header>
        </section>
    )
}

export default Navbar
