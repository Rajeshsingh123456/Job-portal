import { Link } from "react-router-dom";
import logo from "../../assets/hirepulse-logo.png";
import "./SeekerFooter.css";

function SeekerFooter() {
  return (
    <footer className="seeker-footer">
      <div className="seeker-footer-main">
        <div className="seeker-footer-brand">
          <img src={logo} alt="HirePulse" />
          <p>
            HirePulse helps job seekers discover opportunities, manage
            applications, and build a professional career profile.
          </p>
        </div>

        <div className="seeker-footer-column">
          <h4>For Job Seekers</h4>
          <Link to="/seeker-dashboard">Dashboard</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/my-applications">My Applications</Link>
          <Link to="/seeker-profile">My Profile</Link>
        </div>

        <div className="seeker-footer-column">
          <h4>HirePulse</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About HirePulse</Link>
        </div>
      </div>

      <div className="seeker-footer-bottom">
        <span>© 2026 HirePulse. All rights reserved.</span>
        <span>Built for better career opportunities.</span>
      </div>
    </footer>
  );
}

export default SeekerFooter;