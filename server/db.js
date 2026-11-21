
const { Pool } = require("pg");

// Create a connection pool for the Neon PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;
