console.log("Application is started.");

const express = require('express')
const app = express()
const port = 3000

app.get()

app.get('/',(req,res)=>{
    console.log("I received a get request on the path//")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
