import cron from "node-cron";
import { cleanOldFiles } from "./fileTask";

// 启动任务
const startScheduledTasks = () => {
  // setInterval(cleanOldFiles, 5000); // 每 5 秒执行一次
  cron.schedule("0 12 * * *", cleanOldFiles); // 每天中午 12点 执行一次
};

startScheduledTasks(); // 启动定时任务
