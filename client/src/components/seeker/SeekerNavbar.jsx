import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/hirepulse-logo.png";
import "./SeekerNavbar.css";

function SeekerNavbar() {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
  };

  const getNavClass = ({ isActive }) =>
    isActive ? "seeker-nav-link active" : "seeker-nav-link";

  return (
    <header className="seeker-navbar">
      {/* Brand */}
      <div className="seeker-navbar-brand">
        <Link to="/seeker-dashboard">
          <img src={logo} alt="HirePulse" />
        </Link>

        <span>Job Seeker</span>
      </div>

      {/* Search */}
      <div className="seeker-navbar-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search jobs, skills, companies..."
        />
      </div>

      {/* Main Navigation */}
      <nav className="seeker-navbar-links">
        <NavLink to="/seeker-dashboard" className={getNavClass}>
          Dashboard
        </NavLink>

        <NavLink to="/jobs" className={getNavClass}>
          Find Jobs
        </NavLink>

        <NavLink to="/my-applications" className={getNavClass}>
          Applications
        </NavLink>
      </nav>

      {/* Right Side */}
      <div className="seeker-navbar-right">
        <NavLink
          to="/saved-jobs"
          className={({ isActive }) =>
            isActive
              ? "seeker-navbar-action active"
              : "seeker-navbar-action"
          }
        >
          <span className="seeker-navbar-action-icon">🔖</span>
          <span>Saved</span>
        </NavLink>

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

        {/* Profile */}
        <div className="seeker-profile-wrapper">
          <button
            className={`seeker-profile-button ${
              profileOpen ? "open" : ""
            }`}
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
              <NavLink
                to="/seeker-profile"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                My Profile
              </NavLink>

              <NavLink
                to="/seeker-profile/edit"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Edit Profile
              </NavLink>

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

