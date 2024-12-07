const express = require('express')
const userController = require('../controller/userController')
const authenticate = require('../middleware/authentication')


const router = new express.Router()

// register -post
router.post('/register',userController.registerController)

// login -post
router.post('/login',userController.loginController)



// allusers -post
router.get('/allusers',authenticate,userController.allUsers)

module.exports = router