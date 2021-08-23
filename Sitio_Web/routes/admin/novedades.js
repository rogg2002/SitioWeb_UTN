var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


// var novedades = require ('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  var novedades = await novedadesModel.getNovedades();
  
  res.render('admin/novedades', {
      layout : 'admin/layout' ,
      usuario : req.session.nombre,
      novedades
  });
});

//----contorlador para Eliminar novedades-----

router.get('/eliminar/:id', async (req, res,next) => {
  var id = req.params.id;

  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');  
});
//--------------------------------------------------

//--------controlador para Agregar noveddades-------
router.get('/agregar', (req, res,next) => {
  res.render('admin/agregar', { //llama a agregar.hbs
    layout: 'admin/layout'
  })
});

//---contorlador de agregar----
router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo !=""){
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout', 
        error : true,
        message: ' Falta agregar información'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se a podido cargar la novedad'
    })
  }
})

//---------------------------------------------------

//-----modificar novedades---------------------------

//----listar la novedad-------
router.get('/modificar/:id', async (req, res,next) => {
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesById(id);
    
  res.render('admin/modificar',{
    layout: 'admin/layout',
    novedad
  })
});

//---modificar la novedad----
router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)
    await novedadesModel.modificarNovedadesById(obj, req.body.id);
    res.redirect('/admin/novedades');


  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se a podido modificar la novedad'
    })
  }
})



module.exports = router;