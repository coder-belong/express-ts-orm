import fs from "fs";
import multer, { type StorageEngine } from "multer";
import path from "path";

// 确保 uploads 目录存在
const uploadDir = path.resolve(process.cwd(), "./uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // 创建 uploads 目录
}

// 配置 Multer 存储
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    // 设置文件上传的目录
    cb(null, uploadDir); // 使用上传目录
  },
  filename: (req, file, cb) => {
    // 设置文件保存的名称，防止文件名重复
    const ext = path.extname(file.originalname); // 获取文件扩展名
    const filename = `${Date.now()}${ext}`; // 使用时间戳作为文件名避免冲突
    cb(null, filename);
  },
});

// 文件类型过滤器
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback): void => {
  // 定义允许的文件扩展名
  const allowedExtensions = ["jpeg", "jpg", "png", "gif", "txt", "xls"];

  // 定义允许的 MIME 类型
  const allowedMimetypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "text/plain", // 适用于 .txt 文件
    "application/vnd.ms-excel", // 适用于 .xls 文件
  ];

  const extname = path.extname(file.originalname).slice(1); // 获取文件扩展名, 去掉开头的 "."

  // 如果 MIME 类型和扩展名都符合要求，则继续上传
  if (allowedExtensions.includes(extname) && allowedMimetypes.includes(file.mimetype)) {
    return cb(null, true); // 继续上传
  }

  // 如果不符合要求，则返回错误信息
  cb(new Error("文件类型不支持") as any, false); // 终止上传并返回错误
};

// 配置 Multer
const upload = multer({
  storage, // 文件存储配置
  limits: { fileSize: 10 * 1024 * 1024 }, // 限制文件最大为 10MB
  fileFilter, // 使用文件类型过滤器
});

export default upload;
