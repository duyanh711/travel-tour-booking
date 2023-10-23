import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homeImg from '../../assets/home-image.png'
import './login.css'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            navigate('/')

        }
        catch (error) {
            setError(error.message)
        }

    }


    return (
        <div className='login-container'>
            <img className='bg-img' src={homeImg} />
            <div className='login-wrapper'>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <h1 className='login-text'>Sign In</h1>
                            <form onSubmit={handleSubmit}
                                className='login-form'>
                                <input
                                    onInput={() => setError('')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='email' type='email' placeholder='Email' />
                                <input
                                    onInput={() => setError('')}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='pw' type='password' placeholder='Password' />
                                <button className=''>Sign In</button>
                                <div className='login-more'>
                                    <p className=''><input className='remember' type='checkbox' />Remember me</p>
                                    <p className='support'>Need help?</p>
                                </div>
                                <p className=''>New Booking's account?<span className=''>
                                    <Link to='/signup'> Sign Up</Link></span> </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login

