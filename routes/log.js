const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { level, token } = req.query;
  
  // 获取日志逻辑
  res.send(`2024-05-20 12:00:00 TRACE  LogExample:9 - 这是一个跟踪信息。\n2024-05-20 12:00:00 DEBUG  LogExample:10 - 这是一个调试信息。\n2024-05-20 12:00:00 INFO   LogExample:11 - 这是一个信息日志。\n2024-05-20 12:00:00 WARN   LogExample:12 - 这是一个警告信息。\n2024-05-20 12:00:00 ERROR  LogExample:13 - 这是一个错误信息。\n2024-05-20 12:00:00 FATAL  LogExample:14 - 这是一个致命错误信息。\n2024-05-20 12:00:00 ERROR  LogExample:21 - 除法运算出错: / by zero\n2024-05-20 12:00:00 ERROR  LogExample:28 - 数组越界异常: 3`);
});

module.exports = router;
