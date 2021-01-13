var express = require('express');
var router = express.Router();
var indexController = require("../controllers/indexControllers")


/* GET home page. */
router.get('/',indexController.index); 
router.get('/home',indexController.index); 
module.exports = router;
