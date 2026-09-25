import { Link } from "react-router-dom";
import { useState } from "react";
import "./SeekerProfileEdit.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function SeekerProfileEdit() {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addSkill();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="seeker-profile-edit-page">
      <SeekerNavbar />

      <section className="seeker-profile-edit-hero">
        <div className="seeker-profile-edit-hero-content">
          <span>EDIT PROFILE</span>
          <h1>Build a profile that represents you.</h1>
          <p>
            Add your professional information, skills, education, experience,
            and resume to create a complete career profile.
          </p>
        </div>

        <div className="seeker-profile-edit-progress-card">
          <div className="seeker-edit-progress-header">
            <span>PROFILE COMPLETION</span>
            <strong>0%</strong>
          </div>

          <div className="seeker-edit-progress-bar">
            <span></span>
          </div>

          <p>
            Complete your profile to make it easier for employers to
            understand your background.
          </p>
        </div>
      </section>

      <main className="seeker-profile-edit-main">
        <div className="seeker-profile-edit-top">
          <div>
            <span>PROFILE SETTINGS</span>
            <h2>Professional Information</h2>
            <p>
              Keep your information accurate and up to date for future job
              applications.
            </p>
          </div>

          <Link to="/seeker-profile" className="seeker-profile-back-link">
            ← Back to Profile
          </Link>
        </div>

        <form
          className="seeker-profile-edit-form"
          onSubmit={handleSubmit}
        >
          <section className="seeker-edit-section">
            <div className="seeker-edit-section-heading">
              <div className="seeker-edit-section-number">01</div>
              <div>
                <span>PERSONAL INFORMATION</span>
                <h3>Tell employers about yourself</h3>
                <p>
                  Add the basic information employers may need when reviewing
                  your profile.
                </p>
              </div>
            </div>

            <div className="seeker-edit-form-grid">
              <div className="seeker-edit-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="City, State"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="headline">Professional Headline</label>
                <input
                  id="headline"
                  type="text"
                  placeholder="e.g. Frontend Developer | React Developer"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="website">Portfolio / Website</label>
                <input
                  id="website"
                  type="url"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </section>

          <section className="seeker-edit-section">
            <div className="seeker-edit-section-heading">
              <div className="seeker-edit-section-number">02</div>
              <div>
                <span>PROFESSIONAL SUMMARY</span>
                <h3>Introduce yourself</h3>
                <p>
                  Write a short summary that explains your background,
                  strengths, and career direction.
                </p>
              </div>
            </div>

            <div className="seeker-edit-field">
              <label htmlFor="summary">About You</label>
              <textarea
                id="summary"
                rows="7"
                placeholder="Write a short professional summary..."
              ></textarea>

              <small>
                Keep your summary clear, professional, and focused on your
                career goals.
              </small>
            </div>
          </section>

          <section className="seeker-edit-section">
            <div className="seeker-edit-section-heading">
              <div className="seeker-edit-section-number">03</div>
              <div>
                <span>SKILLS & EXPERTISE</span>
                <h3>Showcase your skills</h3>
                <p>
                  Add technical and professional skills that represent your
                  strengths.
                </p>
              </div>
            </div>

            <div className="seeker-edit-field">
              <label htmlFor="skills">Skills</label>

              <div className="seeker-skill-input-wrapper">
                <input
                  id="skills"
                  type="text"
                  value={skillInput}
                  onChange={(event) => setSkillInput(event.target.value)}
                  onKeyDown={handleSkillKeyDown}
                  placeholder="Type a skill and press Enter"
                />

                <button
                  type="button"
                  onClick={addSkill}
                  className="seeker-add-skill-btn"
                >
                  Add Skill
                </button>
              </div>

              {skills.length > 0 && (
                <div className="seeker-skills-list">
                  {skills.map((skill) => (
                    <span className="seeker-skill-tag" key={skill}>
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        aria-label={`Remove ${skill}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {skills.length === 0 && (
                <small>
                  Add skills such as JavaScript, React, Node.js, SQL,
                  communication, or problem solving.
                </small>
              )}
            </div>
          </section>

          <section className="seeker-edit-section">
            <div className="seeker-edit-section-heading">
              <div className="seeker-edit-section-number">04</div>
              <div>
                <span>EDUCATION</span>
                <h3>Add your academic background</h3>
                <p>
                  Include your degree, institution, field of study, and
                  academic timeline.
                </p>
              </div>
            </div>

            <div className="seeker-edit-form-grid">
              <div className="seeker-edit-field">
                <label htmlFor="degree">Degree / Qualification</label>
                <input
                  id="degree"
                  type="text"
                  placeholder="e.g. BCA, B.Tech, MCA"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="institution">Institution</label>
                <input
                  id="institution"
                  type="text"
                  placeholder="University or college name"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="fieldOfStudy">Field of Study</label>
                <input
                  id="fieldOfStudy"
                  type="text"
                  placeholder="e.g. Computer Science"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="educationLocation">Location</label>
                <input
                  id="educationLocation"
                  type="text"
                  placeholder="City, State"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="startYear">Start Year</label>
                <input
                  id="startYear"
                  type="number"
                  placeholder="2024"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="endYear">End Year</label>
                <input
                  id="endYear"
                  type="number"
                  placeholder="2027"
                />
              </div>
            </div>
          </section>

          <section className="seeker-edit-section">
            <div className="seeker-edit-section-heading">
              <div className="seeker-edit-section-number">05</div>
              <div>
                <span>WORK EXPERIENCE</span>
                <h3>Highlight your experience</h3>
                <p>
                  Add internships, jobs, freelance work, or other relevant
                  professional experience.
                </p>
              </div>
            </div>

            <div className="seeker-edit-form-grid">
              <div className="seeker-edit-field">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  id="jobTitle"
                  type="text"
                  placeholder="e.g. Frontend Developer Intern"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company name"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="experienceLocation">Location</label>
                <input
                  id="experienceLocation"
                  type="text"
                  placeholder="City, State or Remote"
                />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="employmentType">Employment Type</label>
                <select id="employmentType" defaultValue="">
                  <option value="" disabled>
                    Select employment type
                  </option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                  <option value="freelance">Freelance</option>
                  <option value="contract">Contract</option>
                </select>
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="experienceStart">Start Date</label>
                <input id="experienceStart" type="month" />
              </div>

              <div className="seeker-edit-field">
                <label htmlFor="experienceEnd">End Date</label>
                <input id="experienceEnd" type="month" />
              </div>

              <div className="seeker-edit-field seeker-edit-full-width">
                <label htmlFor="experienceDescription">
                  Experience Description
                </label>
                <textarea
                  id="experienceDescription"
                  rows="6"
                  placeholder="Describe your responsibilities, achievements, and contributions..."
                ></textarea>
              </div>
            </div>
          </section>

          <section className="seeker-edit-section">
            <div className="seeker-edit-section-heading">
              <div className="seeker-edit-section-number">06</div>
              <div>
                <span>RESUME</span>
                <h3>Upload your resume</h3>
                <p>
                  Keep your latest resume available for job applications.
                </p>
              </div>
            </div>

            <div className="seeker-resume-upload">
              <div className="seeker-resume-upload-icon">↑</div>

              <div>
                <h4>Upload your resume</h4>
                <p>
                  PDF, DOC, or DOCX files are supported. Maximum file size
                  should be kept reasonable for a quick upload.
                </p>
              </div>

              <label
                htmlFor="resume"
                className="seeker-resume-upload-btn"
              >
                Choose File
              </label>

              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
              />
            </div>
          </section>

          <div className="seeker-edit-form-actions">
            <Link
              to="/seeker-profile"
              className="seeker-edit-cancel-btn"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="seeker-edit-save-btn"
            >
              Save Profile
            </button>
          </div>
        </form>
      </main>

      <SeekerFooter />
    </div>
  );
}

export default SeekerProfileEdit;
