var express = require('express');
var router = express.Router();
var proyectoController = require("../controllers/proyectoControllers")


/* GET home page. */
router.get('/',proyectoController.index); 
module.exports = router;
