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
app.get('/', (res, res, next) => {
    //...
})
app.listen(8080, () => {
  console.log('port created successfully')
})
```
