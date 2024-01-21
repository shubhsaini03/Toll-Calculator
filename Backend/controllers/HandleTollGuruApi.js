import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

let HandleTollGuruApi=async (req,res)=>
{
    let polyline=req.body
    console.log(polyline)
    let headers={
        "x-api-key":process.env.TOLL_GURU_KEY
    }
    try 
    {
        let response = await axios.post(`https://dev.tollguru.com/v1/calc/route`,polyline,{headers});
        return res.send(response.data)
    }
    catch(e)
    {
        console.log(e)
    }
}


export default HandleTollGuruApi