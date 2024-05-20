const express = require('express');
const router = express.Router();

router.get('/token', (req, res) => {
  const { id, token, AppID, AppSecret, Cookie } = req.query;

  // 验证token逻辑
  res.json({ Message: 'OK' });
});

router.get('/expand', (req, res) => {
  const { token, time, AppID, AppSecret } = req.query;

  // 续期逻辑
  res.json({});
});

module.exports = router;
