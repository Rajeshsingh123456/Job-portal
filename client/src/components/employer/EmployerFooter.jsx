import { Link } from "react-router-dom";
import logo from "../../assets/hirepulse-logo.png";
import "./EmployerFooter.css";

function EmployerFooter() {
  return (
    <footer className="employer-footer">

      <div className="footer-grid">

        <div className="footer-brand">

          <img
            src={logo}
            alt="HirePulse"
          />

          <p>
            HirePulse helps employers manage jobs,
            candidates and interviews through one
            simple recruitment workspace.
          </p>

        </div>


        <div className="footer-column">

          <h4>
            For Recruiter
          </h4>

          <Link to="/employer-dashboard">
            Dashboard
          </Link>

          <Link to="/employer-jobs">
            My Jobs
          </Link>

          <Link to="/employer-applicants">
            Applicants
          </Link>

          <Link to="/employer-interviews">
            Interviews
          </Link>

          <Link to="/post-job">
            Post a Job
          </Link>

        </div>


        <div className="footer-column">

          <h4>
            HirePulse
          </h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/find-jobs">
            Find Jobs
          </Link>

          <Link to="/about">
            About HirePulse
          </Link>

        </div>


        <div className="footer-column">

          <h4>
            Account
          </h4>

          <Link to="/employer-profile">
            My Profile
          </Link>

          <Link to="/employer-profile/edit">
            Edit Profile
          </Link>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back to Top
          </button>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 HirePulse. All rights reserved.
        </span>

        <span>
          Built for smarter hiring.
        </span>

      </div>

    </footer>
  );
}

export default EmployerFooter;