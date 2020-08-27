const router = require('express').Router()


const apiUsers = require('./../routes/api/users')

router.use('/users',apiUsers)


module.exports=router
