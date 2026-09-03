const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require("./config/db"); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

// REGISTER & LOGIN 
app.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  const sql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
  db.query(sql, [username, password, role], (err, result) => {
    if (err) return res.status(500).json({ error: 'Insert failed' });
    res.json({ message: 'Registered', id: result.insertId });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'DB Error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid' });
    res.json({ message: 'Login success', user: results[0] });
  });
});

// JOBS
app.get('/jobs', (req, res) => {
  db.query("SELECT id, title, company, salary, description FROM jobs", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/create-job', (req, res) => {
  const { title, company, salary, description, postedBy } = req.body;
  const sql = "INSERT INTO jobs (title, company, salary, description, postedBy) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [title, company, salary, description, postedBy], (err, result) => {
    if (err) return res.status(500).json({ error: 'Job creation failed' });
    res.json({ message: 'Job created', jobId: result.insertId });
  });
});

// APPLY FOR JOB
app.post('/apply', (req, res) => {
  const { jobId, userId } = req.body;
  const sql = "INSERT INTO applications (jobId, userId, status) VALUES (?, ?, 'Pending')";
  db.query(sql, [jobId, userId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Apply failed' });
    res.json({ message: 'Applied successfully!', id: result.insertId });
  });
});

//  USER DASHBOARD: View My Applications


app.get('/applications', (req, res) => {
    // this sql query help to take username from user table 
    const sql = `
        SELECT applications.*, users.username, jobs.title as jobTitle 
        FROM applications 
        JOIN users ON applications.userId = users.id 
        JOIN jobs ON applications.jobId = jobs.id
    `;
    
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// ADMIN ACTION: Accept/Reject
app.put('/update-status', (req, res) => {
  const { applicationId, status } = req.body;
  const sql = "UPDATE applications SET status = ? WHERE id = ?";
  db.query(sql, [status, applicationId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Update failed' });
    res.json({ message: 'Status updated' });
  });
});



// ADMIN ACTION: Accept/Reject Application
app.put('/update-status/:id', (req, res) => {
  const { status } = req.body; 
  const sql = "UPDATE applications SET status = ? WHERE id = ?";
  db.query(sql, [status, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Update failed' });
    res.json({ message: 'Status updated' });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});