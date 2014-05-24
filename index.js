var wechat = require('wechat');

app.use(connect.query()); // Or app.use(express.query());
app.use('/wechat', wechat('luluwechat', function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  }));