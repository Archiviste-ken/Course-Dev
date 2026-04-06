import React from 'react'
import "../style/form.scss"


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
        </div>
    </main>
  )
}

export default Login