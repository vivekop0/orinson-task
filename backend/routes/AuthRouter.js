const router = require('express').Router();

const {signup} = require('../controllers/AuthController');
const validateRequest = require('../middlewares/AuthValidation');

router.post('/signup',validateRequest,signup);


module.exports = router;