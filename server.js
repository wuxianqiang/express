const express = require('./express')
const app = express()

app.use('/home', (req, res) => {
  res.end('home')
})

app.listen(8080, () => {
  console.log('port created successfully')
})
