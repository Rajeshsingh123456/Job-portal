import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/hirepulse-logo.png";
import "./EmployerDashboard.css";

function EmployerDashboard() {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  // Temporary recruiter data
  // Backend integration baad me yahin connect karenge.
  const employer = {
    name: "Nitesh",
    role: "Employer",
    email: "nitesh@gmail.com",
  };

  // Initial recruiter state
  // New recruiter ke liye sab zero rahega.
  const stats = [
    {
      label: "Active Jobs",
      value: "0",
      note: "No active jobs",
      icon: "💼",
      className: "blue",
    },
    {
      label: "Total Jobs",
      value: "0",
      note: "No posts yet",
      icon: "📋",
      className: "purple",
    },
    {
      label: "Applicants",
      value: "0",
      note: "No applications",
      icon: "👥",
      className: "green",
    },
    {
      label: "Shortlisted",
      value: "0",
      note: "No shortlist",
      icon: "⭐",
      className: "yellow",
    },
    {
      label: "Interviews",
      value: "0",
      note: "No schedule",
      icon: "📅",
      className: "orange",
    },
    {
      label: "Hired",
      value: "0",
      note: "No hires yet",
      icon: "✓",
      className: "dark",
    },
  ];

  const recentJobs = [];
  const recentApplications = [];
  const upcomingInterviews = [];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="employer-dashboard">

      {/* =====================================================
          TOP NAVBAR
      ===================================================== */}

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

          <Link
            to="/employer-dashboard"
            className="active"
          >
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

          {/* Search */}
          <div className="employer-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search candidates, skills, jobs..."
            />
          </div>

          {/* Notifications */}
          <button
            className="nav-icon-button"
            type="button"
            aria-label="Notifications"
          >
            🔔
            <span className="notification-count">0</span>
          </button>

          {/* Messages */}
          <button
            className="nav-icon-button"
            type="button"
            aria-label="Messages"
          >
            💬
          </button>

          {/* Profile */}
          <div className="profile-wrapper">

            <button
              type="button"
              className="profile-button"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <div className="profile-avatar">
                {employer.name.charAt(0).toUpperCase()}
              </div>

              <div className="profile-info">
                <strong>{employer.name}</strong>
                <span>{employer.role}</span>
              </div>

              <span className="profile-arrow">
                {profileOpen ? "▲" : "▼"}
              </span>
            </button>

            {profileOpen && (
              <div className="profile-menu">

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


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="employer-main">

        {/* ===================================================
            WELCOME SECTION
        =================================================== */}

        <section className="dashboard-welcome">

          <div className="dashboard-welcome-content">

            <p className="dashboard-eyebrow">
              RECRUITER PORTAL
            </p>

            <h1>
              Welcome back, {employer.name} 👋
            </h1>

            <p>
              Here's what's happening with your hiring.
              Manage your jobs, applicants and interviews
              from one place.
            </p>

            <div className="dashboard-actions">

              <Link
                to="/post-job"
                className="primary-action"
              >
                Post a Job →
              </Link>

              <Link
                to="/employer-applicants"
                className="secondary-action"
              >
                View Applicants →
              </Link>

            </div>

          </div>


          <div className="dashboard-welcome-card">

            <span>
              RECRUITER WORKSPACE
            </span>

            <h3>
              Build your next great team.
            </h3>

            <p>
              Post opportunities, review candidates,
              manage your hiring pipeline and schedule
              interviews from your dashboard.
            </p>

          </div>

        </section>


        {/* ===================================================
            QUICK GET STARTED HERO BANNER
        =================================================== */}

        <section className="quick-start-section">

          <div className="quick-start-banner">

            <div className="quick-start-header">

              <div className="quick-start-icon">
                🎯
              </div>

              <div>
                <p className="quick-start-label">
                  QUICK GET STARTED
                </p>

                <h2>
                  Complete your hiring setup in 3 easy steps
                </h2>
              </div>

            </div>


            <div className="quick-start-steps">

              {/* STEP 1 */}
              <div className="quick-start-step">

                <div className="step-number">
                  1
                </div>

                <div className="step-content">

                  <h3>
                    Post a Job
                  </h3>

                  <p>
                    Create your first opening
                  </p>

                </div>

              </div>


              <div className="step-arrow">
                →
              </div>


              {/* STEP 2 */}
              <div className="quick-start-step">

                <div className="step-number">
                  2
                </div>

                <div className="step-content">

                  <h3>
                    Review Applicants
                  </h3>

                  <p>
                    Filter and review candidate resumes
                  </p>

                </div>

              </div>


              <div className="step-arrow">
                →
              </div>


              {/* STEP 3 */}
              <div className="quick-start-step">

                <div className="step-number">
                  3
                </div>

                <div className="step-content">

                  <h3>
                    Schedule Interview & Hire
                  </h3>

                  <p>
                    Connect with top candidate talent
                  </p>

                </div>

              </div>

            </div>


            <div className="quick-start-action">

              <Link
                to="/post-job"
                className="quick-start-button"
              >
                + Post Your First Job Now
              </Link>

            </div>

          </div>

        </section>


        {/* ===================================================
            HIRING OVERVIEW
        =================================================== */}

        <section className="overview-section">

          <div className="section-heading">

            <div>

              <p className="section-eyebrow">
                HIRING OVERVIEW
              </p>

              <h2>
                Your hiring at a glance
              </h2>

              <p>
                Track your recruitment activity and progress.
              </p>

            </div>

          </div>


          <div className="dashboard-stats">

            {stats.map((stat) => (

              <div
                className={`stat-card ${stat.className}`}
                key={stat.label}
              >

                <div className="stat-top">

                  <div className="stat-icon">
                    {stat.icon}
                  </div>

                </div>

                <div className="stat-value">
                  {stat.value}
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>

                <div className="stat-note">
                  -- {stat.note}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ===================================================
            JOB MANAGEMENT + APPLICATION ACTIVITY
        =================================================== */}

        <section className="dashboard-row-section">

          <div className="dashboard-two-column">


            {/* RECENT JOBS */}

            <div className="dashboard-panel job-management-panel">

              <div className="panel-header">

                <div>

                  <p className="panel-eyebrow">
                    JOB MANAGEMENT
                  </p>

                  <h2>
                    Recent Jobs
                  </h2>

                </div>

                <Link
                  to="/employer-jobs"
                  className="view-all-link"
                >
                  View all →
                </Link>

              </div>


              {recentJobs.length === 0 ? (

                <div className="empty-panel">

                  <div className="empty-icon">
                    💼
                  </div>

                  <h3>
                    No jobs posted yet
                  </h3>

                  <p>
                    Create your first job posting to start
                    receiving applications.
                  </p>

                  <Link
                    to="/post-job"
                    className="panel-action-button"
                  >
                    + Create a Job
                  </Link>

                </div>

              ) : (

                <div className="job-list">
                  {/* Dynamic jobs will appear here */}
                </div>

              )}

            </div>


            {/* APPLICATION ACTIVITY */}

            <div className="dashboard-panel activity-panel">

              <div className="panel-header">

                <div>

                  <p className="panel-eyebrow">
                    APPLICATION ACTIVITY
                  </p>

                  <h2>
                    Applications Overview
                  </h2>

                </div>

                <select className="activity-filter">

                  <option>
                    Last 7 Days
                  </option>

                  <option>
                    Last 30 Days
                  </option>

                  <option>
                    Last 3 Months
                  </option>

                </select>

              </div>


              <div className="activity-chart">

                <div className="chart-y-axis">

                  <span>10</span>
                  <span>8</span>
                  <span>6</span>
                  <span>4</span>
                  <span>2</span>
                  <span>0</span>

                </div>

                <div className="chart-area">

                  <div className="chart-grid-lines">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <div className="chart-bars">

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Mon</span>
                    </div>

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Tue</span>
                    </div>

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Wed</span>
                    </div>

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Thu</span>
                    </div>

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Fri</span>
                    </div>

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Sat</span>
                    </div>

                    <div className="chart-column">
                      <div className="chart-bar empty"></div>
                      <span>Sun</span>
                    </div>

                  </div>

                </div>

              </div>

              <div className="no-chart-data">
                No application data recorded yet
              </div>

            </div>

          </div>

        </section>


        {/* ===================================================
            INTERVIEWS + RECENT CANDIDATES
        =================================================== */}

        <section className="dashboard-row-section">

          <div className="dashboard-two-column">


            {/* INTERVIEWS */}

            <div className="dashboard-panel">

              <div className="panel-header">

                <div>

                  <p className="panel-eyebrow">
                    INTERVIEW SCHEDULE
                  </p>

                  <h2>
                    Upcoming Interviews
                  </h2>

                </div>

                <Link
                  to="/employer-interviews"
                  className="view-all-link"
                >
                  View all →
                </Link>

              </div>


              {upcomingInterviews.length === 0 ? (

                <div className="empty-panel">

                  <div className="empty-icon">
                    📅
                  </div>

                  <h3>
                    No interviews scheduled
                  </h3>

                  <p>
                    Scheduled interviews will appear here
                    once candidates apply and advance.
                  </p>

                  <Link
                    to="/employer-interviews"
                    className="panel-action-button"
                  >
                    Manage Interviews
                  </Link>

                </div>

              ) : (

                <div className="interview-list">
                  {/* Dynamic interviews */}
                </div>

              )}

            </div>


            {/* RECENT CANDIDATE ACTIVITY */}

            <div className="dashboard-panel">

              <div className="panel-header">

                <div>

                  <p className="panel-eyebrow">
                    CANDIDATE ACTIVITY
                  </p>

                  <h2>
                    Recent Applicants
                  </h2>

                </div>

                <Link
                  to="/employer-applicants"
                  className="view-all-link"
                >
                  View all →
                </Link>

              </div>


              {recentApplications.length === 0 ? (

                <div className="empty-panel">

                  <div className="empty-icon">
                    👥
                  </div>

                  <h3>
                    No applications yet
                  </h3>

                  <p>
                    Applications will appear here once
                    candidates start applying to your jobs.
                  </p>

                  <Link
                    to="/employer-applicants"
                    className="panel-action-button secondary-panel-button"
                  >
                    Browse Resume Database

                    <span className="optional-label">
                      Optional
                    </span>

                  </Link>

                </div>

              ) : (

                <div className="application-list">
                  {/* Dynamic applications */}
                </div>

              )}

            </div>

          </div>

        </section>


        {/* ===================================================
            QUICK ACTIONS
        =================================================== */}

        <section className="quick-actions-section">

          <div className="quick-actions-box">

            <div className="quick-actions-heading">

              <p className="section-eyebrow light">
                QUICK ACTIONS
              </p>

              <h2>
                Move your hiring forward
              </h2>

              <p>
                Everything you need to manage your recruitment
                workflow from one place.
              </p>

            </div>


            <div className="quick-actions-grid">


              <Link
                to="/post-job"
                className="quick-action-card"
              >

                <span className="quick-action-icon">
                  +
                </span>

                <div>

                  <strong>
                    Post a Job
                  </strong>

                  <small>
                    Create a new vacancy
                  </small>

                </div>

              </Link>


              <Link
                to="/employer-jobs"
                className="quick-action-card"
              >

                <span className="quick-action-icon">
                  💼
                </span>

                <div>

                  <strong>
                    Manage Jobs
                  </strong>

                  <small>
                    Edit & manage postings
                  </small>

                </div>

              </Link>


              <Link
                to="/employer-applicants"
                className="quick-action-card"
              >

                <span className="quick-action-icon">
                  👥
                </span>

                <div>

                  <strong>
                    Review Applicants
                  </strong>

                  <small>
                    View candidate pipeline
                  </small>

                </div>

              </Link>


              <Link
                to="/employer-interviews"
                className="quick-action-card"
              >

                <span className="quick-action-icon">
                  📅
                </span>

                <div>

                  <strong>
                    Schedule Interview
                  </strong>

                  <small>
                    Calendar & meeting links
                  </small>

                </div>

              </Link>


            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="employer-footer">

        <div className="footer-grid">


          <div className="footer-brand">

            <img
              src={logo}
              alt="HirePulse"
            />

            <p>
              HirePulse helps employers manage jobs,
              candidates and interviews through one
              simple recruitment workspace.
            </p>

          </div>


          <div className="footer-column">

            <h4>
              For Employers
            </h4>

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

            <Link to="/post-job">
              Post a Job
            </Link>

          </div>


          <div className="footer-column">

            <h4>
              HirePulse
            </h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/find-jobs">
              Find Jobs
            </Link>

            <Link to="/about">
              About HirePulse
            </Link>

          </div>


          <div className="footer-column">

            <h4>
              Account
            </h4>

            <Link to="/employer-profile">
              My Profile
            </Link>

            <Link to="/employer-profile/edit">
              Edit Profile
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Back to Top
            </button>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 HirePulse. All rights reserved.
          </span>

          <span>
            Built for smarter hiring.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default EmployerDashboard;