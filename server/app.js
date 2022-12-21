const express = require('express')
const path = require('path')

const uploadRouter = require('./router/upload')
const port = 3000
const app = express()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/upload', uploadRouter)

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`)
})