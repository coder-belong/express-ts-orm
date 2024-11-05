import jwt from "jsonwebtoken";

const JWT_SECRET = "default_secret";

/**
 * 生成JWT令牌
 * @param userId 用户ID
 * @returns 生成的JWT令牌
 */
export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7 days" });
};

/**
 * 验证JWT令牌
 * @param token 需要验证的JWT令牌
 * @returns 返回一个Promise对象，如果令牌有效则返回解码后的数据，否则抛出错误
 */
export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
