// address URL - http://localhost:5000
// address IP - 127.0.0.1:5000
import express from 'express'
// enable server.js to look for html and send html
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import sqlite3 from 'sqlite3';


const app = express()
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dbPath = path.join(__dirname, 'database.db');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());



const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    number TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/frontpage.html'));
});

app.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/aboutus.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/portfolio.html'));
});

app.get('/contactus', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contactus.html'));
});

app.get('/contactinfo', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact-info.html'));
});




app.post('/api/contactinfo', (req, res) => {
  const { name, email, number, message } = req.body;

  // Debug: Log incoming data
  console.log('Received Data:', req.body);

  
  const query = `INSERT INTO contacts (name, email, number, message) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, email, number, message], function (err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      res.status(500).send('Failed to insert data.');
    } else {
      console.log('Data inserted successfully, ID:', this.lastID);
      res.status(201).json({ message: 'Data inserted successfully.' });
    }
  });
});


app.get('/api/contactinfo', (req, res) => {
  const query = 'SELECT * FROM contacts';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      res.status(500).send('Failed to fetch data');
    } else {
      res.json(rows); // Send data as JSON response
    }
  });
});


app.listen(PORT, ()=>console.log(`server has strated on ${PORT}`))