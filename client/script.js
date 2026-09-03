
const API = 'http://localhost:3000';
const jobSearchInput = document.getElementById('job-search-input');
let allJobs = []; 
// DOM ELEMENTS
const authSection = document.getElementById('auth-section');
const adminDashboard = document.getElementById('admin-dashboard');
const seekerDashboard = document.getElementById('seeker-dashboard');
const navbar = document.getElementById('navbar');
const navUsername = document.getElementById('nav-username');
const navRole = document.getElementById('nav-role');
const logoutBtn = document.getElementById('logout-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginMessage = document.getElementById('login-message');
const registerMessage = document.getElementById('register-message');
const createJobForm = document.getElementById('create-job-form');
const adminApplicationsList = document.getElementById('admin-applications-list');
const jobFeedList = document.getElementById('job-feed-list');
const myApplicationsList = document.getElementById('my-applications-list');
const sidebarBtns = document.querySelectorAll('.sidebar-btn');



// AUTH LOGIC
function getCurrentUser() {
    const data = localStorage.getItem('jobPortalUser');
    return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
    localStorage.setItem('jobPortalUser', JSON.stringify(user));
    updateUIForRole();
}

function logout() {
    localStorage.removeItem('jobPortalUser');
    location.reload(); 
}

function updateUIForRole() {
    const user = getCurrentUser();
    if (!user) {
        authSection.classList.remove('hidden');
        navbar.classList.add('hidden');
        return;
    }

    authSection.classList.add('hidden');
    navbar.classList.remove('hidden');
    navUsername.textContent = user.username;
    navRole.textContent = user.role;

    if (user.role === 'Admin') {
        adminDashboard.classList.remove('hidden');
        seekerDashboard.classList.add('hidden');
        loadAdminApplications();
    } else {
        seekerDashboard.classList.remove('hidden');
        adminDashboard.classList.add('hidden');
        loadJobFeed();
        loadMyApplications();
    }
}

// FORMS & TABS
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        loginForm.classList.toggle('hidden', tab !== 'login');
        registerForm.classList.toggle('hidden', tab === 'login');
    });
});

sidebarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const panelId = btn.dataset.panel;
        const container = btn.closest('.dashboard-container');
        container.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
        document.getElementById(panelId).classList.remove('hidden');
        
        if(panelId === 'job-feed') loadJobFeed();
        if(panelId === 'my-applications') loadMyApplications();
        if(panelId === 'view-applications') loadAdminApplications();
    });
});

// API HANDLERS
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });
    const data = await res.json();
    if(res.ok) setCurrentUser(data.user);
    else loginMessage.textContent = data.error;
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;
    const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password, role})
    });
    if(res.ok) { registerMessage.textContent = "Registered! Login now."; registerForm.reset(); }
});

createJobForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    const jobData = {
        title: document.getElementById('job-title').value,
        company: document.getElementById('job-company').value,
        salary: document.getElementById('job-salary').value,
        description: document.getElementById('job-description').value,
        postedBy: user.id
    };
    const res = await fetch(`${API}/create-job`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(jobData)
    });
    if(res.ok) { alert("Job Posted!"); createJobForm.reset(); }
});

// LOAD DATA FUNCTIONS
async function loadJobFeed() {
    const res = await fetch(`${API}/jobs`);
    const jobs = await res.json();
    // added salery 
    jobFeedList.innerHTML = jobs.map(job => `
        <div class="card job-card">
            <div class="card-header">
                <h3>${escapeHtml(job.title)}</h3>
                <span class="salary-tag">₹${escapeHtml(job.salary)}</span>
            </div>
            <p class="company-name"><strong>Company:</strong> ${escapeHtml(job.company)}</p>
            <p class="job-desc">${escapeHtml(job.description)}</p> 
            <button class="btn btn-primary" onclick="applyForJob(${job.id})">Apply for this Job</button>
        </div>
    `).join('');
}




async function applyForJob(jobId) {
    const user = getCurrentUser();
    const res = await fetch(`${API}/apply`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({jobId, userId: user.id})
    });
    if(res.ok) alert("Application Sent!");
    else alert("Already applied or error.");
}

async function loadMyApplications() {
    const user = getCurrentUser();
    const res = await fetch(`${API}/applications?userId=${user.id}`);
    const apps = await res.json();
    myApplicationsList.innerHTML = apps.map(app => `
        <div class="card">
            <h4>${escapeHtml(app.jobTitle)}</h4>
            <p>${escapeHtml(app.company)}</p>
            <span class="status-badge ${app.status.toLowerCase()}">${app.status}</span>
        </div>
    `).join('');
}


async function loadAdminApplications() {
    const res = await fetch(`${API}/applications`);
    const apps = await res.json();
    
    adminApplicationsList.innerHTML = apps.map(app => `
        <div class="card">
            <h4>${escapeHtml(app.jobTitle)}</h4>
            <p><strong>Applicant:</strong> ${escapeHtml(app.username)}</p> <!-- Yahan username aayega -->
            <div class="action-btns">
                <button class="btn btn-success btn-sm" onclick="updateStatus(${app.id}, 'Accepted')">Accept</button>
                <button class="btn btn-danger btn-sm" onclick="updateStatus(${app.id}, 'Rejected')">Reject</button>
            </div>
        </div>
    `).join('');
}

async function updateStatus(id, status) {
    await fetch(`${API}/update-status`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({applicationId: id, status})
    });
    loadAdminApplications();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text || "";
    return div.innerHTML;
}

logoutBtn.onclick = logout;
updateUIForRole();