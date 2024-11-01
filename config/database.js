const { Sequelize } = require("sequelize");

// 创建 Sequelize 实例
const sequelize = new Sequelize("study_mysql", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

// 测试连接
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("数据库连接成功");
  } catch (error) {
    console.error("数据库连接失败:", error);
  }
}

testConnection();

module.exports = sequelize;
