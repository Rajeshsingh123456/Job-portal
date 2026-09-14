import { Link } from "react-router-dom";
import "./EmployerProfile.css";
import EmployerNavbar from "../components/employer/EmployerNavbar";
import EmployerFooter from "../components/employer/EmployerFooter";

function EmployerProfile() {
  const employer = {
    name: "Nitesh",
    role: "Employer",
    email: "nitesh@gmail.com",
    phone: "Not added",
    company: "HirePulse Company",
    website: "Not added",
    location: "Delhi, India",
    industry: "Technology",
    companySize: "Not added",
  };

  return (
    <div className="employer-profile-page">
      <EmployerNavbar />

      <main>
        {/* PROFILE HEADER */}
        <section className="profile-header">
          <div className="profile-header-main">
            <div className="profile-avatar-large">N</div>

            <div className="profile-heading-content">
              <span className="profile-breadcrumb">
                Employer / Profile
              </span>

              <h1>{employer.name}</h1>

              <p>
                {employer.role} at {employer.company}
              </p>

              <div className="profile-header-meta">
                <span>📍 {employer.location}</span>
                <span>✉ {employer.email}</span>
              </div>
            </div>
          </div>

          <Link
            to="/employer-profile/edit"
            className="edit-profile-button"
          >
            Edit Profile
          </Link>
        </section>

        {/* PROFILE CONTENT */}
        <section className="profile-layout">

          {/* LEFT COLUMN */}
          <div className="profile-main-column">

            {/* PERSONAL INFORMATION */}
            <div className="profile-card">
              <div className="profile-card-heading">
                <div>
                  <span>ACCOUNT</span>
                  <h2>Personal Information</h2>
                </div>

                <span className="profile-card-number">01</span>
              </div>

              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span>Full Name</span>
                  <strong>{employer.name}</strong>
                </div>

                <div className="profile-info-item">
                  <span>Role</span>
                  <strong>{employer.role}</strong>
                </div>

                <div className="profile-info-item">
                  <span>Email Address</span>
                  <strong>{employer.email}</strong>
                </div>

                <div className="profile-info-item">
                  <span>Phone Number</span>
                  <strong>{employer.phone}</strong>
                </div>
              </div>
            </div>

            {/* COMPANY INFORMATION */}
            <div className="profile-card">
              <div className="profile-card-heading">
                <div>
                  <span>COMPANY</span>
                  <h2>Company Information</h2>
                </div>

                <span className="profile-card-number">02</span>
              </div>

              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span>Company Name</span>
                  <strong>{employer.company}</strong>
                </div>

                <div className="profile-info-item">
                  <span>Industry</span>
                  <strong>{employer.industry}</strong>
                </div>

                <div className="profile-info-item">
                  <span>Company Size</span>
                  <strong>{employer.companySize}</strong>
                </div>

                <div className="profile-info-item">
                  <span>Location</span>
                  <strong>{employer.location}</strong>
                </div>

                <div className="profile-info-item profile-info-full">
                  <span>Company Website</span>
                  <strong>{employer.website}</strong>
                </div>
              </div>
            </div>

            {/* HIRING PREFERENCES */}
            <div className="profile-card">
              <div className="profile-card-heading">
                <div>
                  <span>RECRUITMENT</span>
                  <h2>Hiring Preferences</h2>
                </div>

                <span className="profile-card-number">03</span>
              </div>

              <div className="preference-grid">
                <div className="preference-item">
                  <div className="preference-icon">+</div>
                  <div>
                    <h3>Job Posting</h3>
                    <p>
                      Create and manage job openings for your company.
                    </p>
                  </div>
                </div>

                <div className="preference-item">
                  <div className="preference-icon">+</div>
                  <div>
                    <h3>Candidate Management</h3>
                    <p>
                      Review applicants and manage your hiring pipeline.
                    </p>
                  </div>
                </div>

                <div className="preference-item">
                  <div className="preference-icon">+</div>
                  <div>
                    <h3>Interview Management</h3>
                    <p>
                      Schedule and organize candidate interviews.
                    </p>
                  </div>
                </div>

                <div className="preference-item">
                  <div className="preference-icon">+</div>
                  <div>
                    <h3>Recruitment Workspace</h3>
                    <p>
                      Manage your complete hiring workflow in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="profile-sidebar">

            {/* PROFILE COMPLETION */}
            <div className="profile-side-card completion-card">
              <span className="side-card-label">PROFILE STATUS</span>

              <div className="completion-circle">
                <strong>60%</strong>
              </div>

              <h3>Complete your profile</h3>

              <p>
                Add your company and contact details to build a stronger
                employer profile.
              </p>

              <Link to="/employer-profile/edit">
                Complete Profile →
              </Link>
            </div>

            {/* QUICK LINKS */}
            <div className="profile-side-card">
              <span className="side-card-label">QUICK ACCESS</span>

              <h3>Recruitment Tools</h3>

              <div className="profile-quick-links">
                <Link to="/post-job">
                  <span>+</span>
                  <div>
                    <strong>Post a Job</strong>
                    <small>Create a new opening</small>
                  </div>
                </Link>

                <Link to="/employer-jobs">
                  <span>→</span>
                  <div>
                    <strong>My Jobs</strong>
                    <small>Manage job postings</small>
                  </div>
                </Link>

                <Link to="/employer-applicants">
                  <span>◉</span>
                  <div>
                    <strong>Applicants</strong>
                    <small>Review candidates</small>
                  </div>
                </Link>

                <Link to="/employer-interviews">
                  <span>□</span>
                  <div>
                    <strong>Interviews</strong>
                    <small>Manage interviews</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* ACCOUNT */}
            <div className="profile-side-card account-card">
              <span className="side-card-label">ACCOUNT</span>

              <h3>Account Settings</h3>

              <p>
                Manage your profile information and account preferences.
              </p>

              <Link to="/employer-profile/edit">
                Edit Account →
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <EmployerFooter />
    </div>
  );
}

export default EmployerProfile;