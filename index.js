const express = require('express')
require('dotenv').config()
const app = express()
// const port = 3000  //this is done for production level deployment. this app can be used by multiple user and they have different devices.
// in that case there is possiblity that there port 3000 is already in use and in busy so our app won't work on there machine
//to tackle this we are using .env package

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send('<input type="email" name="email" placeholder="Enter email" required   ><input type="password" name="password" placeholder="Enter password" required   >')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})