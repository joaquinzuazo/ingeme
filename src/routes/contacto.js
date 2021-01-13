var express = require('express');
var router = express.Router();
var contactoController = require("../controllers/contactoControllers")


/* GET home page. */
router.get('/',contactoController.index); 
router.post('/envio',contactoController.envio); 
module.exports = router;
