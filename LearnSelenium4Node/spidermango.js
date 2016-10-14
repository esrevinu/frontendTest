/**
 * Created by lis2 on 2016/10/14.
 */
var url = "http://localhost/task35/task35.html";

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get(url);
driver.findElement(By.css('textarea')).sendKeys(_generateActions());
driver.sleep(5000);
driver.findElement(By.css('input[value="执行"]')).click();


// driver.wait(until.titleIs('webdriver_百度搜索'), 5000);
// driver.quit();
function _generateActions(){
    var MAX_STEP = 3;
    var ACTION_ROW = 3;
    var actionArr = [
        "GO",
        "TUN LEF","TUN RIG","TUN BAC",
        "TRA LEF","TRA TOP","TRA RIG","TRA BOT",
        "MOV LEF","MOV TOP","MOV RIG","MOV BOT"
    ];
    var finalAction="",action = "";
    var step = 0;
    for(var i = 0 ; i < ACTION_ROW ; i++){
        step = Math.floor(Math.random()*MAX_STEP)+1;
        action = actionArr[Math.floor(Math.random()*actionArr.length)]+" "+ step + "\n";
        // console.log(`N.O.${i+1}: ${action}`);
        finalAction += action;
    }
    console.log(`Final actions is:\n${finalAction}`);
    return finalAction;
}