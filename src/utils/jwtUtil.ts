// utils/jwtUtil.ts
import jwt from "jsonwebtoken";

const JWT_SECRET = "default_secret";

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7 days" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
