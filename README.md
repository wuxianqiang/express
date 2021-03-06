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
app.use("/user", routerUser)
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
app.set("view engine", "html");
app.set("view", "./template");
app.engine("html", consolidate.ejs)

app.get('/', function () {
  res.render("index.ejs", {})
})
```
## 处理文件
```js
app.use(express.static('./dist'))
```
## 处理404
```js
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, './404.html'))
})
```
