import express from 'express'
import dotenv from 'dotenv'
import configViewEngine from './config/viewEngine.js'
import initwebroute from './route/web.js'
import connectDB from './config/ConnectDB'
dotenv.config()
const app = express()
const port = process.env.PORT || 8080
console.log(port)
//cau hinh View
configViewEngine(app);

// nhan du lieu tu form su dung bodyparser co san trong nodejs tu phien ban 4.16
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

initwebroute(app) //cau hinh route
//connect DB ben ConnectDb.js
connectDB()
app.listen(port, () => {
    console.log("server dang chay tren link: http://localhost:8080")
})


