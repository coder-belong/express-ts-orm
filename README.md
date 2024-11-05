# 基于 Express + TS + ORM 项目基础模板 🚀

这是一个基于 `Express + TypeScript + ORM` 构建的项目基础模板。该模板使用分层架构，包括 `controller`、`service`、`model` 等层，方便项目的扩展和维护。



## 功能特点 🌟

- **Express**：基于 Node.js 的快速 Web 框架。
- **TypeScript**：增强代码的类型安全。
- **ORM**：支持与数据库的对象关系映射，简化数据库操作。
- **分层架构**：清晰分离业务逻辑、数据模型和控制器逻辑，方便项目扩展。
- **JWT 身份验证**：内置身份验证中间件 🔐。
- **Swagger**：生成接口文档，方便 API 文档化 📖。
- **定时任务**：支持定时任务功能 ⏰。
- **环境配置**：集中管理项目配置和环境变量 ⚙️。



## 快速开始 ⚡

### 1. 克隆项目

```bash
git clone https://github.com/coder-belong/study_express.git
cd my-project2 1git clone https://github.com/coder-belong/study_express.git2cd my-projectbash
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动项目

在开发模式下启动项目：

```bash
npm run dev
```

### 4. 使用 PM2 进行生产部署

如果需要使用 PM2 部署生产环境，可以运行以下命令：

```bash
pm2 start ecosystem.config.js
```

## 使用指南 📚

### 代码结构

1. `config/` - 配置文件，集中管理项目的各种配置 📂。
2. `src/controller/` - 控制器层，负责处理 HTTP 请求 🌐。
3. `src/middleware/` - 中间件文件，用于处理请求过程中的通用逻辑（如身份验证） 🛡️。
4. `src/models/` - 数据模型层，定义数据结构和数据库表结构 📊。
5. `src/service/` - 业务逻辑层，封装具体的业务逻辑 🔧。
6. `src/utils/` - 工具函数库，包含一些通用功能 🛠️。
7. `src/schedule/` - 定时任务的相关代码 ⏲️。



### 主要功能

- **JWT 身份验证**：`authMiddleware.ts` 提供用户鉴权功能 🔑。
- **数据库连接**：`database.ts` 中定义数据库连接配置 🔗。
- **工具函数**：`utils/` 目录包含 JWT 操作、密码加密等工具函数 🔒。
- **接口文档**：`swagger.ts` 用于配置 Swagger，生成接口文档 📝。



## 贡献指南 🙌

欢迎提交 Pull Request 或 Issues。如果你有任何问题或建议，欢迎与我们联系 💬。