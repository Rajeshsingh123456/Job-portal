import { Link } from "react-router-dom";
import "./About.css";
import EmployerNavbar from "../components/employer/EmployerNavbar";
import EmployerFooter from "../components/employer/EmployerFooter";

function About() {
  return (
    <div className="about-page">
      <EmployerNavbar />

      <main>
        {/* =========================
            HERO
        ========================= */}

        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-breadcrumb">
              Employer / About HirePulse
            </span>

            <h1>
              Smarter hiring,
              <br />
              organized in one workspace.
            </h1>

            <p>
              HirePulse helps recruiters manage job postings, review
              applicants, organize candidate stages, schedule interviews,
              and keep the hiring process structured from one workspace.
            </p>

            <div className="about-hero-actions">
              <Link to="/post-job" className="about-primary-button">
                Post a Job Now
              </Link>

              <Link
                to="/employer-dashboard"
                className="about-secondary-button"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 01
            RECRUITMENT WORKFLOW
        ========================= */}

        <section className="about-workflow">
          <div className="about-section-heading">
            <div className="about-section-number">01</div>

            <div>
              <span>RECRUITMENT WORKFLOW</span>

              <h2>How HirePulse works</h2>

              <p>
                A structured workflow that helps recruiters move from
                creating a vacancy to making the right hiring decision.
              </p>
            </div>
          </div>

          <div className="about-workflow-grid">
            {/* CARD 01 */}

            <div className="about-workflow-card">
              <div className="workflow-card-top">
                <span>01</span>
                <div className="workflow-icon">+</div>
              </div>

              <h3>Post a Job</h3>

              <p>
                Create a job opening with the role, department, job type,
                salary range, location, experience, skills, and requirements.
              </p>

              <Link to="/post-job" className="workflow-link">
                Create Job →
              </Link>
            </div>

            {/* CARD 02 */}

            <div className="about-workflow-card">
              <div className="workflow-card-top">
                <span>02</span>
                <div className="workflow-icon">◎</div>
              </div>

              <h3>Review Applicants</h3>

              <p>
                Review candidates and organize applications through the
                different stages of your recruitment pipeline.
              </p>

              <Link to="/employer-applicants" className="workflow-link">
                View Applicants →
              </Link>
            </div>

            {/* CARD 03 */}

            <div className="about-workflow-card">
              <div className="workflow-card-top">
                <span>03</span>
                <div className="workflow-icon">□</div>
              </div>

              <h3>Schedule Interviews</h3>

              <p>
                Plan candidate interviews with the required date, time,
                meeting details, and interview status.
              </p>

              <Link to="/employer-interviews" className="workflow-link">
                Manage Interviews →
              </Link>
            </div>

            {/* CARD 04 */}

            <div className="about-workflow-card">
              <div className="workflow-card-top">
                <span>04</span>
                <div className="workflow-icon">✓</div>
              </div>

              <h3>Make Hiring Decisions</h3>

              <p>
                Track candidate progress through the pipeline and move
                suitable applicants toward offers and hiring decisions.
              </p>

              <Link to="/employer-applicants" className="workflow-link">
                View Candidates →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 02
            CORE CAPABILITIES
        ========================= */}

        <section className="about-capabilities">
          <div className="about-section-heading">
            <div className="about-section-number">02</div>

            <div>
              <span>CORE PLATFORM CAPABILITIES</span>

              <h2>Essential tools for modern recruiters.</h2>

              <p>
                The main recruitment activities are organized into focused
                tools so recruiters can manage their hiring workflow more
                efficiently.
              </p>
            </div>
          </div>

          <div className="capabilities-grid">
            {/* CAPABILITY 01 */}

            <div className="capability-card">
              <div className="capability-icon">+</div>

              <div>
                <h3>Job Management Hub</h3>

                <p>
                  Create, edit, pause, and manage job openings while keeping
                  important posting details organized.
                </p>
              </div>
            </div>

            {/* CAPABILITY 02 */}

            <div className="capability-card">
              <div className="capability-icon">◎</div>

              <div>
                <h3>ATS Candidate Pipeline</h3>

                <p>
                  Organize applicants through recruitment stages such as
                  Applied, Screening, Technical Interview, Offered, and Hired.
                </p>
              </div>
            </div>

            {/* CAPABILITY 03 */}

            <div className="capability-card">
              <div className="capability-icon">□</div>

              <div>
                <h3>Interview Coordination</h3>

                <p>
                  Schedule and manage candidate interviews while keeping
                  interview details and candidate progress organized.
                </p>
              </div>
            </div>

            {/* CAPABILITY 04 */}

            <div className="capability-card">
              <div className="capability-icon">◈</div>

              <div>
                <h3>Recruitment Overview</h3>

                <p>
                  Get a clear overview of jobs, applicants, interviews, and
                  other important recruitment activities from the dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 03
            SUPPORT
        ========================= */}

        <section className="about-support">
          <div className="about-support-header">
            <div className="about-section-number">03</div>

            <div>
              <span>SUPPORT & RESOURCES</span>

              <h2>Need help or support?</h2>

              <p>
                Quick guidance for common recruiter actions inside HirePulse.
              </p>
            </div>
          </div>

          <div className="support-grid">
            {/* FAQ 01 */}

            <div className="support-card">
              <span className="support-question">01</span>

              <h3>How do I manage candidate stages?</h3>

              <p>
                Open the Applicants page to review candidates and update
                their recruitment stage as they progress.
              </p>

              <Link to="/employer-applicants">
                Go to Applicants →
              </Link>
            </div>

            {/* FAQ 02 */}

            <div className="support-card">
              <span className="support-question">02</span>

              <h3>Where do I update company details?</h3>

              <p>
                Open your recruiter profile and use Edit Profile to update
                your personal and company information.
              </p>

              <Link to="/employer-profile/edit">
                Edit Profile →
              </Link>
            </div>

            {/* FAQ 03 */}

            <div className="support-card">
              <span className="support-question">03</span>

              <h3>Need technical assistance?</h3>

              <p>
                For project-related support, contact the HirePulse platform
                administrator for assistance.
              </p>

              <a href="mailto:support@hirepulse.com">
                Contact Support →
              </a>
            </div>
          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================= */}

        <section className="about-closing">
          <div className="about-closing-content">
            <span>HIREPULSE WORKSPACE</span>

            <h2>
              Ready to start
              <br />
              hiring?
            </h2>

            <p>
              Create your first job opening and start managing your
              recruitment workflow through HirePulse.
            </p>

            <div className="about-closing-actions">
              <Link to="/post-job" className="about-primary-button">
                Post Your First Job
              </Link>

              <Link
                to="/employer-dashboard"
                className="about-secondary-button"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </section>
      </main>

      <EmployerFooter />
    </div>
  );
}

export default About;