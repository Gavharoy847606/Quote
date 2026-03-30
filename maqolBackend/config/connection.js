import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();


const pool = new Pool({
  connectionString: process.env.DB_STRING,
  ssl: {
    rejectUnauthorized: true,
  },
});

pool
  .connect()
  .then(() => console.log("Database ulandi"))
  .catch(error => console.error("Database xatosi:", error));

export default pool;
