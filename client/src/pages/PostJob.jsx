import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hirepulse-logo.png";
import "./PostJob.css";

function PostJob() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    location: "",
    experience: "",
    description: "",
    requirements: "",
    responsibilities: "",
    perks: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Job Data:", formData);
    alert("Job details saved successfully!");
  };

  const handleDraft = () => {
    console.log("Draft Job:", formData);
    alert("Job saved as draft!");
  };

  return (
    <div className="post-job-page">

      {/* NAVBAR */}
      <nav className="post-job-navbar">
        <div className="post-job-logo">
          <Link to="/employer-dashboard">
            <img src={logo} alt="HirePulse" />
          </Link>
        </div>

        <div className="post-job-nav-links">
          <Link to="/employer-dashboard">Dashboard</Link>
          <Link to="/employer-jobs">My Jobs</Link>
          <Link to="/employer-applicants">Applicants</Link>
          <Link to="/employer-interviews">Interviews</Link>
        </div>

        <div className="post-job-profile">
          <div className="post-job-notification">🔔</div>

          <div className="post-job-user">
            <div className="post-job-avatar">N</div>
            <div>
              <strong>Nitesh</strong>
              <span>Employer</span>
            </div>
            <span className="profile-arrow">▼</span>
          </div>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="post-job-header">
        <div>
          <p className="post-job-breadcrumb">
            Dashboard / Post a Job
          </p>

          <h1>Post a New Job</h1>

          <p>
            Create a detailed job posting and connect with the right candidates.
          </p>
        </div>
      </section>

      {/* FORM */}
      <main className="post-job-main">

        <form onSubmit={handleSubmit}>

          {/* BASIC INFORMATION */}
          <section className="job-form-section">
            <div className="section-heading">
              <div className="section-icon">💼</div>
              <div>
                <h2>Basic Job Information</h2>
                <p>Start with the key details about this position.</p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group full-width">
                <label>
                  Job Title <span>*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Frontend Developer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Department <span>*</span>
                </label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Product">Product</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Job Type <span>*</span>
                </label>

                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select job type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Location <span>*</span>
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Delhi, India"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Experience Required <span>*</span>
                </label>

                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-1 Years">0-1 Years</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="3-5 Years">3-5 Years</option>
                  <option value="5-8 Years">5-8 Years</option>
                  <option value="8+ Years">8+ Years</option>
                </select>
              </div>

            </div>
          </section>

          {/* SALARY */}
          <section className="job-form-section">
            <div className="section-heading">
              <div className="section-icon">💰</div>
              <div>
                <h2>Salary Range</h2>
                <p>Help candidates understand the expected compensation.</p>
              </div>
            </div>

            <div className="salary-grid">

              <div className="form-group">
                <label>Minimum Salary</label>

                <div className="input-with-prefix">
                  <span>₹</span>
                  <input
                    type="number"
                    name="salaryMin"
                    placeholder="e.g. 30000"
                    value={formData.salaryMin}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="salary-divider">to</div>

              <div className="form-group">
                <label>Maximum Salary</label>

                <div className="input-with-prefix">
                  <span>₹</span>
                  <input
                    type="number"
                    name="salaryMax"
                    placeholder="e.g. 60000"
                    value={formData.salaryMax}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="salary-period">
                <span>per month</span>
              </div>

            </div>
          </section>

          {/* JOB DESCRIPTION */}
          <section className="job-form-section">
            <div className="section-heading">
              <div className="section-icon">📝</div>
              <div>
                <h2>Job Description</h2>
                <p>Describe the role and what the selected candidate will do.</p>
              </div>
            </div>

            <div className="form-group">
              <label>
                Description <span>*</span>
              </label>

              <textarea
                name="description"
                rows="7"
                placeholder="Describe the role, team, work environment and what makes this opportunity valuable..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Responsibilities <span>*</span>
              </label>

              <textarea
                name="responsibilities"
                rows="7"
                placeholder="List the main responsibilities of this role..."
                value={formData.responsibilities}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* REQUIREMENTS */}
          <section className="job-form-section">
            <div className="section-heading">
              <div className="section-icon">🎯</div>
              <div>
                <h2>Requirements</h2>
                <p>Define the qualifications and skills you're looking for.</p>
              </div>
            </div>

            <div className="form-group">
              <label>
                Requirements <span>*</span>
              </label>

              <textarea
                name="requirements"
                rows="7"
                placeholder="Add education, technical knowledge, experience and other requirements..."
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Required Skills</label>

              <input
                type="text"
                name="skills"
                placeholder="e.g. React.js, JavaScript, Node.js, MySQL"
                value={formData.skills}
                onChange={handleChange}
              />

              <small>
                Separate multiple skills using commas.
              </small>
            </div>
          </section>

          {/* PERKS */}
          <section className="job-form-section">
            <div className="section-heading">
              <div className="section-icon">🎁</div>
              <div>
                <h2>Perks & Benefits</h2>
                <p>Highlight additional benefits offered with the position.</p>
              </div>
            </div>

            <div className="form-group">
              <label>Perks & Benefits</label>

              <textarea
                name="perks"
                rows="5"
                placeholder="e.g. Flexible work hours, health insurance, learning opportunities..."
                value={formData.perks}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* ACTIONS */}
          <section className="job-form-actions">

            <button
              type="button"
              className="draft-button"
              onClick={handleDraft}
            >
              Save as Draft
            </button>

            <div className="publish-actions">
              <Link
                to="/employer-dashboard"
                className="cancel-button"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="publish-button"
              >
                Publish Job
              </button>
            </div>

          </section>

        </form>

      </main>

      {/* FOOTER */}
      <footer className="post-job-footer">
        <div>
          <img src={logo} alt="HirePulse" />
          <p>Connecting great talent with great opportunities.</p>
        </div>

        <p>© 2026 HirePulse. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default PostJob;