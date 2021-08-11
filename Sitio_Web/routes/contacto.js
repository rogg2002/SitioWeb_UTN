var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto:true });
});

router.post('/', async(req, res, next) => {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  console.log(req.body);

  var obj = {
    to: 'rogg2002@hotmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " se ha contactado a travez de la web y quiere mas información a este correo : " + email + ". <br> Además, hizo este comentario : " + mensaje

  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('contacto', {
      message: 'El mensaje se envió correctamente'
  });


});

module.exports = router;