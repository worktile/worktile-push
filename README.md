# lesschat-push for Node.js
发送消息到纷云 message to lesschat - 纷云


```
var lesschatPush = require("lesschat-push");
var webhook = new lesschatPush.Webhook("https://hook.lesschat.com/incoming/xxxxxx"); // 纷云 outgoing url

// 发送 attachment 消息
webhook.sendAttachment({
    fallback   : "用于移动端将提示信息显示在首页上",
    color      : "#cccccc",  //将消息的正文用指定的颜色进行标示
    pretext    : "在显示消息正文之前显示的文本内容",
    author_name: "Terry Lee",  //用于显示作者名
    author_link: "https://github.com/terrylee",  //作者主页超链接
    author_icon: "https://avatars1.githubusercontent.com/u/694592?v=3&s=400",  //作者
    title      : "消息正文标题",
    title_link : "http://lesschat.com",
    text       : "普通文本消息，支持\n换行",

    //多区域格式消息正文
    fields     : [
        {
            title: "分区消息标题",
            value: "分区消息内容",
            short: 1 // 标识消息的内容时候时候为短消息
        }
    ]
});

// 发送文本消息
webhook.sendText("这是一条来自于Incoming Webhook的消息。\n并且消息还可以换行。");
```