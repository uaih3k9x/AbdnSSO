const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { level, AppID, AppSecret } = req.query;
  const { text } = req.body;
  
  // 处理日志逻辑
  res.json({ Message: 'Logged.' });
});

module.exports = router;
