import { Link } from "react-router-dom";
import "./SeekerDashboard.css";
function SeekerDashboard() {
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          Job<span>Connect</span>
        </Link>

        <div className="nav-links">
          <Link to="/jobs">Find Jobs</Link>

          <Link to="/" className="logout-btn">
            Logout
          </Link>
        </div>
      </nav>

      <section className="dashboard-header">
        <p className="section-tag">JOB SEEKER</p>

        <h1>Welcome to JobConnect 👋</h1>

        <p>
          Find the right opportunity and take the next step in your career.
        </p>
      </section>

      <section className="dashboard-content">

        <div className="dashboard-card">
          <h2>Find Jobs</h2>
          <p>
            Explore available jobs and find opportunities that match your
            skills.
          </p>

          <Link to="/jobs" className="dashboard-btn">
            Browse Jobs →
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>My Applications</h2>
          <p>
            Track the jobs you have applied for and check your application
            status.
          </p>

          <button className="dashboard-btn">
            View Applications →
          </button>
        </div>

        <div className="dashboard-card">
          <h2>My Profile</h2>
          <p>
            Manage your profile information and keep your details updated.
          </p>

          <button className="dashboard-btn">
            View Profile →
          </button>
        </div>

      </section>
    </div>
  );
}

export default SeekerDashboard;