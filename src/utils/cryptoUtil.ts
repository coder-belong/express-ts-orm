// src/utils/cryptoUtil.ts
import bcrypt from "bcrypt";

/**
 * 加密密码
 * @param password 明文密码
 * @returns 加密后的哈希密码
 */
export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10); // 生成盐
  const hashedPassword = await bcrypt.hash(password, salt); // 生成哈希密码
  return hashedPassword;
};

/**
 * 比较密码
 * @param password 明文密码
 * @param hashPassword 存储在数据库中的哈希密码
 * @returns 是否匹配
 */
export const comparePassword = async (password: string, hashPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword); // 比较密码和哈希密码
};
