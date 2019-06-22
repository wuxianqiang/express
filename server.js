const express = require('./express')
const app = express()

app.use('/home/:id', (req, res) => {
  console.log(req.params)
  res.end('home')
})

app.get('/user', (req, res) => {
  console.log(req.query)
  res.end('user')
})

app.listen(8080, () => {
  console.log('port created successfully')
})
