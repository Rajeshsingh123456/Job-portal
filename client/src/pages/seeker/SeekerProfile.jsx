import { Link } from "react-router-dom";
import "./SeekerProfile.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function SeekerProfile() {
  return (
    <div className="seeker-profile-page">
      <SeekerNavbar />

      <section className="seeker-profile-hero">
        <div className="seeker-profile-hero-content">
          <span className="seeker-profile-label">MY PROFILE</span>
          <h1>Build your professional profile.</h1>
          <p>
            Complete your profile to help employers understand your skills,
            experience, education, and career goals.
          </p>

          <div className="seeker-profile-hero-actions">
            <Link to="/seeker-profile/edit" className="seeker-profile-primary-btn">
              Edit Profile →
            </Link>
            <Link to="/jobs" className="seeker-profile-secondary-btn">
              Explore Jobs
            </Link>
          </div>
        </div>

        <div className="seeker-profile-hero-card">
          <div className="seeker-profile-avatar-large">?</div>
          <h3>Your Profile</h3>
          <p>Complete your details to get started.</p>
          <div className="seeker-profile-progress">
            <div className="seeker-profile-progress-top">
              <span>Profile completion</span>
              <strong>0%</strong>
            </div>
            <div className="seeker-profile-progress-bar">
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <main className="seeker-profile-main">
        <div className="seeker-profile-section-heading">
          <span>PROFILE OVERVIEW</span>
          <h2>Your professional profile</h2>
          <p>
            Keep your information updated so employers can quickly understand
            your professional background.
          </p>
        </div>

        <section className="seeker-profile-overview">
          <div className="seeker-profile-card seeker-profile-about-card">
            <div className="seeker-profile-card-heading">
              <div>
                <span>ABOUT</span>
                <h3>Professional Summary</h3>
              </div>
              <Link to="/seeker-profile/edit">Edit</Link>
            </div>

            <div className="seeker-profile-empty-content">
              <div className="seeker-profile-empty-icon">+</div>
              <h4>Add your professional summary</h4>
              <p>
                Introduce yourself to employers with a short summary of your
                background, interests, and career goals.
              </p>
              <Link to="/seeker-profile/edit">Add Summary →</Link>
            </div>
          </div>

          <div className="seeker-profile-card seeker-profile-contact-card">
            <div className="seeker-profile-card-heading">
              <div>
                <span>CONTACT</span>
                <h3>Contact Information</h3>
              </div>
              <Link to="/seeker-profile/edit">Edit</Link>
            </div>

            <div className="seeker-profile-contact-list">
              <div className="seeker-profile-contact-item">
                <div className="seeker-profile-contact-icon">@</div>
                <div>
                  <span>Email</span>
                  <strong>Not added yet</strong>
                </div>
              </div>

              <div className="seeker-profile-contact-item">
                <div className="seeker-profile-contact-icon">☎</div>
                <div>
                  <span>Phone</span>
                  <strong>Not added yet</strong>
                </div>
              </div>

              <div className="seeker-profile-contact-item">
                <div className="seeker-profile-contact-icon">⌖</div>
                <div>
                  <span>Location</span>
                  <strong>Not added yet</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="seeker-profile-grid">
          <div className="seeker-profile-card">
            <div className="seeker-profile-card-heading">
              <div>
                <span>SKILLS</span>
                <h3>Skills & Expertise</h3>
              </div>
              <Link to="/seeker-profile/edit">Edit</Link>
            </div>

            <div className="seeker-profile-empty-small">
              <div className="seeker-profile-empty-icon">+</div>
              <h4>Add your skills</h4>
              <p>
                Add technical and professional skills that represent your
                strengths.
              </p>
              <Link to="/seeker-profile/edit">Add Skills →</Link>
            </div>
          </div>

          <div className="seeker-profile-card">
            <div className="seeker-profile-card-heading">
              <div>
                <span>EDUCATION</span>
                <h3>Education</h3>
              </div>
              <Link to="/seeker-profile/edit">Edit</Link>
            </div>

            <div className="seeker-profile-empty-small">
              <div className="seeker-profile-empty-icon">+</div>
              <h4>Add your education</h4>
              <p>
                Add your degree, institution, field of study, and academic
                timeline.
              </p>
              <Link to="/seeker-profile/edit">Add Education →</Link>
            </div>
          </div>

          <div className="seeker-profile-card">
            <div className="seeker-profile-card-heading">
              <div>
                <span>EXPERIENCE</span>
                <h3>Work Experience</h3>
              </div>
              <Link to="/seeker-profile/edit">Edit</Link>
            </div>

            <div className="seeker-profile-empty-small">
              <div className="seeker-profile-empty-icon">+</div>
              <h4>Add your experience</h4>
              <p>
                Showcase internships, jobs, projects, or other relevant
                professional experience.
              </p>
              <Link to="/seeker-profile/edit">Add Experience →</Link>
            </div>
          </div>

          <div className="seeker-profile-card">
            <div className="seeker-profile-card-heading">
              <div>
                <span>RESUME</span>
                <h3>Your Resume</h3>
              </div>
              <Link to="/seeker-profile/edit">Manage</Link>
            </div>

            <div className="seeker-profile-empty-small">
              <div className="seeker-profile-empty-icon">↑</div>
              <h4>No resume uploaded</h4>
              <p>
                Upload your latest resume so you can use it when applying for
                jobs.
              </p>
              <Link to="/seeker-profile/edit">Upload Resume →</Link>
            </div>
          </div>
        </section>

        <section className="seeker-profile-completion">
          <div>
            <span>GET STARTED</span>
            <h2>Complete your profile</h2>
            <p>
              A complete profile gives employers a clearer picture of your
              professional background and helps you prepare for applications.
            </p>
          </div>

          <Link to="/seeker-profile/edit">
            Complete Profile →
          </Link>
        </section>
      </main>

      <SeekerFooter />
    </div>
  );
}

export default SeekerProfile;
