
const router = require('express').Router()


const userController = require('./../../controllers/userController');
const middleware = require('./../../middleware/auth/token');



router.get('/all', [middleware.CheckToken],userController.index)
router.post('/insert' ,userController.store)
router.get('/find/:userId', userController.show)
router.put('/update/:userId', userController.update)
router.delete('/delete/:userId', userController.destroy)

module.exports = router;
