import React from 'react'
import "../style/form.scss"
import { Link } from 'react-router'


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (


    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}   >
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button className="button primary-button" type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </main>
  )
}

export default Login