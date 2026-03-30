import pool from "../config/connection.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const users = async (req, res) => {
  const usersall = await pool.query(`select * from users`);
  res.status(200).json({ message: "ishladi", sign: usersall.rows });
};

export const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      birth_date,
      role,
      favorite_word,
      favorite_writer,
    } = req.body;

    const passwordh = await bcrypt.hash(password, 10);
    const sign = await pool.query(
      `
        insert into users(username, email, password, birth_date, role, favorite_word, favorite_writer)
        values($1,$2,$3,$4,$5,$6,$7)
        returning *
        `,
      [
        username,
        email,
        passwordh,
        birth_date,
        role,
        favorite_word,
        favorite_writer,
      ],
    );
    console.error({
      message: "muvaffariyatli royhatdan otildi",
      sign: sign.rows[0],
    });

    res
      .status(201)
      .json({ message: "muvaffariyatli royhatdan otildi", sign: sign.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};



export const login = async (req, res) => {
  try {
    const { email,password } = req.body;

    const result = await pool.query(
      `SELECT * FROM users
       WHERE email = $1`,
      [email],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }
    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Parol noto'g'ri" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },  
      process.env.JWT_SECRET,            
      { expiresIn: '60s' }               
    );
    console.log(result.rows[0],token);
    

    res.status(201).json({ message: "Kirish success",token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export const getProfile = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, username, email, birth_date, role, favorite_word, favorite_writer, created_at
       FROM users WHERE id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }

    res.status(200).json({ user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
