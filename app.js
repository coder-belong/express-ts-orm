const express = require("express");
// const db = require("./config/db"); // 导入数据库连接池
const UserModel = require("./model/UserModel");
const { Op } = require("sequelize");
const moment = require("moment");

const app = express();
app.use(express.json()); // 解析 JSON 格式的请求体

// 查询所有用户
app.get("/user/list", async (req, res) => {
  const userList = await UserModel.findAll();
  res.json({ code: 1, data: userList });
});

// 查询特定用户
app.get("/getOneUser/:id", async (req, res) => {
  const { id } = req.params;
  const user = await UserModel.findOne({ where: { id } });
  res.json({ code: 1, data: user });
});

// 分页查询
app.get("/user/pageList", async (req, res) => {
  const { currentPage = 1, pageSize = 10 } = req.query;

  const { rows, count } = await UserModel.findAndCountAll({
    limit: Number(pageSize),
    offset: (Number(currentPage) - 1) * Number(pageSize),
  });

  res.json({ code: 1, data: rows, total: count });
});

// 条件查询
app.get("/user/filter", async (req, res) => {
  const { age, sex } = req.query;

  const users = await UserModel.findAll({
    where: {
      age,
      sex,
    },
  });

  res.json({ code: 1, data: users });
});

// 模糊查询
app.get("/user/search", async (req, res) => {
  const { name } = req.query;

  const users = await UserModel.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });

  res.json({ code: 1, data: users });
});

// 多选查询
app.get("/user/multiple", async (req, res) => {
  const { ids = "1,2,3" } = req.query; // ids 应为以逗号分隔的字符串，例如 "1,2,3"

  const userIds = ids.split(",").map((id) => Number(id));

  const users = await UserModel.findAll({
    where: {
      id: {
        [Op.in]: userIds,
      },
    },
  });

  res.json({ code: 1, data: users });
});

// 日期区间查询
app.get("/user/date-range", async (req, res) => {
  const { startDate = "2024-09-23", endDate = "2024-09-28" } = req.query;

  try {
    const userList = await UserModel.findAll({
      where: {
        created_at: {
          // 区间为：[startDate 00:00:00, (endDate + 1days) 00:00:00)]
          [Op.between]: [moment(startDate), moment(endDate).add(1, "days")],
        },
      },
    });

    res.json({ code: 1, data: userList });
  } catch (error) {
    console.error("查询错误:", error);
    res.json({ code: 0, message: "查询失败" });
  }
});

// 排序查询
app.get("/user/sort", async (req, res) => {
  const { sortField = "age", sortOrder = "ascend" } = req.query;

  try {
    const userList = await UserModel.findAll({
      order: [[sortField, sortOrder === "ascend" ? "ASC" : "DESC"]],
    });

    res.json({ code: 1, data: userList });
  } catch (error) {
    console.error("查询错误:", error);
    res.json({ code: 0, message: "查询失败" });
  }
});

// 创建用户
app.post("/user", async (req, res) => {
  const { name, age, sex } = req.body;
  try {
    const user = await UserModel.create({ name, age, sex });
    res.json({ code: 1, data: user });
  } catch (error) {
    console.error("创建用户失败:", error);
    res.json({ code: 0, message: "创建用户失败" });
  }
});

// 批量创建用户
app.post("/user/batch", async (req, res) => {
  const { userList } = req.body;

  try {
    const users = await UserModel.bulkCreate([...userList]);
    res.json({ code: 1, data: users });
  } catch (error) {
    console.error("创建用户失败:", error);
    res.json({ code: 0, message: "创建用户失败" });
  }
});

// 更新用户
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, sex } = req.body;
  try {
    await UserModel.update({ name, age, sex }, { where: { id } });
    const updatedUser = await UserModel.findByPk(id);
    res.json({ code: 1, data: updatedUser });
  } catch (error) {
    console.error("更新失败:", error);
    res.json({ code: 0, message: "更新用户失败" });
  }
});

// 删除用户
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.destroy({ where: { id } });
    res.json({ code: 1, message: "用户删除成功" });
  } catch (error) {
    console.error("删除失败:", error);
    res.json({ code: 0, message: "删除用户失败" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
