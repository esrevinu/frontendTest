#HTML5 VS HTML4

##HTML4的缺陷
- Web浏览器之间兼容性差
- 文档结构不明确（太多DIV）
- Web应用程序功能受限（同时只能上传单个文件）

##具体变化

####语法变化
- DOCTYPE声明
- 指定字符编码
```
<!DOCTYPE html>
<html>
<head lang="en">
    <!--For html4-->
    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
    <!--For html5-->
    <meta charset="UTF-8">
</head>
<body>
</body>
</html>
```

- 可以省略标记的元素
- 具有boolean值的属性
- 省略引号

```
    <input type="checkbox" checked>
    <input type="checkbox" checked="">
    <input type="checkbox" checked="checked">
    <input type="checkbox" checked=checked>
    
    <input type="checkbox">
```

####新增元素
- 新增的结构元素
    - section,article,aside,header,hgroup,footer,nav,figure
- 新增的其他元素
    - video,audio,embed,mark,progress,meter,time,ruby,rt,rp,wbr,canvas,command,details,datalist,datagrid,keygen,output,source,menu
- 新增的input元素类型
    - email,url,number,range,Date Pickers
    
####废除元素    
- 可以使用css替代的元素
    - basefont,big,center,font,s,tt,u
- 不再使用frame
- 只有部分浏览器支持的元素
- 其他

####新增属性
- 表单相关属性
- 链接相关属性

####废除属性
 
####全局属性
- contentEditable
- designMode
- hidden
- spellcheck
- tabindex
   