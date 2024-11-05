import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3000;

// 中间件
app.use(express.json());

// 路由
app.get("/", (req: Request, res: Response): void => {
  // res.send("Hello TypeScript with Express!");
  res.send("Hello TypeScript with Express!123123");
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
