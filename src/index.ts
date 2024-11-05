import express from "express";
import "../config/database"; // 加载代码，确保模型对象被 sequlize 注册
import UserController from "./controller/userController";
import authMiddleware from "./middleware/auth";
import FileController from "./controller/fileController";
import cors from "cors";
import path from "path";
import appConfig from "../config/appConfig";

const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(process.cwd(), "./uploads")));
app.use(authMiddleware); // 身份验证中间件

// 登录
app.post("/login", UserController.login);

// 用户管理
app.get("/user", UserController.getUserList);
app.post("/user", UserController.create);
app.put("/user/:id", UserController.update);
app.delete("/user/:id", UserController.destory);

// 文件上传
app.post("/uploadFile", FileController.uploadFile);

// 启动服务器
app.listen(appConfig.port, () => console.log(`Server is running at http://localhost:${appConfig.port}`));
