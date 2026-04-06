import React from 'react'
import { Link } from 'react-router'

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (


    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}   >
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button className="button primary-button" type='submit'>Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </main>
  )
}

export default Register