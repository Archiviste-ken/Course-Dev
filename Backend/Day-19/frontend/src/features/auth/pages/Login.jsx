import React,{useState} from 'react'
import'../style/form.scss'
import {Link} from 'react-router'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    setLoading(true)

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed")
      }

      // ✅ THIS is what you want
   setSuccess(data.message)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className = "form-container">
      <div className="form-container">
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input 
           type="text"
           placeholder="Username"
           onChange={(e) => setUsername(e.target.value)}
           required />
          <input  
          type="password" 
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} 
          required/>


          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login