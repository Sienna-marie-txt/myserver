import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// CONNECT TO MYSQL using your .env variables
const db = await mysql.createConnection({
  host: ${{shared.MYSQLHOST}},
  user: ${{shared.MYSQLUSER}},
  password: ${{shared.MYSQLPASSWORD}},
  database: ${{shared.MYSQLDATABASE}}
});

// HOME ROUTE — Sienna’s Blog in Progress
app.get('/', (req, res) => {
  res.render('index', { title: "Sienna's Blog in Progress" });
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
