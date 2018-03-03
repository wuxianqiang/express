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
    //...
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
})
app.listen(8080, () => {
  console.log('port created successfully')
})
```
