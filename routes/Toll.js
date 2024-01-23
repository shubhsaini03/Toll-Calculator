import express from 'express'
import HandleTollGuruApi from "../controllers/HandleTollGuruApi.js";
let router=express.Router()


router.post('/tollguru',HandleTollGuruApi)


export default router