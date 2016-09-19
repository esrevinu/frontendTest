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
    storeArr = ['R401','R581','R359','R389','R683','R390'];
// 主start程序
function start(){
    function onRequest(req, res){
        superagent.get(availableUrl)
            .end(function(err,pres){
                if(err){
                    console.log(err);
                }
                res.setHeader('Content-Type', 'text/html');
                // fs.writeFile('reserve.json',pres.text,(err) => {
                //     if(err) throw err;
                //     res.write('Saved to reserve.json');
                //     res.end();
                // });
                var availableObject = JSON.parse(pres.text);
                for(var store in availableObject){
                    for(var model in availableObject[store]){
                        if((availableObject[store][model] == "ALL")&&(storeArr.indexOf(store)!=-1)){
                            res.write(`https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability?channel=1&returnURL=&store=${store}&partNumber=${model}`);
                            res.write('<br/>');
                        }

                    }
                }
                res.write('<h1>SVEN</h1>');
                res.end();


            });


        // ep.after('BlogArticleHtml',function(){
        //     console.log("ABC");
        //     res.write("ABC");
        // });
    }
    http.createServer(onRequest).listen(3000);
}
exports.start= start;