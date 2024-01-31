import express from 'express'
import env from 'dotenv'
import GoogleRoute from './routes/Google.js'
import TollGuruRoute from './routes/Toll.js'
import cors from 'cors'
import path from 'path'
import {fileURLToPath} from 'url'
env.config()
let app=express()


app.use(express.json())
app.use(cors())


app.use('/polyline',GoogleRoute)
app.use('/polyline',TollGuruRoute)



let start=()=>
{
    app.listen(process.env.PORT || 2000,()=>
    {
        console.log(`Listening to port ${process.env.PORT || 2000}`)
    })
}

start()
