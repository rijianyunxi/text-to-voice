# 文字转语音

## 如何使用？

### 安装
```
npm i text-to-voice
```

### 使用

```
const { getParams } = require("text-to-voice")
getParams(text,person)
// text: 转化的句子 
//person 4106=>磁性男声，4118=>年轻女声,4100=>成熟女声，4003=>成熟男声，4115=>性感男声
// 函数执行返回URL：https://baike.baidu.com/wikiui/api/getaudio?text=%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A%E5%95%8A&vol=9&per=4118&time=1655546195&once=07ce2d4&sign=97037bbabddeba9db2124cd2cb141074
// 发起get请求即可
```
## 娱乐娱乐娱乐！！！