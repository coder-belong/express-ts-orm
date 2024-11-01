const express = require("express");
const db = require("./config/db"); // 导入数据库连接池
const app = express();

app.use(express.json()); // 解析 JSON 格式的请求体

app.get("/users/list", async (req, res) => {
  const sql = "SELECT * FROM user"; // 查询所有用户信息

  try {
    const [rows] = await db.query(sql); // 执行 SQL 查询
    res.json({ code: 1, data: rows }); // 返回查询结果
  } catch (error) {
    console.error("Database error:", error);
    res.json({ code: 0, message: "Database query failed" });
  }
});

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id; // 从请求参数中获取用户 ID
  const sql = "SELECT * FROM user WHERE id = ?"; // 使用占位符避免 SQL 注入

  try {
    const [rows] = await db.query(sql, [userId]); // 执行查询
    res.json({ code: 1, data: rows[0] }); // 返回找到的用户信息
  } catch (error) {
    console.error("Database error:", error);
    res.json({ code: 0, message: "Database query failed" });
  }
});

// 这个有问题
app.get("/users/search", async (req, res) => {
  const name = req.query.name; // 从查询参数中获取用户名
  const sql = "SELECT * FROM user WHERE name LIKE ?"; // 使用占位符进行安全查询

  try {
    const [rows] = await db.query(sql, [`%${name}%`]); // 执行模糊查询
    res.json({ code: 1, data: rows }); // 返回查询结果
  } catch (error) {
    console.error("Database error:", error);
    res.json({ code: 0, message: "Database query failed" });
  }
});

app.get("/users/multiple", async (req, res) => {
  const userIds = req.query.ids.split(",").map(Number); // 从查询参数中获取多个用户 ID，并转换为数字数组
  const sql = "SELECT * FROM user WHERE id IN (?)"; // 使用 IN 进行多选查询

  try {
    const [rows] = await db.query(sql, [userIds]); // 执行查询
    res.json({ code: 1, data: rows }); // 返回查询结果
  } catch (error) {
    console.error("Database error:", error);
    res.json({ code: 0, message: "Database query failed" });
  }
});

app.get("/users/pageList", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // 当前页码，默认值为1
  const pageSize = parseInt(req.query.pageSize) || 10; // 每页显示的数量，默认值为10
  const offset = (page - 1) * pageSize; // 计算偏移量

  const sql = "SELECT * FROM user LIMIT ? OFFSET ?"; // 使用 LIMIT 和 OFFSET 进行分页查询

  try {
    const [rows] = await db.query(sql, [pageSize, offset]); // 执行查询
    res.json({ code: 1, data: rows }); // 返回查询结果
  } catch (error) {
    console.error("Database error:", error);
    res.json({ code: 0, message: "Database query failed" });
  }
});

// 插入数据
app.post("/users", async (req, res) => {
  const { name, age, sex } = req.body; // 假设请求体中包含用户数据

  try {
    const [result] = await db.query(
      "INSERT INTO user (name, age, sex) VALUES (?, ?, ?)",
      [name, age, sex]
    );
    res.json({ code: 1, message: "用户添加成功" });
  } catch (error) {
    console.error("插入数据错误:", error);
    res.json({ code: 0, message: "用户添加失败" });
  }
});

// 更新数据
app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, age, sex } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE user SET name = ?, age = ?, sex = ? WHERE id = ?",
      [name, age, sex, userId]
    );
    res.json({ code: 1, message: "用户更新成功" });
  } catch (error) {
    console.error("更新数据错误:", error);
    res.json({ code: 0, message: "用户更新失败" });
  }
});

// 删除数据
app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const [result] = await db.query("DELETE FROM user WHERE id = ?", [userId]);
    res.json({ code: 1, message: "用户删除成功" });
  } catch (error) {
    console.error("删除数据错误:", error);
    res.json({ code: 0, message: "用户删除失败" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
