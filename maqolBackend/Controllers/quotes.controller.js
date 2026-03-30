import pool from "../config/connection.js";

console.log(pool.query("SELECT * FROM quotes"));

export const quotesAll = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM quotes");
    res.status(200).json({ message: "barcha Maqollar", quote: result.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const quotesPost = async (req, res) => {
  const { quote_txt, user_id } = req.body;
  try {
    const result = await pool.query(
      `
                INSERT INTO quotes (quote_txt, user_id) 
                VALUES ($1, $2)
                RETURNING *
            `,
      [quote_txt, user_id],
    );
    
    res
      .status(200)
      .json({ message: "Yangi maqol qo'shildi", quote: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
