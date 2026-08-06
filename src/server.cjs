const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5
});
app.get("/api/products", async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM dishes");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: "Server error"});
    } finally {
        if (conn) conn.end();
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})