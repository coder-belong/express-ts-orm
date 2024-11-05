import express from "express";
import "../config/database"; // 加载代码，确保模型对象被 sequlize 注册
import UserController from "./controller/userController";
import authMiddleware from "./middleware/auth";
import FileController from "./controller/fileController";

const app = express();
const PORT = 3000;

// 中间件
app.use(express.json());
app.use(authMiddleware);

// 用户管理
app.post("/login", UserController.login);
app.get("/user", UserController.getUserList);
app.post("/user", UserController.create);
app.put("/user/:id", UserController.update);
app.delete("/user/:id", UserController.destory);

// 文件上传
app.post("/uploadFile", FileController.uploadFile);

// 启动服务器
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
