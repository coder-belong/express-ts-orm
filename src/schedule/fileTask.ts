// src/utils/fileUtils.ts
import fs from "fs";
import path from "path";

const uploadDir = path.resolve(process.cwd(), "uploads");

// 清理过期文件
export const cleanOldFiles = () => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error("读取文件夹失败:", err);
      return;
    }

    // 遍历目录中的每个文件
    files.forEach((file) => {
      const filePath = path.join(uploadDir, file);

      // 删除文件
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`删除文件失败: ${file}`, err);
        } else {
          console.log(`成功删除文件: ${file}`);
        }
      });
    });
  });
};
