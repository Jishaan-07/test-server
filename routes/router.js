const express = require('express')
const userController = require('../controller/userController')


const router = new express.Router()

// register -post
router.post('/register',userController.registerController)

// login -post
router.post('/login',userController.loginController)



// allusers -post
router.get('/allusers',userController.allUsers)

module.exports = router