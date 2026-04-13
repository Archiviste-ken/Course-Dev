import React from "react";
import "../style/form.scss";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(username, password);

    navigate("/");
  }
    if (loading) {
        return (<main><h1>Loading...</h1></main>)}
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input 
  value={username}
  onChange={(e) => setUsername(e.target.value)} 
  type="text" 
  placeholder="Username" 
/>

<input 
  value={password}
  onChange={(e) => setPassword(e.target.value)} 
  type="password" 
  placeholder="Password" 
/>
          <button className="button primary-button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
