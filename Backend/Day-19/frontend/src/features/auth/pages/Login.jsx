import React from 'react'

const Login = () => {
  return (
    <div className = "form-container">
      <h1>Login</h1>
      <form>
        <input type="text" name = "username"placeholder='enter username' />
        <input type="password" name = "password" placeholder='enter password' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login