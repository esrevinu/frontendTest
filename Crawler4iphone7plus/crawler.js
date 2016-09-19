/**
 * Created by lis2 on 2016/9/19.
 */
// 一些依赖库
var http = require("http"),
    url = require("url"),
    fs = require("fs"),
    superagent = require("superagent"),  //发起GET请求
    cheerio = require("cheerio"),  //将请求的网页利用类似jQuery语法处理
    eventproxy = require('eventproxy');

var ep = new eventproxy(),
    // reserveUrl = "https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability?channel=1";
    availableUrl = "https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability.json",
    storeMap = {
        'R401':'上海环贸 iapm',
        'R581':'五角场',
        'R359':'南京东路',
        'R389':'浦东',
        'R683':'环球港',
        'R390':'香港广场',
        // 'R471':'杭州西湖'
    },
    modelMap = {
        'MNFU2CH/A':'iPhone 7 Plus 128GB 亮黑色',
        'MNG02CH/A':'iPhone 7 Plus 256GB 亮黑色',
        'MNFR2CH/A':'iPhone 7 Plus 128GB 金色',
        'MNFX2CH/A':'iPhone 7 Plus 256GB 金色',
        'MNFQ2CH/A':'iPhone 7 Plus 128GB 银色',
        'MNFW2CH/A':'iPhone 7 Plus 256GB 银色',
        'MNFT2CH/A':'iPhone 7 Plus 128GB 玫瑰金色',
        'MNFY2CH/A':'iPhone 7 Plus 256GB 玫瑰金色',
        'MNFP2CH/A':'iPhone 7 Plus 128GB 黑色',
        'MNFV2CH/A':'iPhone 7 Plus 256GB 黑色',
        // 'MNH12CH/A':'iPhone 7 128GB 玫瑰金色'
        };
// 主start程序
function start(){
    function onRequest(req, res){
        // var startTime = new Date();
        var flag = false;
        var count = 1;
        res.setHeader('Content-Type', 'text/html');
        res.write('<head><meta charset="utf-8"/></head>');
        var timer = setInterval(()=>{
            var startTime = new Date();
            superagent.get(availableUrl)
                .end(function(err,pres){
                    if(err){
                        console.log(err);
                    }
                    var availableObject = JSON.parse(pres.text);
                    for(var store in availableObject){
                        for(var model in availableObject[store]){
                            if((availableObject[store][model] == "ALL")&&(storeMap[store])&&modelMap[model]){
                                res.write(`<a href='https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability?channel=1&returnURL=&store=${store}&partNumber=${model}'>${storeMap[store]}-${modelMap[model]}</a>`);
                                res.write('<br/>');
                                flag = true;
                            }
                        }
                    }
                    var endTime = new Date();
                    res.write(`<p>本次刷新消耗了 ${endTime-startTime} ms</p>`);
                    res.write(`<p>已经刷新${count}次</p>`);
                    count++;
                    if(flag || count>=10){
                        if(flag)
                            res.write("<p>已经查到</p>");
                        else
                            res.write("<p>已经刷新10次以上，<strong>人生若只如初见你早就遍体鳞伤</strong></p>");
                        clearInterval(timer);
                        res.end();
                    }
                });
        },1000);
    }
    http.createServer(onRequest).listen(3000);
}
exports.start= start;