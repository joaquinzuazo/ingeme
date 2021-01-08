var express = require('express');
var router = express.Router();
var loginController = require("../controllers/loginControllers")


/* GET home page. */
router.get('/',loginController.vista); 
router.post('/',loginController.login); 

module.exports = router;
