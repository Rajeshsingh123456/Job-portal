import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EmployerLogin.css";

function EmployerLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Login failed");
        return;
      }

      // Check whether the account is actually an Employer
      if (data.user.role !== "Employer") {
        setMessage("This account is not an Employer account.");
        return;
      }

      setMessage("Login successful!");

      // Temporary: we'll create the Employer Dashboard next
      setTimeout(() => {
        navigate("/employer-dashboard");
      }, 1000);

    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="employer-login-page">
      <div className="employer-login-card">

        <Link to="/" className="logo">
          Job<span>Connect</span>
        </Link>

        <p className="login-tag">FOR EMPLOYERS</p>

        <h1>Employer Login</h1>

        <p className="login-text">
          Login to manage your jobs and find the right talent.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Login
          </button>

        </form>

        {message && <p className="login-message">{message}</p>}

        <p className="register-link">
          Don't have an employer account?{" "}
          <Link to="/employer-register">Create Account</Link>
        </p>

        <Link to="/employers" className="back-employer-btn">
          ← Back
        </Link>

      </div>
    </div>
  );
}

export default EmployerLogin;