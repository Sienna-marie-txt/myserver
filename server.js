import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable EJS
app.set('view engine', 'ejs');

// CONNECT TO MYSQL
const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// HOME ROUTE
app.get('/', (req, res) => {
  res.render('index'); // this will load views/index.ejs
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

