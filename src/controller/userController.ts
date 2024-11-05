import { UserModel } from "@/model/userModel";
import { comparePassword, encryptPassword } from "@/utils/cryptoUtil";
import { generateToken } from "@/utils/jwtUtil";
import type { Request, Response } from "express";

export default class UserController {
  static getUserList = async (req: any, res: Response): Promise<any> => {
    console.log(req.currentUserId);
    const data = await UserModel.findAll();
    return res.json({ code: 1, data });
  };

  static create = async (req: Request, res: Response): Promise<any> => {
    const body = req.body;
    // 密码加密
    body.password = await encryptPassword(body.password);
    try {
      const user = await UserModel.create(body);
      res.json({ code: 1, data: user });
    } catch (error) {
      console.error("创建用户失败:", error);
      res.json({ code: 0, message: "创建用户失败" });
    }
  };

  static update = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const body = req.body;
    body.password = await encryptPassword(body.password);
    try {
      await UserModel.update(body, { where: { id } });
      const updatedUser = await UserModel.findByPk(id);
      res.json({ code: 1, data: updatedUser });
    } catch (error) {
      console.error("更新失败:", error);
      res.json({ code: 0, message: "更新用户失败" });
    }
  };

  static destory = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    try {
      await UserModel.destroy({ where: { id } });
      res.json({ code: 1, message: "用户删除成功" });
    } catch (error) {
      console.error("删除失败:", error);
      res.json({ code: 0, message: "删除用户失败" });
    }
  };

  static login = async (req: Request, res: Response): Promise<any> => {
    const { name, password } = req.body;
    const user = await UserModel.findOne({ where: { name, status: 1 } });
    if (!user) {
      return res.json({ code: 0, message: "未找到该用户或该用户已禁用！" });
    }
    // 比对密码
    const isSamePwd = await comparePassword(password, user.password);
    if (!isSamePwd) {
      return res.json({ code: 0, message: "密码错误！" });
    }
    // 生成 token
    const token = generateToken(user.id);
    res.json({ code: 1, message: "登录成功", data: { token } });
  };
}
