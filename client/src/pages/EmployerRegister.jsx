import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./EmployerRegister.css";
import hirepulseLogo from "../assets/hirepulse-logo.png";

function EmployerRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          role: "Employer",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Registration failed");
        return;
      }

      setMessage("Employer account created successfully!");

      setTimeout(() => {
        navigate("/employer-login");
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="employer-register-page">
      <div className="employer-register-card">

       <Link to="/" className="logo">
  <img src={hirepulseLogo} alt="HirePulse" />
</Link>

        <p className="register-tag">FOR EMPLOYERS</p>

        <h1>Create Employer Account</h1>

        <p className="register-text">
          Create your employer account and start hiring the right talent.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter company email"
              required
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <button type="submit" className="register-submit-btn">
            Create Employer Account
          </button>

        </form>

        {message && <p className="register-message">{message}</p>}

        <p className="login-link">
          Already have an employer account?{" "}
          <Link to="/employer-login">Employer Login</Link>
        </p>

        <Link to="/employers" className="back-employer-btn">
          ← Back
        </Link>

      </div>
    </div>
  );
}

export default EmployerRegister;