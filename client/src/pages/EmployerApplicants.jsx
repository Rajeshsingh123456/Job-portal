import { Link } from "react-router-dom";
import "./EmployerApplicants.css";
import EmployerNavbar from "../components/employer/EmployerNavbar";
import EmployerFooter from "../components/employer/EmployerFooter";

function EmployerApplicants() {
  const applicants = [];

  const pipeline = [
    { name: "Applied", count: 0 },
    { name: "Screening", count: 0 },
    { name: "Technical Interview", count: 0 },
    { name: "Offered", count: 0 },
    { name: "Hired", count: 0 },
  ];

  return (
    <div className="employer-applicants-page">

      <EmployerNavbar />

      <main>

        {/* HEADER */}

        <section className="applicants-header">

          <div className="applicants-header-content">

            <span className="applicants-breadcrumb">
              Employer / Applicants
            </span>

            <h1>
              Applicant Tracking
            </h1>

            <p>
              Review candidates and manage every stage of your hiring
              process from one place.
            </p>

          </div>

          <div className="ats-header-box">

            <span>
              CANDIDATE PIPELINE
            </span>

            <strong>
              ATS
            </strong>

            <p>
              Track candidates
              <br />
              from application to hire
            </p>

          </div>

        </section>

        {/* OVERVIEW */}

        <section className="applicant-overview">

          <div className="overview-item">
            <span>Total Applicants</span>
            <strong>0</strong>
          </div>

          <div className="overview-item">
            <span>In Screening</span>
            <strong>0</strong>
          </div>

          <div className="overview-item">
            <span>Interviews</span>
            <strong>0</strong>
          </div>

          <div className="overview-item">
            <span>Hired</span>
            <strong>0</strong>
          </div>

        </section>

        {/* ATS PIPELINE */}

        <section className="ats-pipeline-section">

          <div className="section-title">

            <div>
              <h2>
                Hiring Pipeline
              </h2>

              <p>
                Move candidates through each stage of your recruitment process.
              </p>
            </div>

          </div>

          <div className="ats-pipeline">

            {pipeline.map((stage, index) => (
              <div
                className="pipeline-stage"
                key={stage.name}
              >

                <div className="pipeline-stage-top">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {stage.count}
                  </strong>

                </div>

                <h3>
                  {stage.name}
                </h3>

                {index < pipeline.length - 1 && (
                  <div className="pipeline-connector">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>

          <div className="rejected-stage">
            <span>
              Rejected
            </span>

            <strong>
              0
            </strong>
          </div>

        </section>

        {/* CANDIDATE WORKSPACE */}

        <section className="candidate-workspace">

          <div className="workspace-header">

            <div>
              <h2>
                Candidates
              </h2>

              <p>
                Search, filter, and review candidates who applied for your jobs.
              </p>
            </div>

            <span className="candidate-total">
              0 Candidates
            </span>

          </div>

          {/* SEARCH */}

          <div className="candidate-search-row">

            <div className="candidate-search">

              <span>
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search candidate name, email, or skills..."
              />

            </div>

            <select defaultValue="All Jobs">
              <option>All Jobs</option>
            </select>

            <select defaultValue="All Status">
              <option>All Status</option>
              <option>Applied</option>
              <option>Screening</option>
              <option>Technical Interview</option>
              <option>Offered</option>
              <option>Hired</option>
              <option>Rejected</option>
            </select>

            <select defaultValue="All Experience">
              <option>All Experience</option>
              <option>0 - 1 Years</option>
              <option>1 - 3 Years</option>
              <option>3 - 5 Years</option>
              <option>5+ Years</option>
            </select>

          </div>

          {/* CANDIDATE AREA */}

          {applicants.length === 0 ? (

            <div className="candidate-empty">

              <div className="empty-candidate-mark">
                +
              </div>

              <h3>
                No candidates yet
              </h3>

              <p>
                Candidates will appear here when they apply to your
                published job postings.
              </p>

              <Link
                to="/post-job"
                className="candidate-empty-button"
              >
                Post a Job
              </Link>

            </div>

          ) : (

            <div className="candidate-list">

              {/* Candidate data will be connected later. */}

            </div>

          )}

        </section>

        {/* ATS FEATURES */}

        <section className="ats-features">

          <div className="ats-feature">

            <span className="feature-number">
              01
            </span>

            <div>
              <h3>
                Candidate Review
              </h3>

              <p>
                View candidate profiles, skills, experience, and application details.
              </p>
            </div>

          </div>

          <div className="ats-feature">

            <span className="feature-number">
              02
            </span>

            <div>
              <h3>
                Hiring Decisions
              </h3>

              <p>
                Shortlist candidates and move them through the recruitment pipeline.
              </p>
            </div>

          </div>

          <div className="ats-feature">

            <span className="feature-number">
              03
            </span>

            <div>
              <h3>
                Interview Management
              </h3>

              <p>
                Schedule interviews and continue candidate evaluation from one workspace.
              </p>
            </div>

          </div>

        </section>

      </main>

      <EmployerFooter />

    </div>
  );
}

export default EmployerApplicants;