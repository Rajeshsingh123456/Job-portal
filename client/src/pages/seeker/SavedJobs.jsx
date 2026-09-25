import { Link } from "react-router-dom";
import "./SavedJobs.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function SavedJobs() {
  return (
    <div className="saved-jobs-page">
      <SeekerNavbar />

      <section className="saved-jobs-hero">
        <div className="saved-jobs-hero-content">
          <span>SAVED JOBS</span>
          <h1>Keep the opportunities you want close.</h1>
          <p>
            Save interesting jobs while exploring opportunities and come back
            to them whenever you're ready to apply.
          </p>

          <Link to="/jobs" className="saved-jobs-hero-button">
            Find Jobs →
          </Link>
        </div>

        <div className="saved-jobs-hero-card">
          <div className="saved-jobs-bookmark">🔖</div>
          <span>SAVED OPPORTUNITIES</span>
          <strong>0</strong>
          <p>Jobs saved for later</p>
        </div>
      </section>

      <main className="saved-jobs-main">
        <div className="saved-jobs-heading">
          <div>
            <span>YOUR SAVED JOBS</span>
            <h2>Saved Opportunities</h2>
            <p>
              Jobs you save from the job search page will appear here.
            </p>
          </div>

          <Link to="/jobs" className="saved-jobs-heading-button">
            Explore Jobs →
          </Link>
        </div>

        <section className="saved-jobs-empty">
          <div className="saved-jobs-empty-icon">
            🔖
          </div>

          <span className="saved-jobs-empty-label">
            NO SAVED JOBS
          </span>

          <h3>Nothing saved yet.</h3>

          <p>
            When you find a job that interests you, save it and come back
            here later when you're ready to review or apply.
          </p>

          <Link to="/jobs" className="saved-jobs-empty-button">
            Start Exploring Jobs →
          </Link>
        </section>

        <section className="saved-jobs-guide">
          <div className="saved-jobs-guide-heading">
            <span>HOW IT WORKS</span>
            <h2>Save jobs for later</h2>
            <p>
              Keep track of opportunities without having to search for them
              again.
            </p>
          </div>

          <div className="saved-jobs-guide-grid">
            <div className="saved-jobs-guide-card">
              <div className="saved-jobs-guide-number">01</div>
              <h3>Discover</h3>
              <p>
                Browse jobs and use filters to find opportunities that match
                your interests.
              </p>
            </div>

            <div className="saved-jobs-guide-card">
              <div className="saved-jobs-guide-number">02</div>
              <h3>Save</h3>
              <p>
                Save jobs you're interested in so you can review them later.
              </p>
            </div>

            <div className="saved-jobs-guide-card">
              <div className="saved-jobs-guide-number">03</div>
              <h3>Apply</h3>
              <p>
                Return to your saved opportunities and apply when you're
                ready.
              </p>
            </div>
          </div>
        </section>

        <section className="saved-jobs-future">
          <div>
            <span>YOUR SAVED LIST</span>
            <h2>Saved jobs will appear here.</h2>
            <p>
              Once you save a job, you'll be able to review its company,
              location, job type, salary, and application status from this
              space.
            </p>
          </div>

          <div className="saved-jobs-future-preview">
            <div className="saved-preview-top">
              <div className="saved-preview-logo">JP</div>

              <div>
                <strong>Job Preview</strong>
                <span>Saved opportunity</span>
              </div>

              <button type="button" aria-label="Remove saved job">
                ×
              </button>
            </div>

            <div className="saved-preview-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <small>Future saved job card preview</small>
          </div>
        </section>
      </main>

      <section className="saved-jobs-cta">
        <div>
          <span>READY TO EXPLORE?</span>
          <h2>Find your next opportunity.</h2>
          <p>
            Explore jobs, save the ones you like, and return when you're
            ready to take the next step.
          </p>
        </div>

        <Link to="/jobs">Explore Jobs →</Link>
      </section>

      <SeekerFooter />
    </div>
  );
}

export default SavedJobs;
