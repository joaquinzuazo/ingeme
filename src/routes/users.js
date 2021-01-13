var express = require('express');
var router = express.Router();
var usersController = require("../controllers/usersControllers")


/* GET home page. */
router.get('/',usersController.index);
router.get('/obras',usersController.obras);
router.get('/obras',usersController.obras);
router.get('/obras/:id/reportes',usersController.otros);
router.get('/obras/:id/datos',usersController.datos);

router.get('/documentacion',usersController.otros);
router.get('/equipos',usersController.otros);
router.get('/mantenimiento',usersController.otros);
router.get('/ayuda',usersController.otros);

module.exports = router;
