import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/hirepulse-logo.png";
import "./SeekerNavbar.css";

function SeekerNavbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <header className="seeker-navbar">
      <div className="seeker-navbar-brand">
        <Link to="/seeker-dashboard">
          <img src={logo} alt="HirePulse" />
        </Link>

        <span>Job Seeker</span>
      </div>

      <div className="seeker-navbar-search">
        <span>⌕</span>
        <input
          type="text"
          placeholder="Search jobs, skills, companies..."
        />
      </div>

      <nav className="seeker-navbar-links">
        <Link to="/seeker-dashboard">Dashboard</Link>
        <Link to="/jobs">Find Jobs</Link>
        <Link to="/my-applications">Applications</Link>
      </nav>

      <div className="seeker-navbar-right">
        <Link to="/saved-jobs" className="seeker-navbar-action">
          🔖
          <span>Saved</span>
        </Link>

        <button
          className="seeker-navbar-icon"
          type="button"
          aria-label="Notifications"
        >
          🔔
          <span>2</span>
        </button>

        <button
          className="seeker-navbar-icon"
          type="button"
          aria-label="Messages"
        >
          💬
          <span>1</span>
        </button>

        <div className="seeker-profile-wrapper">
          <button
            className="seeker-profile-button"
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className="seeker-navbar-avatar">R</div>

            <div className="seeker-navbar-profile-info">
              <strong>Rajesh</strong>
              <span>Job Seeker</span>
            </div>

            <b>{profileOpen ? "⌃" : "⌄"}</b>
          </button>

          {profileOpen && (
            <div className="seeker-profile-dropdown">
              <Link to="/seeker-profile">My Profile</Link>
              <Link to="/seeker-profile/edit">Edit Profile</Link>

              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default SeekerNavbar;