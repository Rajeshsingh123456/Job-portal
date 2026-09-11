import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import hirepulseLogo from "./assets/hirepulse-logo.png";
import SeekerDashboard from "./pages/SeekerDashboard";
import Employer from "./pages/Employer";
import EmployerRegister from "./pages/EmployerRegister";
import EmployerLogin from "./pages/EmployerLogin";
import "./App.css";


function Home() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">
  <img src={hirepulseLogo} alt="HirePulse" />
</Link>

       <div className="nav-links">
  <a href="#jobs">Find Jobs</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>

  <Link to="/employers" className="employer-btn">
    For Employers
  </Link>

  <Link to="/login" className="login-btn">
    Login
  </Link>

  <Link to="/register" className="register-btn">
    Register
  </Link>
</div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">🚀 Find your next opportunity</p>

          <h1>
            Find a job you
            <br />
            <span>actually love.</span>
          </h1>

          <p className="hero-text">
            Discover thousands of opportunities from trusted companies and
            take the next step in your career.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Job title, skills or keywords"
            />

            <input
              type="text"
              placeholder="Location"
            />

            <button>Search Jobs</button>
          </div>

          <p className="popular">
            Popular: <span>Developer</span> <span>Designer</span>{" "}
            <span>Marketing</span> <span>Internship</span>
          </p>
        </div>

        <div className="hero-card">
          <div className="floating-card card-one">
            <div className="company-icon">G</div>
            <div>
              <strong>Frontend Developer</strong>
              <small>Google · Remote</small>
            </div>
          </div>

          <div className="floating-card card-two">
            <div className="company-icon blue">M</div>
            <div>
              <strong>Software Engineer</strong>
              <small>Microsoft · Delhi</small>
            </div>
          </div>

          <div className="main-hero-card">
            <div className="hero-circle">💼</div>
            <h3>Your dream job is waiting.</h3>
            <p>Build your career with the right opportunity.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>10K+</h2>
          <p>Active Jobs</p>
        </div>

        <div>
          <h2>5K+</h2>
          <p>Companies</p>
        </div>

        <div>
          <h2>20K+</h2>
          <p>Job Seekers</p>
        </div>

        <div>
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="jobs-section" id="jobs">
        <div className="section-heading">
          <div>
            <p className="section-tag">OPPORTUNITIES</p>
            <h2>Featured Jobs</h2>
          </div>

          <Link to="/jobs" className="view-all">
            View all jobs →
          </Link>
        </div>

        <div className="job-grid">
          <JobCard
            company="TechNova"
            title="Frontend Developer"
            location="Delhi · Remote"
            salary="₹6L - ₹10L"
            type="Full Time"
          />

          <JobCard
            company="CodeCraft"
            title="Node.js Developer"
            location="Gurgaon · Hybrid"
            salary="₹7L - ₹12L"
            type="Full Time"
          />

          <JobCard
            company="DesignHub"
            title="UI/UX Designer"
            location="Mumbai · Remote"
            salary="₹5L - ₹9L"
            type="Full Time"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="about">
        <div>
          <p className="section-tag">START YOUR JOURNEY</p>
          <h2>Ready to find your next opportunity?</h2>
          <p>
            Create your profile and start applying to jobs that match your
            skills.
          </p>
        </div>

        <Link to="/register" className="cta-btn">
          Get Started →
        </Link>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="logo">
  <img src={hirepulseLogo} alt="HirePulse" />
</div>

        <p>Connecting talent with opportunity.</p>

       <p>© 2026 HirePulse. All rights reserved.</p>
      </footer>
    </div>
  );
}


function JobCard({ company, title, location, salary, type }) {
  return (
    <div className="job-card">
      <div className="job-top">
        <div className="company-logo">
          {company.charAt(0)}
        </div>

        <span className="job-type">{type}</span>
      </div>

      <h3>{title}</h3>

      <p className="company-name">{company}</p>

      <p className="job-location">📍 {location}</p>

      <div className="job-bottom">
        <strong>{salary}</strong>

        <Link to="/jobs/1">View Job →</Link>
      </div>
    </div>
  );
}


function Jobs() {
  return (
    <div className="simple-page">
      <h1>Available Jobs</h1>
      <p>Jobs will appear here from our Job Portal backend.</p>

      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>
    </div>
  );
}


function JobDetails() {
  return (
    <div className="simple-page">
      <div className="details-card">
        <span className="job-type">FULL TIME</span>

        <h1>Frontend Developer</h1>

        <h3>TechNova</h3>

        <p>📍 Delhi · Remote</p>

        <p>💰 ₹6L - ₹10L</p>

        <hr />

        <h2>Job Description</h2>

        <p>
          We are looking for a passionate Frontend Developer to join our
          growing team. You will work with modern web technologies and build
          beautiful, responsive applications.
        </p>

        <h2>Requirements</h2>

        <ul>
          <li>HTML, CSS and JavaScript</li>
          <li>React.js knowledge</li>
          <li>Good problem-solving skills</li>
          <li>Ability to work in a team</li>
        </ul>

        <button className="apply-btn">Apply Now</button>

        <br />

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");

        console.log("Logged in user:", data.user);

        navigate("/seeker-dashboard");
      } else {
        alert(data.error || "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Backend se connection nahi ho raha.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="logo">
           <img src={hirepulseLogo} alt="HirePulse" />
        </Link>

        <h1>Welcome Back</h1>
        <p>Login to your HirePulse account</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}


function Register() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          role: "Seeker",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");

        e.target.reset();
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
      alert("Backend se connection nahi ho raha.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
       <Link to="/" className="logo">
  <img src={hirepulseLogo} alt="HirePulse" />
</Link>

        <h1>Create Account</h1>
        <p>Join HirePulse and find your next opportunity</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <select defaultValue="Seeker" disabled>
             {/* <option value="Seeker">Job Seeker</option>  */}
          </select>

          <button type="submit">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seeker-dashboard" element={<SeekerDashboard />} />
        <Route path="/employers" element={<Employer />} />
        <Route path="/employer-register" element={<EmployerRegister />} />
        <Route path="/employer-login" element={<EmployerLogin />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;