// server.js
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173', // your Vite dev server origin (adjust if different)
  credentials: true
}));
app.use(session({
  secret: 'replace-with-strong-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// Ensure data dir and users.json exist
async function ensureUsersFile() {
  await fs.ensureDir(DATA_DIR);
  if (!await fs.pathExists(USERS_FILE)) {
    await fs.writeJson(USERS_FILE, []);
  }
}
ensureUsersFile();

// Helper: read/write users
async function readUsers() {
  return await fs.readJson(USERS_FILE);
}
async function writeUsers(users) {
  await fs.writeJson(USERS_FILE, users, { spaces: 2 });
}

// Signup route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const users = await readUsers();
  const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) return res.status(409).json({ error: 'Email already registered' });

  const hash = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), name: name || '', email, password: hash };
  users.push(user);
  await writeUsers(users);

  // create session
  req.session.user = { id: user.id, email: user.email, name: user.name };
  res.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } });
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  req.session.user = { id: user.id, email: user.email, name: user.name };
  res.json({ ok: true, user: req.session.user });
});

// Logout
app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.json({ ok: true });
  });
});

// Protected route example
app.get('/api/profile', (req, res) => {
  if (!req.session?.user) return res.status(401).json({ error: 'Unauthorized' });
  res.json({ user: req.session.user });
});

app.listen(PORT, () => {
  console.log(`Auth server listening on http://localhost:${PORT}`);
});
