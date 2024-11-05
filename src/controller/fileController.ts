import type { Request, Response } from "express";
export default class FileController {
  static uploadFile = async (req: Request, res: Response): Promise<any> => {
    res.json({ code: 1, message: "文件上传成功", data: req.files });
  };

  // 上传失败的处理
  static handleUploadFileError = async (error: any, req: Request, res: Response, next: any): Promise<any> => {
    res.json({ code: 0, message: `文件上传失败: ${error.message}` });
  };
}
