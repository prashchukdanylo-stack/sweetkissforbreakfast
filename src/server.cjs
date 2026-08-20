const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [
      "https://prashchukdanylo-stack.github.io",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
  })
);

app.use(express.json());


const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectTimeout: 20000,
  acquireTimeout: 20000,
  ssl: process.env.DB_HOST !== 'localhost' && process.env.DB_HOST !== '127.0.0.1' 
    ? { rejectUnauthorized: false } 
    : false,
  connectionLimit: 5,
});

app.get("/api/products", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM dishes");
    res.json(rows);
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).json({ error: "Server error" });
  } finally {
    if (conn) conn.release();
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});