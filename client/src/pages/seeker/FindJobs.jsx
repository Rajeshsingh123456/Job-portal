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
      posted: "2 days ago",
      skills: ["React.js", "JavaScript", "Tailwind", "Git"]
    },
    {
      id: 2,
      company: "InnovateX",
      initials: "IX",
      title: "Node.js Backend Engineer",
      location: "Bangalore",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹10,00,000 - ₹15,00,000",
      posted: "3 days ago",
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
      posted: "1 day ago",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      id: 4,
      company: "Nexora Technologies",
      initials: "NT",
      title: "Full Stack Developer",
      location: "Noida",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹7,00,000 - ₹11,00,000",
      posted: "4 days ago",
      skills: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 5,
      company: "PixelCraft Studio",
      initials: "PC",
      title: "UI Developer",
      location: "Delhi",
      type: "Part-time",
      experience: "0-2 years",
      salary: "₹3,50,000 - ₹6,00,000",
      posted: "5 days ago",
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
      posted: "2 days ago",
      skills: ["Node.js", "SQL", "Express", "API"]
    },
    {
      id: 7,
      company: "BrightTech",
      initials: "BT",
      title: "Software Developer Intern",
      location: "Remote",
      type: "Internship",
      experience: "Fresher",
      salary: "₹15,000 - ₹25,000 / month",
      posted: "Today",
      skills: ["JavaScript", "React", "Git"]
    },
    {
      id: 8,
      company: "NextGen Solutions",
      initials: "NG",
      title: "Full Stack Developer",
      location: "Pune",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹8,00,000 - ₹13,00,000",
      posted: "3 days ago",
      skills: ["React", "Node.js", "MySQL"]
    },
    {
      id: 9,
      company: "DevBridge Labs",
      initials: "DB",
      title: "JavaScript Developer",
      location: "Gurgaon",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹5,00,000 - ₹8,50,000",
      posted: "Today",
      skills: ["JavaScript", "React", "Git"]
    },
    {
      id: 10,
      company: "AppVertex",
      initials: "AV",
      title: "Frontend Engineer",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹6,00,000 - ₹10,00,000",
      posted: "1 day ago",
      skills: ["React", "JavaScript", "CSS", "REST API"]
    }
  ];

  return (
    <div className="find-jobs-page">
      <SeekerNavbar />

      {/* Hero */}
      <section className="find-jobs-hero">
        <div className="find-jobs-hero-content">
          <span>EXPLORE CAREER OPPORTUNITIES</span>

          <h1>Find a job that moves your career forward.</h1>

          <p>
            Explore relevant opportunities from growing companies and discover
            roles that match your skills and career goals.
          </p>
        </div>

        <div className="find-jobs-hero-stats">
          <div>
            <strong>{jobs.length}+</strong>
            <span>Opportunities</span>
          </div>

          <div>
            <strong>Multiple</strong>
            <span>Job categories</span>
          </div>

          <div>
            <strong>Flexible</strong>
            <span>Work options</span>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="find-jobs-search-section">
        <div className="find-jobs-search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search by job title, skill, or company..."
          />

          <button type="button">Search Jobs</button>
        </div>
      </section>

      {/* Main Jobs Area */}
      <main className="find-jobs-main">

        {/* Left Filters */}
        <aside className="find-jobs-filters-sidebar">
          <div className="find-jobs-filter-header">
            <div>
              <span>REFINE RESULTS</span>
              <h3>Filters</h3>
            </div>

            <button type="button">Clear</button>
          </div>

          <div className="find-jobs-filter-group">
            <label>Location</label>

            <select defaultValue="">
              <option value="">All locations</option>
              <option value="Delhi">Delhi</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Noida">Noida</option>
              <option value="Pune">Pune</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="find-jobs-filter-group">
            <label>Job Type</label>

            <select defaultValue="">
              <option value="">All job types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="find-jobs-filter-group">
            <label>Experience</label>

            <select defaultValue="">
              <option value="">Any experience</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1">0-1 years</option>
              <option value="0-2">0-2 years</option>
              <option value="1-3">1-3 years</option>
              <option value="2-4">2-4 years</option>
            </select>
          </div>

          <div className="find-jobs-filter-group">
            <label>Salary</label>

            <select defaultValue="">
              <option value="">Any salary</option>
              <option value="0-5">Under ₹5 LPA</option>
              <option value="5-10">₹5 - ₹10 LPA</option>
              <option value="10-15">₹10 - ₹15 LPA</option>
              <option value="15+">₹15+ LPA</option>
            </select>
          </div>

          <div className="find-jobs-filter-divider"></div>

          <div className="find-jobs-alert-card">
            <span>JOB ALERTS</span>

            <h4>Stay updated on new opportunities.</h4>

            <p>
              Create an alert and keep track of jobs matching your preferences.
            </p>

            <button type="button">Create Job Alert</button>
          </div>
        </aside>

        {/* Right Jobs */}
        <section className="find-jobs-results">

          <div className="find-jobs-results-header">
            <div>
              <span>JOB LISTINGS</span>
              <h2>Latest opportunities</h2>
              <p>{jobs.length} jobs available right now</p>
            </div>

            <select defaultValue="latest">
              <option value="latest">Sort: Latest</option>
              <option value="relevant">Most Relevant</option>
              <option value="salary-high">Salary: High to Low</option>
            </select>
          </div>

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
                  <small>Posted {job.posted}</small>

                  <div>
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
                </div>

              </article>
            ))}
          </div>

        </section>
      </main>

      <SeekerFooter />
    </div>
  );
}

export default FindJobs;
