const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

// 第一个参数是定义模型名称，第二个参数是定义模型属性
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false, // 表示 id 不能为空，allowNull的默认值为true
    },
    name: DataTypes.STRING(20), // 如果列只指定了数据类型，那么可以使用简写语法
    age: DataTypes.INTEGER,
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "性别 0:女 1：男",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at", // 笔者建议将数据库中为下划线字段的命令，在模型中统一转为驼峰命名，这是一种规范，虽然你直接用下划线也是可以的，但是不建议这样做
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at", // 你可以通过 'field' 属性指定自定义列名称映射到数据库字段
    },
  },
  {
    tableName: "user", // 设置表名，默认为模型名加复数
    timestamps: false, // true: 自动向每个模型添加 createdAt 和 updatedAt 字段
  },
);

// 导出模型
module.exports = User;
