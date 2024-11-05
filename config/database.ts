// config/database.ts
import { Sequelize } from "sequelize-typescript";
import { UserModel } from "@/model/userModel";

const sequelize = new Sequelize({
  dialect: "mysql", // 数据库类型
  host: "localhost", // 数据库主机
  port: 3306, // 数据库端口
  username: "root", // 数据库用户名
  password: "12345678", // 数据库密码
  database: "study_mysql", // 数据库名称
  timezone: "+08:00", // 时区
  models: [UserModel], // 注册模型对象
});

export default sequelize;
