import { Link } from "react-router-dom";
import "./EmployerInterviews.css";
import EmployerNavbar from "../components/employer/EmployerNavbar";
import EmployerFooter from "../components/employer/EmployerFooter";

function EmployerInterviews() {
  const interviews = [];

  const interviewStats = [
    {
      label: "Upcoming",
      value: "0",
      note: "No upcoming interviews",
    },
    {
      label: "Today",
      value: "0",
      note: "No interviews today",
    },
    {
      label: "Completed",
      value: "0",
      note: "No completed interviews",
    },
    {
      label: "Rescheduled",
      value: "0",
      note: "No rescheduled interviews",
    },
  ];

  return (
    <div className="employer-interviews-page">
      <EmployerNavbar />

      <main>
        {/* PAGE HEADER */}
        <section className="interviews-header">
          <div className="interviews-header-content">
            <span className="interviews-breadcrumb">
              Employer / Interviews
            </span>

            <h1>Interview Management</h1>

            <p>
              Schedule, organize, and track candidate interviews throughout
              your hiring process.
            </p>

            <div className="interviews-header-actions">
              <button type="button" className="schedule-interview-button">
                + Schedule Interview
              </button>
            </div>
          </div>

          <div className="interview-calendar-mark">
            <span>INTERVIEW</span>
            <strong>01</strong>
            <div className="calendar-line"></div>
            <span>SCHEDULE</span>
          </div>
        </section>

        {/* INTERVIEW STATS */}
        <section className="interview-stats">
          {interviewStats.map((stat) => (
            <div className="interview-stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <small>{stat.note}</small>
            </div>
          ))}
        </section>

        {/* INTERVIEW WORKSPACE */}
        <section className="interview-workspace">
          <div className="interview-workspace-header">
            <div>
              <h2>Interview Schedule</h2>
              <p>
                Keep track of upcoming and completed candidate interviews.
              </p>
            </div>

            <div className="interview-filters">
              <select defaultValue="All Interviews">
                <option>All Interviews</option>
                <option>Upcoming</option>
                <option>Today</option>
                <option>Completed</option>
                <option>Cancelled</option>
                <option>Rescheduled</option>
              </select>

              <select defaultValue="All Types">
                <option>All Types</option>
                <option>Online</option>
                <option>In-person</option>
              </select>
            </div>
          </div>

          {interviews.length === 0 ? (
            <div className="interviews-empty-state">
              <div className="empty-calendar-icon">
                <span>28</span>
              </div>

              <div className="empty-interview-content">
                <span className="empty-label">YOUR INTERVIEW CALENDAR</span>

                <h3>No interviews scheduled</h3>

                <p>
                  Scheduled candidate interviews will appear here with their
                  date, time, job position, interview type, and meeting details.
                </p>

                <button
                  type="button"
                  className="empty-schedule-button"
                >
                  + Schedule Your First Interview
                </button>
              </div>
            </div>
          ) : (
            <div className="interview-list">
              {interviews.map((interview) => (
                <div className="interview-item" key={interview.id}>
                  <div className="interview-date">
                    <span>{interview.day}</span>
                    <strong>{interview.date}</strong>
                  </div>

                  <div className="interview-details">
                    <span className="interview-status">
                      {interview.status}
                    </span>

                    <h3>{interview.candidate}</h3>

                    <p>{interview.job}</p>

                    <div className="interview-meta">
                      <span>🕐 {interview.time}</span>
                      <span>💻 {interview.type}</span>
                    </div>
                  </div>

                  <div className="interview-actions">
                    <button type="button">View</button>
                    <button type="button">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

       
{/* INTERVIEW WORKFLOW */}
<section className="interview-workflow">
  <div className="workflow-heading">
    <div>
      <span className="workflow-eyebrow">RECRUITMENT WORKFLOW</span>
      <h2>A simple path from interview to hire</h2>
      <p>
        Keep every interview structured, track candidate decisions,
        and move the right people forward.
      </p>
    </div>

    <div className="workflow-heading-mark">
      <span>03</span>
      <small>STAGES</small>
    </div>
  </div>

  <div className="workflow-steps">

    <div className="workflow-step">
      <div className="workflow-step-number">01</div>

      <div className="workflow-step-content">
        <span className="workflow-step-label">PLAN</span>
        <h3>Schedule</h3>
        <p>
          Select a candidate, choose the role, set the date and time,
          and decide the interview format.
        </p>

        <div className="workflow-tags">
          <span>Candidate</span>
          <span>Date & Time</span>
          <span>Format</span>
        </div>
      </div>
    </div>

    <div className="workflow-divider">
      <span>→</span>
    </div>

    <div className="workflow-step">
      <div className="workflow-step-number">02</div>

      <div className="workflow-step-content">
        <span className="workflow-step-label">CONDUCT</span>
        <h3>Interview</h3>
        <p>
          Add meeting details, interviewer notes, and evaluation
          information during the candidate interview.
        </p>

        <div className="workflow-tags">
          <span>Meeting Link</span>
          <span>Notes</span>
          <span>Evaluation</span>
        </div>
      </div>
    </div>

    <div className="workflow-divider">
      <span>→</span>
    </div>

    <div className="workflow-step">
      <div className="workflow-step-number">03</div>

      <div className="workflow-step-content">
        <span className="workflow-step-label">DECIDE</span>
        <h3>Evaluate</h3>
        <p>
          Record the interview outcome and move the candidate to
          the next stage of your hiring pipeline.
        </p>

        <div className="workflow-tags">
          <span>Feedback</span>
          <span>Decision</span>
          <span>Next Stage</span>
        </div>
      </div>
    </div>

  </div>
</section>


        {/* QUICK ACTIONS */}
        <section className="interview-quick-actions">
          <div>
            <span>READY TO HIRE?</span>
            <h2>Manage your next candidate interview.</h2>
            <p>
              Create a structured interview schedule and keep your hiring
              process moving.
            </p>
          </div>

          <div className="quick-action-links">
            <Link to="/employer-applicants">
              View Applicants
            </Link>

            <Link to="/employer-jobs">
              View My Jobs
            </Link>
          </div>
        </section>
      </main>

      <EmployerFooter />
    </div>
  );
}

export default EmployerInterviews;
