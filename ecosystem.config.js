module.exports = {
  apps: [
    {
      name: "my-express-app", // 你可以自定义应用名称
      script: "ts-node-dev", // 使用 ts-node-dev 作为启动脚本
      args: "-r tsconfig-paths/register --respawn --watch .ts ./src/index.ts", // 命令行参数
    },
  ],
};
