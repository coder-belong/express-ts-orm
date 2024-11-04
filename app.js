const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MemoryStore = require("express-session").MemoryStore;

const app = express();
const store = new MemoryStore();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key", // 用于加密 Session ID 的密钥
    resave: false, // 不管 Session 是否被修改，都强制保存
    saveUninitialized: true, // 保存未初始化的 Session
    store: store, // 指定 Session 存储的方式，通常是数据库或内存存储
    name: "my.sid", // 设置存储在 Cookie 中的 Session ID 名称
    cookie: { secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 }, // 配置 Cookie
  }),
);

const mockUserList = [
  { id: 1, username: "admin", password: "123456" },
  { id: 2, username: "belong", password: "123456" },
  { id: 3, username: "zystart", password: "123456" },
  { id: 4, username: "Bob", password: "123456" },
];

// 身份验证的中间件
app.use((req, res, next) => {
  const unInterceptPath = ["/login", "/registry", "/logout"];
  // 判断是否是需要拦截的请求，如果是无需拦截的请求，直接放行
  if (unInterceptPath.includes(req.path)) return next();
  // 基于 Session 进行身份验证
  if (!req.session.userId) return res.json({ code: 0, message: "登录失效或无权限访问" });
  next();
});

// 登录接口
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = mockUserList.find((item) => item.username === username && item.password === password);
  if (!user) {
    return res.json({ code: 0, message: "用户名或密码错误" });
  }
  // 给 cookie 种下 Session ID，并将用户信息存储在 session 中
  req.session.userId = user.id;
  res.json({ code: 1, message: "登录成功" });
});

// 用户列表接口(只有登录后才能查看)
app.get("/user/list", async (req, res) => {
  res.json({ code: 1, data: mockUserList, currentUserId: req.session.userId });
});

// 退出登陆接口
app.get("/logout", (req, res) => {
  req.session.destroy(); // 销毁 Session
  return res.json({ code: 1, message: "退出成功" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
