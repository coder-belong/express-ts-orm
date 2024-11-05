import { verifyToken } from "@/utils/jwtUtil";
import type { Response, NextFunction } from "express";

// 中间件：验证 Token
export default async (req: any, res: Response, next: NextFunction): Promise<any> => {
  const unInterceptPath = ["/login", "/registry", "/logout"];
  // 如果请求路径在不拦截的路径列表中，直接放行
  if (unInterceptPath.includes(req.path)) return next();

  const token = req.headers["authorization"];
  if (!token) return res.json({ code: 0, message: "请先登录" });

  try {
    const userInfo: any = await verifyToken(token);
    // 将用户 ID 附加到请求对象，以便其他中间件使用
    req.currentUserId = userInfo.userId;
    next(); // 放行给下一个中间件
  } catch (error) {
    // 如果 Token 无效，返回相应的错误信息
    return res.json({ code: 0, message: "登录失效或无权限访问" });
  }
};
