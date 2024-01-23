import express from 'express'
import env from 'dotenv'
import GoogleRoute from './routes/Google.js'
import TollGuruRoute from './routes/Toll.js'
import cors from 'cors'
import path from 'path'
import {fileURLToPath} from 'url
env.config()
let app=express()

const __filename=fileURLToPath(import.meta.url)
const __direname=path.dirname(__filename)
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../front/build')))


app.use('/polyline',GoogleRoute)
app.use('/polyline',TollGuruRoute)

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'../front/build/index.html'))
})

let start=()=>
{
    app.listen(process.env.PORT || 2000,()=>
    {
        console.log(`Listening to port ${process.env.PORT || 2000}`)
    })
}

start()
