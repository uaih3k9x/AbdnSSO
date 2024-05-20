const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, tel, pass } = req.query;

  // 处理注册逻辑
  res.json({
    Message: '注册成功',
    Name: 'User Example'
  });
});

module.exports = router;
