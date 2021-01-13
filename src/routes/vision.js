var express = require('express');
var router = express.Router();
var visionController = require("../controllers/visionControllers")


/* GET home page. */
router.get('/',visionController.index); 
module.exports = router;
