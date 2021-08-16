var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');// creo ruta a novedadesModel.js

/* GET home page. */
router.get('/', async function(req, res, next) {  //funcion asincronica
  var novedades = await novedadesModel.getNovedades();
  res.render('novedades', {
    isNovedades:true,
    novedades   //habilito var novedades
   });
 });

module.exports = router;