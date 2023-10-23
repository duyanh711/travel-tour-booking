import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homeImg from '../assets/home-image.png'

function SignUp() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

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
        <div className=''>
            <img className='' src={homeImg} />
            <div className=''>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <h1 className=''>Sign Up</h1>
                            <form onSubmit={handleSubmit} className=''>
                                <input
                                    onInput={() => setError('')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='' type='email' placeholder='Email' />
                                <input
                                    onInput={() => setError('')}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='' type='password' placeholder='Password' />
                                <button className=''>Sign Up</button>

                                <p className=''>Already had account?<span className=''>
                                    <Link to='/login'> Sign In</Link></span> </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp
