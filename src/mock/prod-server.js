var express = require('express');
var Mock = require('mockjs');
//var config = require('../config/index');
var port = 9000//process.env.PORT || config.build.port;
var app = express();

const Random = Mock.Random;
//fetch跨域请求的设置
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Credentials","true");
  next();
});

var apiRoutes = express.Router();

/*
通过cmd进入项目目录，使用node命令运行文件即可进行访问
例：cd   C:\vuetest\wisdomwebsite
    node src/mock/prod-server.js
*/
apiRoutes.all('/head',function(req,res){
  res.json(Mock.mock({
    "headImg":"@IMG('590x150',@color())",//生成大小为590x150，颜色随机的图片
    "pages|8":["@ctitle(2,4)"]             //生成长度为8的数组,每个元素都是长度为2-4的中文字符
  }))
});


apiRoutes.all('/home',function(req,res){
  res.json(Mock.mock({
    "headImg|4":["@IMG('590x150',@color())"],
    "news|100":[{
      "date":"@date('yyyy/MM/dd')", //生成日期
      "title":"@ctitle( 5, 15 )"
    }],
    "contacts":{
      'postCode':'〒240-0002',
      'address': '神奈川県横浜市保土ヶ谷区宮田町2-181武井ビル2階A',
      'tel':'045-442-5908',
      'fax':'045-442-5938',
      'email':'info@wisdom-japan.com'
    }

  }))
});
apiRoutes.all('/wisdom',function(req,res){
  res.json(Mock.mock({
    "data|10":[{
      "key":"@ctitle( 3, 10)",
      "value|1-5":[{
        "text":"@csentence( 10, 20)",
        "link":"@url()"  //生成一个链接
      }]
    }]
  }))
});
app.use('/api', apiRoutes);


module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n');
});
