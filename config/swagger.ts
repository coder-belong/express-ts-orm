// config/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // OpenAPI 规范版本
    info: {
      title: "API 文档",
      version: "1.0.0",
      description: "描述你的 API",
    },
    servers: [
      {
        url: "http://localhost:3000", // 你的服务器地址
      },
    ],
  },
  apis: [path.join(__dirname, "../app.js")], // 需要包含 API 注释的文件
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
