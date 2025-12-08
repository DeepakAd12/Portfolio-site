const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Configure email transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || '',
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
  secure: (process.env.SMTP_SECURE === 'true') || false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

// Verify transporter only if SMTP is configured
let smtpEnabled = false;
transporter.verify()
  .then(() => { smtpEnabled = true; console.log('SMTP transporter verified'); })
  .catch(() => { smtpEnabled = false; console.log('SMTP not configured or verification failed'); });

const CONTACTS_FILE = path.join(__dirname, 'contacts.json');

function loadContacts() {
  try {
    const raw = fs.readFileSync(CONTACTS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveContacts(list) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(list, null, 2));
}

app.get('/api/projects', (req, res) => {
  // Simple projects list (could be moved to a DB or separate file)
  const projects = [
    {
      id: 1,
      title: 'AI Study Helper',
      description: 'Full Stack AI web app using Google Gemini API',
      url: 'https://lustrous-puppy-1e77a6.netlify.app'
    },
    {
      id: 2,
      title: 'Personal Assistant CLI',
      description: 'Python CLI with encrypted notes and utilities',
      url: 'https://github.com/DeepakAd12/Personal-assistant.git'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio showcasing projects and skills',
      url: 'https://deepakad12.github.io/Deepak-s-portfolio/'
    }
  ];
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }

  const contacts = loadContacts();
  const entry = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    message,
    createdAt: new Date().toISOString()
  };
  contacts.push(entry);
  try {
    saveContacts(contacts);
    // Send email notification if SMTP configured
    if (smtpEnabled) {
      const recipient = process.env.CONTACT_RECIPIENT || process.env.SMTP_USER || '';
      if (recipient) {
        const mailOptions = {
          from: process.env.EMAIL_FROM || (process.env.SMTP_USER || 'no-reply@example.com'),
          to: recipient,
          subject: `New contact from ${name}`,
          text: `You have a new contact submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nMessage:\n${message}`
        };
        transporter.sendMail(mailOptions).then(info => {
          console.log('Contact email sent:', info.response || info.messageId);
        }).catch(err => {
          console.error('Failed to send contact email', err);
        });
      }
    }

    return res.json({ ok: true, entry });
  } catch (e) {
    console.error('Failed to save contact', e);
    return res.status(500).json({ error: 'Failed to save contact' });
  }
});

app.get('/api/contacts', (req, res) => {
  // Simple read-only endpoint for stored contacts
  const contacts = loadContacts();
  res.json(contacts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
