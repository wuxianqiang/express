# express

```js
const express = require('express')
const app = express()
app.listen(8080, () => {
  console.log('port created successfully')
})
```
express会把所有的请求方式都作为方法挂载到app对象中，客户端发送请求并且会执行对应的回调函数
```js
const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
    res.send("ok")
})
app.listen(8080, () => {
  console.log('port created successfully')
})
```
## 接收GET数据
```js
const express = require('express')
const app = express()
app.get('/', (req, res, next) => {
    let GET = req.query
    console.log(GET)
    res.send("ok")
})
app.listen(8080, () => {
  console.log('port created successfully')
})
```
## 接收POST数据
```js
const bodyParser = require(body-parser)
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res, next) => {
    let POST = req.body
    console.log(POST)
    res.send("ok")
})
app.listen(8080, () => {
  console.log('port created successfully')
})
```
## 处理cookie
```js
const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
app.use(cookieParser("qianmingzifuchuang"))
app.use("/", (req, res) => {
    req.secret = "qianmingzifuchuang"
    res.cookie("password", "123456", {
        signed: true
    })
    console.log('未签名cookies', req.cookies)
    console.log('签名cookies', req.signedCookies)
    res.send("ok")
})
app.listen(8080, () => {
    console.log("successfully!")
})
```
```js
const cookieSession = require('cookie-session')
const express = require('express')
const app = express()
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
 
app.get('/', function (req, res, next) {
  req.session.views = 1
  res.send("ok")
})
 
app.listen(3000)
```
