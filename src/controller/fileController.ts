import type { Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

// 确保 uploads 目录存在
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// 配置存储选项
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    // 设置文件上传的目录
    cb(null, path.resolve(process.cwd(), "./uploads"));
  },
  filename: (req: any, file: any, cb: any) => {
    // 设置文件保存的名称，防止文件名重复
    const ext = path.extname(file.originalname); // 获取文件扩展名
    const filename = Date.now() + ext; // 用时间戳来避免文件名冲突
    cb(null, filename);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 限制文件最大为 10MB
  fileFilter: (req, file, cb) => {
    // 定义允许的文件扩展名
    const filetypes = /jpeg|jpg|png|gif|txt|/;
    // 检查文件扩展名是否符合要求（转为小写以便比较）
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // 检查文件的 MIME 类型是否符合要求
    const mimetype = filetypes.test(file.mimetype);
    // 如果 MIME 类型和扩展名都符合要求，则继续上传
    if (mimetype && extname) {
      return cb(null, true); // 继续上传
    }
    // 如果不符合要求，则返回错误信息
    cb(new Error("文件类型不支持")); // 终止上传并返回错误
  },
}).array("files", 10); // `files` 是前端表单中文件字段的名称，`5` 是最大上传文件数

export default class FileController {
  static uploadFile = async (req: Request, res: Response): Promise<any> => {
    upload(req, res, (err) => {
      if (err) {
        return res.json({ code: 0, message: `上传失败: ${err.message}` });
      }
      res.json({
        code: 1,
        message: "文件上传成功",
        data: req.files, // req.files 中包含所有上传的文件信息
      });
    });
  };
}
