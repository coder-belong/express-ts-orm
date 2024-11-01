const mysql = require("mysql2");

// 创建数据库连接池
const pool = mysql.createPool({
  host: "localhost", // 数据库主机
  user: "root", // 数据库用户名
  password: "12345678", // 数据库密码
  database: "study_mysql", // 数据库名称
  waitForConnections: true,
  connectionLimit: 10, // 最大连接数
  queueLimit: 0,
});

pool.getConnection((err) =>
  console.log(err ? `连接数据库失败` : "连接数据库成功")
);

// 使用 Promise 包装连接池，支持异步操作
const promisePool = pool.promise();
module.exports = promisePool;
