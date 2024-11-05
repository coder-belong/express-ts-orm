// src/models/UserModel.ts
import { Column, DataType, Model, Table } from "sequelize-typescript";

// 定义 User 模型
@Table({ tableName: "user", timestamps: false }) // 设置表名和禁用时间戳
export class UserModel extends Model<UserModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column(DataType.STRING(20))
  name: string;

  @Column(DataType.STRING(100))
  password: string;

  @Column(DataType.INTEGER)
  age: number;

  @Column({ type: DataType.INTEGER, comment: "性别 0:女 1：男" })
  sex: number;

  @Column({ type: DataType.INTEGER, comment: "状态 0:禁用 1：启用" })
  status: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    field: "created_at", // 将字段名映射为数据库中使用下划线的命名风格
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    field: "updated_at", // 将字段名映射为数据库中使用下划线的命名风格
  })
  updatedAt: Date;
}
