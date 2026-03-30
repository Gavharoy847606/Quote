export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token yo'q" }); // ✅ to'xtadi
  }
  next(); // ✅ token bor, davom etadi
};

export const authMiddlewareJWT = (req, res, next) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded; // ✅ keyingi funksiyada req.user ishlatsa bo'ladi
  next();
};
