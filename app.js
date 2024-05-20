const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 路由文件
const loggerRouter = require('./routes/logger');
const loginRouter = require('./routes/login');
const hbRouter = require('./routes/hb');
const registerRouter = require('./routes/register');
const logRouter = require('./routes/log');
const authRouter = require('./routes/auth');
const totpRouter = require('./routes/totp');

// 使用路由
app.use('/logger', loggerRouter);
app.use('/login', loginRouter);
app.use('/hb', hbRouter);
app.use('/register', registerRouter);
app.use('/log', logRouter);
app.use('/auth', authRouter);
app.use('/totp', totpRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
