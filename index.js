var crypto = require('crypto');
var express = require('express'),
    app = express();

// 解析器
app.use(express.bodyParser());

// 接入验证
app.get('/', functionvalidateToken {

    // 签名成功
    if (validateToken(req, res)) {
        res.send(200, req.query.echostr);
    } else {
        res.send(200, 'fail');
    }
});

function sha1(str) {
    var md5sum = crypto.createHash('sha1');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}；

function validateToken(req, res) {
    var query = req.query;
    var signature = query.signature;
    var echostr = query.echostr;
    var timestamp = query['timestamp'];
    var nonce = query.nonce;
    var oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = "luluwechat";//这里填写你的token
    oriArray.sort();
    var original = oriArray[0]+oriArray[1]+oriArray[2];
    console.log("Original Str:"+original);
    console.log("signature:"+signature);
    var scyptoString = sha1(original);
    if (signature == scyptoString) {
        res.send(echostr);
    }
    else {
        res.send("Bad Token!");
    }
}