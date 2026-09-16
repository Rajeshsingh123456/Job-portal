import { Link } from "react-router-dom";
import "./SeekerDashboard.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function SeekerDashboard() {
  const applications = [];
  const recommendedJobs = [];

  return (
    <div className="seeker-dashboard-page">

      {/* Navbar */}
      <SeekerNavbar />

      {/* Dashboard Breadcrumb */}
      <div className="seeker-dashboard-breadcrumb">
        Dashboard / Overview
      </div>

      {/* Welcome Banner */}
      <section className="seeker-welcome-banner">
        <div className="seeker-welcome-content">
          <span className="seeker-section-tag">
            JOB SEEKER DASHBOARD
          </span>

          <h1>Welcome back, Rajesh 👋</h1>

          <p>
            Your profile matches 12 new jobs posted this week. Complete your
            resume to get featured to top recruiters!
          </p>

          <div className="seeker-profile-strength">
            <div className="seeker-strength-info">
              <span>Profile Strength</span>
              <strong>⚡ 75%</strong>
            </div>

            <div className="seeker-strength-bar">
              <span></span>
            </div>
          </div>
        </div>

        <div className="seeker-welcome-actions">
          <Link
            to="/seeker-profile/edit"
            className="seeker-primary-button"
          >
            📄 Update Resume
          </Link>

          <Link
            to="/jobs"
            className="seeker-secondary-button"
          >
            🎯 Find Jobs
          </Link>
        </div>
      </section>

      {/* Application Tracking Stats */}
      <section className="seeker-stats-section">
        <div className="seeker-section-heading">
          <span>APPLICATION TRACKING</span>
          <h2>Your activity at a glance</h2>
        </div>

        <div className="seeker-stats-grid">

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">📝</div>

            <div>
              <span>APPLIED</span>
              <strong>04</strong>
              <p>Jobs applied</p>
            </div>
          </div>

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">🔍</div>

            <div>
              <span>UNDER REVIEW</span>
              <strong>02</strong>
              <p>Applications under review</p>
            </div>
          </div>

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">📅</div>

            <div>
              <span>INTERVIEWS</span>
              <strong>01</strong>
              <p>Scheduled interviews</p>
            </div>
          </div>

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">🔖</div>

            <div>
              <span>SAVED JOBS</span>
              <strong>05</strong>
              <p>Jobs saved</p>
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming Interview */}
      <section className="seeker-interview-alert">

        <div className="seeker-interview-icon">
          🎥
        </div>

        <div className="seeker-interview-content">
          <span>NEXT INTERVIEW</span>

          <h2>
            Technical Round 1 - Full Stack Developer
          </h2>

          <p>
            <strong>Acme Corp</strong>
            <span> • </span>
            Today, Sep 16, 2026
            <span> • </span>
            03:00 PM IST
          </p>

          <small>
            Interviewer: Nitesh (Hiring Lead)
          </small>
        </div>

        <a
          href="https://meet.google.com/"
          target="_blank"
          rel="noreferrer"
          className="seeker-meeting-button"
        >
          🔗 Join Google Meet
        </a>

      </section>

      {/* Recommended Jobs */}
      <section className="seeker-recommended-section">

        <div className="seeker-section-heading-row">

          <div>
            <span>RECOMMENDED FOR YOU</span>
            <h2>Jobs matched to your skills</h2>
          </div>

          <Link to="/jobs">
            View All Jobs →
          </Link>

        </div>

        <div className="seeker-recommended-grid">

          {/* Job Card 1 */}
          <div className="seeker-job-card">

            <div className="seeker-job-card-top">
              <div className="seeker-company-icon">
                TC
              </div>

              <div>
                <span>TechCorp Inc.</span>
                <small>Full-time</small>
              </div>
            </div>

            <h3>
              Senior React Developer
            </h3>

            <p className="seeker-job-location">
              📍 Delhi / Gurgaon
            </p>

            <p className="seeker-job-salary">
              ₹8,00,000 - ₹12,00,000
            </p>

            <div className="seeker-job-skills">
              <span>React.js</span>
              <span>Tailwind</span>
              <span>JavaScript</span>
            </div>

            <div className="seeker-job-actions">
              <Link to="/jobs/1">
                Quick Apply
              </Link>

              <button type="button">
                🔖 Save
              </button>
            </div>

          </div>

          {/* Job Card 2 */}
          <div className="seeker-job-card">

            <div className="seeker-job-card-top">
              <div className="seeker-company-icon">
                IX
              </div>

              <div>
                <span>InnovateX</span>
                <small>Remote</small>
              </div>
            </div>

            <h3>
              Node.js Backend Engineer
            </h3>

            <p className="seeker-job-location">
              📍 Bangalore, IN
            </p>

            <p className="seeker-job-salary">
              ₹10,00,000 - ₹15,00,000
            </p>

            <div className="seeker-job-skills">
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

            <div className="seeker-job-actions">
              <Link to="/jobs/2">
                Quick Apply
              </Link>

              <button type="button">
                🔖 Save
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Empty State / Backend Placeholder */}
      {applications.length === 0 && recommendedJobs.length === 0 && (
        <section className="seeker-dashboard-note">
          <span>BACKEND INTEGRATION</span>

          <h2>
            Live applications and recommendations will appear here.
          </h2>

          <p>
            These dashboard values are currently frontend placeholders.
            They will be connected to the HirePulse backend and MySQL
            database after the seeker frontend is completed.
          </p>
        </section>
      )}

      {/* Footer */}
      <SeekerFooter />

    </div>
  );
}

export default SeekerDashboard;