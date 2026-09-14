import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployerProfileEdit.css";
import EmployerNavbar from "../components/employer/EmployerNavbar";
import EmployerFooter from "../components/employer/EmployerFooter";

function EmployerProfileEdit() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "Nitesh",
    role: "Recruiter",
    email: "nitesh@gmail.com",
    phone: "",
    company: "HirePulse Company",
    website: "",
    location: "Delhi, India",
    industry: "Technology",
    companySize: "",
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

    alert("Profile updated successfully!");

    navigate("/employer-profile");
  };

  const handleCancel = () => {
    navigate("/employer-profile");
  };

  return (
    <div className="employer-profile-edit-page">
      <EmployerNavbar />

      <main>
        {/* PAGE HEADER */}
        <section className="profile-edit-header">
          <div>
            <span className="profile-edit-breadcrumb">
              Recruiter / Profile / Edit
            </span>

            <h1>Edit Recruiter Profile</h1>

            <p>
              Update your personal and company information to keep your
              HirePulse recruitment profile complete.
            </p>
          </div>

        </section>

        {/* EDIT FORM */}
        <section className="profile-edit-layout">
          <form
            className="profile-edit-form"
            onSubmit={handleSubmit}
          >
            {/* PERSONAL INFORMATION */}
            <div className="edit-profile-card">
              <div className="edit-card-heading">
                <div>
                  <span>ACCOUNT</span>
                  <h2>Personal Information</h2>
                </div>

                <span className="edit-card-number">01</span>
              </div>

              <div className="edit-form-grid">
                <div className="edit-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="edit-form-group">
                  <label htmlFor="role">Role</label>
                  <input
                    id="role"
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Enter your role"
                    required
                  />
                </div>

                <div className="edit-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="edit-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            {/* COMPANY INFORMATION */}
            <div className="edit-profile-card">
              <div className="edit-card-heading">
                <div>
                  <span>COMPANY</span>
                  <h2>Company Information</h2>
                </div>

                <span className="edit-card-number">02</span>
              </div>

              <div className="edit-form-grid">
                <div className="edit-form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                  />
                </div>

                <div className="edit-form-group">
                  <label htmlFor="industry">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="edit-form-group">
                  <label htmlFor="companySize">Company Size</label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                  >
                    <option value="">Select company size</option>
                    <option value="1 - 10">1 - 10 employees</option>
                    <option value="11 - 50">11 - 50 employees</option>
                    <option value="51 - 200">51 - 200 employees</option>
                    <option value="201 - 500">201 - 500 employees</option>
                    <option value="501 - 1000">501 - 1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div className="edit-form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter company location"
                  />
                </div>

                <div className="edit-form-group edit-form-full">
                  <label htmlFor="website">Company Website</label>
                  <input
                    id="website"
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="edit-form-actions">
              <button
                type="button"
                className="edit-cancel-button"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="edit-save-button"
              >
                Save Changes
              </button>
            </div>
          </form>

          {/* SIDE INFORMATION */}
          <aside className="profile-edit-sidebar">
            <div className="edit-side-card">
              <span className="edit-side-label">
                PROFILE STATUS
              </span>

              <div className="edit-completion">
                <strong>60%</strong>
                <span>Complete</span>
              </div>

              <h3>Complete your profile</h3>

              <p>
                Add your missing contact and company details to make your
                recruiter profile more complete.
              </p>
            </div>

            <div className="edit-side-card edit-help-card">
              <span className="edit-side-label">
                HIREPULSE
              </span>

              <h3>Recruiter Workspace</h3>

              <p>
                Keep your recruiter information updated so your hiring
                workspace stays organized.
              </p>

              <button
                type="button"
                onClick={() => navigate("/employer-profile")}
              >
                View Profile →
              </button>
            </div>
          </aside>
        </section>
      </main>

      <EmployerFooter />
    </div>
  );
}

export default EmployerProfileEdit;