var express = require('express')
var crypto = require('crypto')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


var isLegel = function (signature, timestamp, nonce) {
    var TOKEN = 'luluwechat';
    var arr = [TOKEN, timestamp, nonce];
    // 对三个参数进行字典序排序
    arr.sort();
    // sha1 加密
    var sha1 = crypto.createHash('sha1');
    var msg = arr[0] + arr[1] + arr[2];
    sha1.update(msg);
    msg = sha1.digest('hex');
    // 验证
    if(msg == signature) {
        console.log('验证成功');
        return true;
    } else {
        console.log('验证失败');
        return false;
    }
};