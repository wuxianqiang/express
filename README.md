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
## 处理session
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
## 路由处理
```js
//https://xxx.com/user/1.html
//https://xxx.com/user/2.html

const routerUser = express.Router()
server.use("/user", routerUser)
routerUser.get("/1.html", function (req, res) {
  res.send("1")
})
routerUser.get("/2.html", function (req, res) {
  res.send("2")
})
```
## 模板适配
```js
const consolidate = require('consolidate')
server.set("view engine", "html"); // 以什么形式输出给用户
server.set("view", "模板目录"); //指定模板存放的位置
server.engine("html", consolidate.ejs) //指定html使用ejs模板引擎来做

//当接收到请求的时候
server.use(function () {
  res.render("模板文件", "数据") //指定要输出哪个模板文件
})
```
