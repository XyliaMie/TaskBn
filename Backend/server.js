require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 

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

//================================ USER REGISTER AND LOGIN API ==================================//
// API Route: Register User
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, address, postalCode} = req.body;

    //Check if this user ada sudah
    const userExists = await pool.query("SELECT * FROM customers WHERE email =$1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({error: "User already exists"});
    }

    //Password beKABAT
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // New user register
    const newUser = await pool.query(
      "INSERT INTO customers (firstName, lastName, email, password, address, postalCode) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstName, lastName, email, hashedPassword, address, postalCode] 
    );

    res.json({message: "User registered successfully", user: newUser.rows[0]});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

//API Route: User Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await pool.query("SELECT * FROM customers WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ error: "Salah tu bui passwad mu ah. Try again" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ error: "Salah tu bui passwad mu ah. Try again" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.rows[0].id, email: user.rows[0].email }, 
      process.env.JWT_SECRET, 
      { expiresIn: "7d" } // Token expires in 7 days
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ error: "Server error" });
  }
});

//========================== END ==========================================================================//

// Start Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
