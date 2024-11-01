app.use(express.json()); // 解析 JSON 格式的请求体
// 插入数据
app.post("/users", async (req, res) => {
  const { name, age, sex } = req.body; // 假设请求体中包含用户数据

  try {
    const [result] = await db.query("INSERT INTO user (name, age, sex) VALUES (?, ?, ?)", [name, age, sex]);
    res.json({ code: 1, message: "用户添加成功" });
  } catch (error) {
    console.error("插入数据错误:", error);
    res.json({ code: 0, message: "用户添加失败" });
  }
});
