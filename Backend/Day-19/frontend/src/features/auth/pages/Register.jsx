import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    setLoading(true)

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Registration failed")
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
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* show error */}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <p>
          Already have an account?{" "}
          <Link className="toggleAuthForm" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Register