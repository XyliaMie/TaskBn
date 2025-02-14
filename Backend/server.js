require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to handle JSON requests

// PostgreSQL Connection Pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Test Database Connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error(" Database connection error:", err));

// API Route: Get All Customers
app.get("/customers", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, firstName, lastName, email, address, postalCode, ST_AsText(location) AS location FROM customers"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// API Route: Create a New Customer
app.post("/customers", async (req, res) => {
  try {
    const { firstName, lastName, email, password, address, postalCode, latitude, longitude } = req.body;
    const newUser = await pool.query(
      "INSERT INTO customers (firstName, lastName, email, password, address, postalCode, location) VALUES ($1, $2, $3, $4, $5, $6, ST_GeogFromText('SRID=4326;POINT(' || $7 || ' ' || $8 || ')')) RETURNING *",
      [firstName, lastName, email, password, address, postalCode, longitude, latitude] 
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
