const express = require('express');
const app = express()
const connectDB = require('./config/db')

const post = require('./routes/post')

//khoi dong midleware express

app.use(express.json());

//ket noi co so du lieu ket noi DB
connectDB()

app.use('/post', post)


const PORT = 4000;

app.listen(PORT, () => console.log(`server runing ${PORT}`))