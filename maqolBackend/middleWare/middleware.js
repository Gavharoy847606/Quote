import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Token bor yoki yo'qligini tekshirish
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token yo'q, ruxsat berilmadi" });
    }

    const token = authHeader.split(" ")[1]; // "Bearer eyJ..." → "eyJ..."

    // Tokenni tekshirish va decode qilish
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role } → getProfile da ishlatiladi

    next();
  } catch (error) {
    res.status(401).json({ message: "Token yaroqsiz yoki muddati o'tgan" });
  }
};