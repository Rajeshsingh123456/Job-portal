import { Link } from "react-router-dom";
import "./SeekerDashboard.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function SeekerDashboard() {
  const recommendedJobs = [
    {
      id: 1,
      company: "TechCorp Inc.",
      initials: "TC",
      title: "Senior React Developer",
      location: "Delhi / Gurgaon",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8,00,000 - ₹12,00,000",
      posted: "2 days ago",
      skills: ["React.js", "JavaScript", "Git"]
    },
    {
      id: 2,
      company: "InnovateX",
      initials: "IX",
      title: "Node.js Backend Engineer",
      location: "Bangalore",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹10,00,000 - ₹15,00,000",
      posted: "3 days ago",
      skills: ["Node.js", "Express", "MySQL"]
    },
    {
      id: 3,
      company: "PixelWorks",
      initials: "PW",
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹5,00,000 - ₹8,00,000",
      posted: "1 day ago",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 4,
      company: "CodeSphere",
      initials: "CS",
      title: "Junior Full Stack Developer",
      location: "Noida",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹4,00,000 - ₹7,00,000",
      posted: "4 days ago",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 5,
      company: "WebNova",
      initials: "WN",
      title: "React.js Developer",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "1-2 years",
      salary: "₹6,00,000 - ₹9,00,000",
      posted: "5 days ago",
      skills: ["React.js", "JavaScript", "CSS"]
    },
    {
      id: 6,
      company: "DevStack Labs",
      initials: "DS",
      title: "Backend Developer",
      location: "Gurgaon",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹7,00,000 - ₹11,00,000",
      posted: "2 days ago",
      skills: ["Node.js", "Express", "SQL"]
    },
    {
      id: 7,
      company: "BrightTech",
      initials: "BT",
      title: "Software Developer Intern",
      location: "Remote",
      type: "Internship",
      experience: "Fresher",
      salary: "₹15,000 - ₹25,000 / month",
      posted: "Today",
      skills: ["JavaScript", "React", "Git"]
    },
    {
      id: 8,
      company: "NextGen Solutions",
      initials: "NG",
      title: "Full Stack Developer",
      location: "Pune",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹8,00,000 - ₹13,00,000",
      posted: "3 days ago",
      skills: ["React", "Node.js", "MySQL"]
    }
  ];

  return (
    <div className="seeker-dashboard-page">
      <SeekerNavbar />

      <div className="seeker-dashboard-breadcrumb">
        Dashboard / Overview
      </div>

      {/* Welcome Hero */}
      <section className="seeker-welcome-banner">
        <div className="seeker-welcome-content">
          <span className="seeker-section-tag">HIREPULSE JOB SEEKER</span>

          <h1>Find your next opportunity.</h1>

          <p>
            Discover jobs that match your skills, experience, and career
            goals. Explore opportunities and take the next step in your career.
          </p>

          <div className="seeker-welcome-actions">
            <Link to="/jobs" className="seeker-primary-button">
              Find Jobs
            </Link>

            <Link
              to="/seeker-profile/edit"
              className="seeker-secondary-button"
            >
              Upload Resume
            </Link>
          </div>
        </div>

        <div className="seeker-welcome-visual">
          <div className="seeker-hero-card">
            <span>CAREER OPPORTUNITIES</span>
            <strong>Discover. Apply. Grow.</strong>
            <p>
              Explore relevant jobs and manage your career journey from one
              place.
            </p>
          </div>
        </div>
      </section>

      {/* Activity */}
      <section className="seeker-stats-section">
        <div className="seeker-section-heading">
          <span>YOUR ACTIVITY</span>
          <h2>Track your job search</h2>
        </div>

        <div className="seeker-stats-grid">
          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">📝</div>
            <div>
              <span>APPLICATIONS</span>
              <strong>0</strong>
              <p>Jobs applied</p>
            </div>
          </div>

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">🔖</div>
            <div>
              <span>SAVED JOBS</span>
              <strong>0</strong>
              <p>Jobs saved</p>
            </div>
          </div>

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">📅</div>
            <div>
              <span>INTERVIEWS</span>
              <strong>0</strong>
              <p>Scheduled interviews</p>
            </div>
          </div>

          <div className="seeker-stat-card">
            <div className="seeker-stat-icon">👤</div>
            <div>
              <span>PROFILE</span>
              <strong>Start</strong>
              <p>Complete your profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Jobs */}
      <section className="seeker-recommended-section">
        <div className="seeker-section-heading-row">
          <div>
            <span>EXPLORE OPPORTUNITIES</span>
            <h2>Jobs you may be interested in</h2>
          </div>

          <Link to="/jobs">View All Jobs →</Link>
        </div>

        <div className="seeker-recommended-grid">
          {recommendedJobs.map((job) => (
            <article className="seeker-job-card" key={job.id}>
              <div className="seeker-job-card-top">
                <div className="seeker-company-logo">
                  {job.initials}
                </div>

                <button
                  type="button"
                  className="seeker-save-button"
                  aria-label={`Save ${job.title}`}
                >
                  🔖
                </button>
              </div>

              <span className="seeker-job-company">{job.company}</span>

              <h3>{job.title}</h3>

              <div className="seeker-job-meta">
                <span>📍 {job.location}</span>
                <span>◷ {job.type}</span>
                <span>◉ {job.experience}</span>
              </div>

              <div className="seeker-job-salary">
                {job.salary}
              </div>

              <div className="seeker-job-skills">
                {job.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="seeker-job-card-bottom">
                <small>Posted {job.posted}</small>

                <Link to={`/jobs/${job.id}`}>
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Profile Completion */}
      <section className="seeker-profile-completion">
        <div className="seeker-profile-completion-content">
          <span>BUILD YOUR PROFILE</span>

          <h2>Complete your profile to unlock more opportunities.</h2>

          <p>
            Add your resume, skills, education, and experience so recruiters
            can better understand your professional background.
          </p>

          <Link
            to="/seeker-profile/edit"
            className="seeker-primary-button"
          >
            Complete Profile
          </Link>
        </div>

        <div className="seeker-profile-completion-steps">
          <div>
            <strong>01</strong>
            <span>Resume</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Skills</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Education</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Experience</span>
          </div>
        </div>
      </section>

      <SeekerFooter />
    </div>
  );
}

export default SeekerDashboard;