import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/hirepulse-logo.png";
import "./EmployerNavbar.css";


function EmployerNavbar() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="employer-navbar">
      <div className="employer-brand">
        <Link to="/employer-dashboard">
          <img
            src={logo}
            alt="HirePulse"
            className="employer-logo"
          />
        </Link>
      </div>

      <nav className="employer-nav-links">
        <Link to="/employer-dashboard">
          Dashboard
        </Link>

        <Link to="/employer-jobs">
          My Jobs
        </Link>

        <Link to="/employer-applicants">
          Applicants
        </Link>

        <Link to="/employer-interviews">
  Interviews
</Link>

        <Link to="/about">
          About HirePulse
        </Link>
      </nav>

      <div className="employer-nav-right">
        <div className="employer-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search candidates, skills, jobs..."
          />
        </div>

        <button
          className="nav-icon-button"
          type="button"
          aria-label="Notifications"
        >
          🔔
          <span className="notification-count">0</span>
        </button>

        <button
          className="nav-icon-button"
          type="button"
          aria-label="Messages"
        >
          ✉
          <span className="message-count">0</span>
        </button>

        <div
          className="employer-profile-wrapper"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <div className="employer-profile">
            <div className="employer-avatar">
              N
            </div>

            <div className="employer-profile-details">
              <strong>Nitesh</strong>
              <span>Employer</span>
            </div>

            <span className="profile-arrow">
              {profileOpen ? "⌃" : "⌄"}
            </span>
          </div>

          {profileOpen && (
            <div className="profile-dropdown">
              <Link to="/employer-profile">
                My Profile
              </Link>

              <Link to="/employer-profile/edit">
                Edit Profile
              </Link>

              <button
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default EmployerNavbar;