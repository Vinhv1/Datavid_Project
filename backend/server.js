import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import routers from './routes/routes.js'
dotenv.config()


const app = express()


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST)
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection failed')
    }
}

dbConnection()
app.use(cors())
app.use(express.json())
app.listen(process.env.PORT,() => {console.log('Server is running on port 4000')})
app.use("/api", routers)