import { Link, useParams } from "react-router-dom";
import "./JobDetails.css";
import SeekerNavbar from "../../components/seeker/SeekerNavbar";
import SeekerFooter from "../../components/seeker/SeekerFooter";

function JobDetails() {
  const { id } = useParams();

  const jobs = {
    1: {
      company: "TechCorp Inc.",
      initials: "TC",
      title: "Senior React Developer",
      location: "Delhi / Gurgaon",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8,00,000 - ₹12,00,000",
      posted: "2 days ago",
      description:
        "We are looking for a skilled React Developer to build modern, scalable, and user-friendly web applications. You will work closely with designers, backend developers, and product teams to deliver high-quality digital experiences.",
      responsibilities: [
        "Build and maintain responsive React applications.",
        "Develop reusable and maintainable UI components.",
        "Work with APIs and integrate backend services.",
        "Collaborate with designers and development teams.",
        "Improve application performance and user experience."
      ],
      requirements: [
        "2-4 years of experience in frontend development.",
        "Strong knowledge of React.js and JavaScript.",
        "Good understanding of HTML, CSS, and responsive design.",
        "Experience working with REST APIs.",
        "Familiarity with Git and modern development workflows."
      ],
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind", "Git"],
      companyDescription:
        "TechCorp Inc. is a technology company focused on building digital products and modern software solutions for businesses."
    },

    2: {
      company: "InnovateX",
      initials: "IX",
      title: "Node.js Backend Engineer",
      location: "Bangalore",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹10,00,000 - ₹15,00,000",
      posted: "3 days ago",
      description:
        "Join our backend engineering team to design reliable APIs and scalable server-side applications. You will work with frontend engineers and product teams to build robust web platforms.",
      responsibilities: [
        "Develop scalable backend services using Node.js.",
        "Build and maintain REST APIs.",
        "Work with databases and data models.",
        "Write clean and maintainable server-side code.",
        "Collaborate with frontend and product teams."
      ],
      requirements: [
        "1-3 years of backend development experience.",
        "Strong knowledge of Node.js and Express.",
        "Understanding of MySQL and database concepts.",
        "Experience with REST APIs.",
        "Knowledge of Git and development workflows."
      ],
      skills: ["Node.js", "Express", "MySQL", "REST API", "JavaScript", "Git"],
      companyDescription:
        "InnovateX builds technology products and digital platforms that help businesses solve complex operational challenges."
    },

    3: {
      company: "CodeWave Solutions",
      initials: "CW",
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹5,00,000 - ₹8,00,000",
      posted: "1 day ago",
      description:
        "We are looking for a frontend developer who enjoys creating clean, responsive, and intuitive web experiences. You will contribute to real-world web projects and work with a collaborative development team.",
      responsibilities: [
        "Develop responsive web interfaces.",
        "Convert designs into functional web pages.",
        "Build reusable frontend components.",
        "Test and improve user interfaces.",
        "Collaborate with designers and developers."
      ],
      requirements: [
        "Basic to intermediate JavaScript knowledge.",
        "Good understanding of HTML and CSS.",
        "Familiarity with React is preferred.",
        "Understanding of responsive web design.",
        "Basic knowledge of Git."
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
      companyDescription:
        "CodeWave Solutions develops web and software solutions for startups and growing businesses."
    },

    4: {
      company: "Nexora Technologies",
      initials: "NT",
      title: "Full Stack Developer",
      location: "Noida",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹7,00,000 - ₹11,00,000",
      posted: "4 days ago",
      description:
        "Nexora Technologies is looking for a Full Stack Developer to help build complete web applications across frontend and backend systems.",
      responsibilities: [
        "Develop frontend applications using React.",
        "Build backend APIs and services.",
        "Work with databases and application data.",
        "Debug and improve existing applications.",
        "Collaborate with the wider engineering team."
      ],
      requirements: [
        "1-3 years of full stack development experience.",
        "Knowledge of React and JavaScript.",
        "Experience with Node.js and Express.",
        "Understanding of databases.",
        "Familiarity with Git."
      ],
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      companyDescription:
        "Nexora Technologies creates software products and digital platforms for modern businesses."
    },

    5: {
      company: "PixelCraft Studio",
      initials: "PC",
      title: "UI Developer",
      location: "Delhi",
      type: "Part-time",
      experience: "0-2 years",
      salary: "₹3,50,000 - ₹6,00,000",
      posted: "5 days ago",
      description:
        "PixelCraft Studio is seeking a UI Developer to create visually consistent and responsive interfaces for web projects.",
      responsibilities: [
        "Create responsive user interfaces.",
        "Translate designs into working webpages.",
        "Maintain UI consistency across projects.",
        "Work with designers to refine interfaces.",
        "Improve frontend usability."
      ],
      requirements: [
        "Good HTML and CSS knowledge.",
        "JavaScript fundamentals.",
        "Understanding of responsive design.",
        "Familiarity with Figma.",
        "Attention to UI details."
      ],
      skills: ["HTML", "CSS", "JavaScript", "Figma", "Responsive Design"],
      companyDescription:
        "PixelCraft Studio is a digital design and development studio creating modern web experiences."
    },

    6: {
      company: "CloudNova",
      initials: "CN",
      title: "Junior Backend Developer",
      location: "Remote",
      type: "Full-time",
      experience: "0-1 years",
      salary: "₹4,50,000 - ₹7,00,000",
      posted: "2 days ago",
      description:
        "CloudNova is looking for a junior backend developer to help develop APIs and server-side functionality while learning modern backend development practices.",
      responsibilities: [
        "Develop and maintain backend APIs.",
        "Work with Node.js and Express.",
        "Write database queries.",
        "Debug backend issues.",
        "Collaborate with frontend developers."
      ],
      requirements: [
        "Basic knowledge of JavaScript.",
        "Understanding of Node.js fundamentals.",
        "Basic SQL knowledge.",
        "Familiarity with REST APIs.",
        "Willingness to learn backend technologies."
      ],
      skills: ["Node.js", "SQL", "Express", "API", "JavaScript"],
      companyDescription:
        "CloudNova develops cloud-based software solutions and digital tools for businesses."
    },

    7: {
      company: "BrightTech",
      initials: "BT",
      title: "Software Developer Intern",
      location: "Remote",
      type: "Internship",
      experience: "Fresher",
      salary: "₹15,000 - ₹25,000 / month",
      posted: "Today",
      description:
        "BrightTech is offering an opportunity for aspiring developers to gain practical experience by contributing to real-world software projects.",
      responsibilities: [
        "Assist developers with application development.",
        "Work on frontend and basic backend tasks.",
        "Fix simple bugs and issues.",
        "Participate in code reviews.",
        "Learn modern development practices."
      ],
      requirements: [
        "Basic programming knowledge.",
        "Understanding of JavaScript is preferred.",
        "Familiarity with HTML and CSS.",
        "Basic Git knowledge is helpful.",
        "Strong willingness to learn."
      ],
      skills: ["JavaScript", "React", "Git", "HTML", "CSS"],
      companyDescription:
        "BrightTech is a technology company working on software products and digital solutions."
    },

    8: {
      company: "NextGen Solutions",
      initials: "NG",
      title: "Full Stack Developer",
      location: "Pune",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹8,00,000 - ₹13,00,000",
      posted: "3 days ago",
      description:
        "NextGen Solutions is looking for a developer to work across frontend and backend systems and contribute to scalable web applications.",
      responsibilities: [
        "Develop React-based frontend applications.",
        "Create backend services using Node.js.",
        "Work with MySQL databases.",
        "Integrate APIs and application services.",
        "Collaborate with engineering teams."
      ],
      requirements: [
        "Experience with React and JavaScript.",
        "Knowledge of Node.js.",
        "Understanding of MySQL.",
        "Experience with REST APIs.",
        "Good problem-solving skills."
      ],
      skills: ["React", "Node.js", "MySQL", "JavaScript", "REST API"],
      companyDescription:
        "NextGen Solutions develops software products and technology solutions for growing organizations."
    },

    9: {
      company: "DevBridge Labs",
      initials: "DB",
      title: "JavaScript Developer",
      location: "Gurgaon",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹5,00,000 - ₹8,50,000",
      posted: "Today",
      description:
        "DevBridge Labs is seeking a JavaScript Developer to help create interactive and responsive web applications.",
      responsibilities: [
        "Develop interactive web interfaces.",
        "Write clean JavaScript code.",
        "Build reusable components.",
        "Work with APIs.",
        "Test and debug frontend functionality."
      ],
      requirements: [
        "Strong JavaScript fundamentals.",
        "Good HTML and CSS knowledge.",
        "Basic React experience.",
        "Understanding of Git.",
        "Interest in modern web development."
      ],
      skills: ["JavaScript", "React", "HTML", "CSS", "Git"],
      companyDescription:
        "DevBridge Labs builds modern software products and web applications for businesses."
    },

    10: {
      company: "AppVertex",
      initials: "AV",
      title: "Frontend Engineer",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹6,00,000 - ₹10,00,000",
      posted: "1 day ago",
      description:
        "AppVertex is looking for a frontend engineer to build responsive and reliable user interfaces for modern web applications.",
      responsibilities: [
        "Build responsive frontend applications.",
        "Develop reusable React components.",
        "Integrate REST APIs.",
        "Improve application performance.",
        "Work with product and design teams."
      ],
      requirements: [
        "1-3 years of frontend development experience.",
        "Strong JavaScript and React knowledge.",
        "Good HTML and CSS skills.",
        "Experience with REST APIs.",
        "Familiarity with Git."
      ],
      skills: ["React", "JavaScript", "CSS", "REST API", "Git"],
      companyDescription:
        "AppVertex develops digital products and web applications for modern businesses."
    }
  };

  const job = jobs[id] || jobs[1];

  return (
    <div className="job-details-page">
      <SeekerNavbar />

      {/* Breadcrumb */}
      <div className="job-details-breadcrumb">
        <Link to="/seeker-dashboard">Dashboard</Link>
        <span>/</span>
        <Link to="/jobs">Find Jobs</Link>
        <span>/</span>
        <span>{job.title}</span>
      </div>

      {/* Hero */}
      <section className="job-details-hero">
        <div className="job-details-hero-content">
          <div className="job-details-company-icon">
            {job.initials}
          </div>

          <div>
            <span className="job-details-company">
              {job.company}
            </span>

            <h1>{job.title}</h1>

            <div className="job-details-hero-meta">
              <span>📍 {job.location}</span>
              <span>◷ {job.type}</span>
              <span>◉ {job.experience}</span>
              <span>₹ {job.salary.replace("₹", "")}</span>
            </div>

            <small>Posted {job.posted}</small>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="job-details-main">
        {/* Left Content */}
        <section className="job-details-content">

          <div className="job-details-section">
            <span className="job-details-section-label">
              ABOUT THE ROLE
            </span>

            <h2>Job Description</h2>

            <p>{job.description}</p>
          </div>

          <div className="job-details-section">
            <span className="job-details-section-label">
              WHAT YOU'LL DO
            </span>

            <h2>Responsibilities</h2>

            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="job-details-section">
            <span className="job-details-section-label">
              WHAT WE'RE LOOKING FOR
            </span>

            <h2>Requirements</h2>

            <ul>
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="job-details-section">
            <span className="job-details-section-label">
              CORE SKILLS
            </span>

            <h2>Skills & Technologies</h2>

            <div className="job-details-skills">
              {job.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="job-details-section">
            <span className="job-details-section-label">
              ABOUT THE COMPANY
            </span>

            <h2>{job.company}</h2>

            <p>{job.companyDescription}</p>
          </div>

        </section>

        {/* Right Sidebar */}
        <aside className="job-details-sidebar">

          <div className="job-details-apply-card">
            <span>INTERESTED IN THIS ROLE?</span>

            <h3>Take the next step.</h3>

            <p>
              Review the job details and apply when you're ready.
            </p>

            <button type="button">
              Apply Now
            </button>

            <button
              type="button"
              className="job-details-save-button"
            >
              🔖 Save Job
            </button>
          </div>

          <div className="job-details-summary-card">
            <span>JOB SUMMARY</span>

            <div>
              <small>Job Type</small>
              <strong>{job.type}</strong>
            </div>

            <div>
              <small>Experience</small>
              <strong>{job.experience}</strong>
            </div>

            <div>
              <small>Location</small>
              <strong>{job.location}</strong>
            </div>

            <div>
              <small>Salary</small>
              <strong>{job.salary}</strong>
            </div>

            <div>
              <small>Posted</small>
              <strong>{job.posted}</strong>
            </div>
          </div>

        </aside>
      </main>

      {/* Bottom CTA */}
      <section className="job-details-bottom-cta">
        <div>
          <span>READY TO MOVE FORWARD?</span>
          <h2>Make your next career move.</h2>
          <p>
            Explore more opportunities or apply for this position.
          </p>
        </div>

        <div>
          <button type="button">Apply Now</button>
          <Link to="/jobs">Browse More Jobs</Link>
        </div>
      </section>

      <SeekerFooter />
    </div>
  );
}

export default JobDetails;
