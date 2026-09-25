import { Link } from "react-router-dom";
import "./MyApplications.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function MyApplications() {
  return (
    <div className="my-applications-page">
      <SeekerNavbar />

      {/* Hero */}
      <section className="my-applications-hero">
        <div className="my-applications-hero-content">
          <span>APPLICATION TRACKER</span>

          <h1>Keep track of your job applications.</h1>

          <p>
            Your applications will appear here once you start applying to
            jobs. Stay organized and follow your progress from one place.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="my-applications-summary">
        <div className="application-summary-card">
          <div className="application-summary-icon">01</div>

          <div>
            <span>Total Applications</span>
            <strong>0</strong>
            <small>No applications yet</small>
          </div>
        </div>

        <div className="application-summary-card">
          <div className="application-summary-icon">02</div>

          <div>
            <span>Under Review</span>
            <strong>0</strong>
            <small>No applications under review</small>
          </div>
        </div>

        <div className="application-summary-card">
          <div className="application-summary-icon">03</div>

          <div>
            <span>Interviews</span>
            <strong>0</strong>
            <small>No interviews scheduled</small>
          </div>
        </div>

        <div className="application-summary-card">
          <div className="application-summary-icon">04</div>

          <div>
            <span>Offers</span>
            <strong>0</strong>
            <small>No offers received</small>
          </div>
        </div>
      </section>

      {/* Empty Applications */}
      <main className="my-applications-main">
        <div className="my-applications-header">
          <div>
            <span>YOUR APPLICATIONS</span>
            <h2>Applications</h2>
            <p>
              Track every opportunity you apply for from one organized space.
            </p>
          </div>
        </div>

        <section className="my-applications-empty">
          <div className="my-applications-empty-icon">
            <span>✓</span>
          </div>

          <span className="my-applications-empty-label">
            NO APPLICATIONS YET
          </span>

          <h3>Your application journey starts here.</h3>

          <p>
            You haven't applied to any jobs yet. Explore available
            opportunities, find a role that matches your skills, and submit
            your first application.
          </p>

          <div className="my-applications-empty-actions">
            <Link to="/jobs" className="my-applications-primary-button">
              Find Jobs →
            </Link>

            <Link
              to="/seeker-profile/edit"
              className="my-applications-secondary-button"
            >
              Complete Profile
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="my-applications-guide">
          <div className="my-applications-guide-heading">
            <span>GET STARTED</span>
            <h2>How your applications work</h2>
            <p>
              A simple process to help you move from discovering a job
              to tracking your application.
            </p>
          </div>

          <div className="my-applications-steps">
            <div className="my-application-step">
              <div className="my-application-step-number">01</div>

              <div>
                <h3>Find a job</h3>
                <p>
                  Browse opportunities and use filters to find roles
                  that match your skills and preferences.
                </p>
              </div>
            </div>

            <div className="my-application-step">
              <div className="my-application-step-number">02</div>

              <div>
                <h3>Apply with your profile</h3>
                <p>
                  Review the job details and submit your application
                  when you're ready to apply.
                </p>
              </div>
            </div>

            <div className="my-application-step">
              <div className="my-application-step-number">03</div>

              <div>
                <h3>Track your progress</h3>
                <p>
                  Once applications are submitted, their status and
                  updates will appear here.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom CTA */}
      <section className="my-applications-cta">
        <div>
          <span>READY TO START?</span>

          <h2>Discover your next opportunity.</h2>

          <p>
            Explore jobs from growing companies and take the first step
            toward your next career opportunity.
          </p>
        </div>

        <Link to="/jobs">Explore Jobs →</Link>
      </section>

      <SeekerFooter />
    </div>
  );
}

export default MyApplications;

