import { Link, useNavigate } from "react-router-dom";
import "./EmployerJobs.css";
import EmployerNavbar from "../components/employer/EmployerNavbar";
import EmployerFooter from "../components/employer/EmployerFooter";

function EmployerJobs() {
  const navigate = useNavigate();

  const jobs = [];

  const totalJobs = jobs.length;
  const activeJobs = jobs.filter((job) => job.status === "Active").length;
  const pausedJobs = jobs.filter((job) => job.status === "Paused").length;
  const totalApplicants = jobs.reduce(
    (total, job) => total + (job.applicants || 0),
    0
  );

  return (
    <div className="employer-jobs-page">

      {/* Navbar */}
      <EmployerNavbar />

      {/* Main Content */}
      <main className="employer-jobs-main">

        {/* Jobs Hero */}
        <section className="jobs-page-header">

          <div className="jobs-hero-content">

            <span className="jobs-breadcrumb">
              Employer / My Jobs
            </span>

            <h1>
              Manage Your Job Postings
            </h1>

            <p>
              Create, manage, and track your job openings while keeping your
              recruitment process organized in one place.
            </p>

            <div className="jobs-hero-actions">

              <Link
                to="/post-job"
                className="primary-job-button"
              >
                + Post a Job
              </Link>

              <span className="jobs-hero-note">
                Manage your hiring pipeline from one place.
              </span>

            </div>

          </div>

          <div className="jobs-hero-decoration">

            <div className="hero-decoration-circle circle-one"></div>

            <div className="hero-decoration-circle circle-two"></div>

            <div className="hero-decoration-content">
              <span>MY JOBS</span>
              <strong>Manage</strong>
              <strong>Recruit</strong>
              <strong>Grow</strong>
            </div>

          </div>

        </section>

        {/* Job Statistics */}
        <section className="job-stats-grid">

          <div className="job-stat-card">
            <span className="job-stat-label">Total Jobs</span>
            <strong>{totalJobs}</strong>
          </div>

          <div className="job-stat-card">
            <span className="job-stat-label">Active Jobs</span>
            <strong>{activeJobs}</strong>
          </div>

          <div className="job-stat-card">
            <span className="job-stat-label">Total Applicants</span>
            <strong>{totalApplicants}</strong>
          </div>

          <div className="job-stat-card">
            <span className="job-stat-label">Paused Jobs</span>
            <strong>{pausedJobs}</strong>
          </div>

        </section>

        {/* Jobs List */}
        <section className="jobs-list-section">

          <div className="jobs-section-header">

            <div>
              <h2>Job Postings</h2>
              <p>
                View and manage all your job postings.
              </p>
            </div>

          </div>

          {jobs.length === 0 ? (

            <div className="jobs-empty-state">

              <div className="empty-job-icon">
                +
              </div>

              <h3>
                No jobs posted yet
              </h3>

              <p>
                You haven't posted any jobs yet. Create your first job posting
                to start receiving applications.
              </p>

              <button
                type="button"
                className="primary-job-button"
                onClick={() => navigate("/post-job")}
              >
                + Post Your First Job
              </button>

            </div>

          ) : (

            <div className="jobs-table-wrapper">
              {/* Job table will be rendered here after backend integration. */}
            </div>

          )}

        </section>

      </main>

      {/* Footer */}
      <EmployerFooter />

    </div>
  );
}

export default EmployerJobs;