import { Link } from "react-router-dom";
import hirepulseLogo from "../assets/hirepulse-logo.png";
import "./Employer.css";

function Employer() {
  return (
    <div className="employer-page">
      <div className="employer-card">
       <Link to="/" className="logo">
  <img src={hirepulseLogo} alt="HirePulse" />
</Link>

        <p className="employer-tag">FOR EMPLOYERS</p>

        <h1>Hire the right talent.</h1>

        <p className="employer-text">
          Post jobs, discover skilled candidates, and build your team with
          Hire Pulse.
        </p>

        <div className="employer-actions">
          <Link to="/employer-login" className="employer-primary-btn">
            Employer Login
          </Link>

          <Link to="/employer-register" className="employer-secondary-btn">
            Create Employer Account
          </Link>
        </div>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Employer;