import express from 'express'
import HandleGoogleApi from '../controllers/HandleGoogleApi.js'
let router=express.Router()


router.post('/google',HandleGoogleApi)

export default router