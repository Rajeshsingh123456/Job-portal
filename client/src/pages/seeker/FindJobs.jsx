import { Link } from "react-router-dom";
import "./FindJobs.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function FindJobs() {
  const jobs = [
    {
      id: 1,
      company: "TechCorp Inc.",
      initials: "TC",
      title: "Senior React Developer",
      location: "Delhi / Gurgaon",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8,00,000 - ₹12,00,000",
      skills: ["React.js", "JavaScript", "Tailwind", "Git"]
    },
    {
      id: 2,
      company: "InnovateX",
      initials: "IX",
      title: "Node.js Backend Engineer",
      location: "Bangalore, IN",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹10,00,000 - ₹15,00,000",
      skills: ["Node.js", "Express", "MySQL", "REST API"]
    },
    {
      id: 3,
      company: "CodeWave Solutions",
      initials: "CW",
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹5,00,000 - ₹8,00,000",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      id: 4,
      company: "Nexora Technologies",
      initials: "NT",
      title: "Full Stack Developer",
      location: "Noida, IN",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹7,00,000 - ₹11,00,000",
      skills: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 5,
      company: "PixelCraft Studio",
      initials: "PC",
      title: "UI Developer",
      location: "Delhi, IN",
      type: "Part-time",
      experience: "0-2 years",
      salary: "₹3,50,000 - ₹6,00,000",
      skills: ["HTML", "CSS", "JavaScript", "Figma"]
    },
    {
      id: 6,
      company: "CloudNova",
      initials: "CN",
      title: "Junior Backend Developer",
      location: "Remote",
      type: "Full-time",
      experience: "0-1 years",
      salary: "₹4,50,000 - ₹7,00,000",
      skills: ["Node.js", "SQL", "Express", "API"]
    }
  ];

  return (
    <div className="find-jobs-page">

      {/* Navbar */}
      <SeekerNavbar />

      {/* Page Header */}
      <section className="find-jobs-header">
        <div>
          <span>FIND OPPORTUNITIES</span>

          <h1>Find Jobs</h1>

          <p>
            Discover roles that match your skills, experience, and career goals.
          </p>
        </div>

        <div className="find-jobs-header-count">
          <strong>{jobs.length}</strong>
          <span>Jobs available</span>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="find-jobs-search-section">

        <div className="find-jobs-search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search by job title, skill, or company..."
          />

          <button type="button">
            Search
          </button>
        </div>

        <div className="find-jobs-filters">

          <select defaultValue="">
            <option value="">Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Noida">Noida</option>
            <option value="Remote">Remote</option>
          </select>

          <select defaultValue="">
            <option value="">Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>

          <select defaultValue="">
            <option value="">Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="0-2">0-2 years</option>
            <option value="1-3">1-3 years</option>
            <option value="2-4">2-4 years</option>
          </select>

          <select defaultValue="">
            <option value="">Salary</option>
            <option value="0-5">Under ₹5 LPA</option>
            <option value="5-10">₹5 - ₹10 LPA</option>
            <option value="10-15">₹10 - ₹15 LPA</option>
            <option value="15+">₹15+ LPA</option>
          </select>

        </div>
      </section>

      {/* Jobs Area */}
      <main className="find-jobs-main">

        <div className="find-jobs-results-header">
          <div>
            <span>JOB LISTINGS</span>
            <h2>Latest opportunities</h2>
          </div>

          <select defaultValue="latest">
            <option value="latest">Sort: Latest</option>
            <option value="relevant">Most Relevant</option>
            <option value="salary-high">Salary: High to Low</option>
          </select>
        </div>

        <div className="find-jobs-layout">

          {/* Jobs List */}
          <div className="find-jobs-list">

            {jobs.map((job) => (
              <article className="find-job-card" key={job.id}>

                <div className="find-job-card-main">

                  <div className="find-job-company-icon">
                    {job.initials}
                  </div>

                  <div className="find-job-content">

                    <div className="find-job-company-row">
                      <span>{job.company}</span>
                      <small>{job.type}</small>
                    </div>

                    <h3>{job.title}</h3>

                    <div className="find-job-meta">
                      <span>📍 {job.location}</span>
                      <span>◷ {job.experience}</span>
                      <span>₹ {job.salary.replace("₹", "")}</span>
                    </div>

                    <div className="find-job-skills">
                      {job.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>

                  </div>

                </div>

                <div className="find-job-card-actions">

                  <button
                    type="button"
                    className="find-job-save"
                  >
                    🔖 Save
                  </button>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="find-job-details"
                  >
                    View Details →
                  </Link>

                </div>

              </article>
            ))}

          </div>

          {/* Sidebar */}
          <aside className="find-jobs-sidebar">

            <div className="find-jobs-sidebar-card">

              <span>JOB ALERTS</span>

              <h3>Never miss a new opportunity.</h3>

              <p>
                Get notified when jobs matching your skills and preferences
                are posted.
              </p>

              <button type="button">
                Create Job Alert
              </button>

            </div>

            <div className="find-jobs-sidebar-card find-jobs-profile-card">

              <span>PROFILE MATCH</span>

              <strong>75%</strong>

              <p>
                Complete your profile to improve job recommendations.
              </p>

              <Link to="/seeker-profile/edit">
                Complete Profile →
              </Link>

            </div>

          </aside>

        </div>

      </main>

      {/* Footer */}
      <SeekerFooter />

    </div>
  );
}

export default FindJobs;