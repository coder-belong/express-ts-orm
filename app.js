const express = require("express");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const cors = require("cors");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // 明确的允许的来源，不能设置为 *
    methods: ["GET", "POST", "PUT", "DELETE"], // 明确允许的方法，不能设置为 *
    credentials: true, // 允许携带凭证（如 Cookie）
  }),
);

// 设置 cookie
app.get("/set-cookie", (req, res) => {
  // 设置名为 'username' 的 cookie，有效期为 7 天
  res.cookie("username", "belong", { path: "/", expires: moment().add(7, "day").toDate() });
  res.json({ code: 1, message: "ok" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
