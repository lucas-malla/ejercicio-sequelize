const express = require('express');
const router = express.Router();
const multer = require("multer");
const { check } = require("express-validator");//_10pasamos a validar 
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);

router.get ("/movies/update/:id",moviesController.edit)
router.post("/movies/update/:id",[
    check('title').notEmpty().withMessage("Debe ingresar TITULO Completo")
    .bail(),
    check('rating').notEmpty().withMessage('Debe ingresar Rating'),
    check('awards').notEmpty().withMessage("Los awards debe estar completo")
],moviesController.update);

router.get('/movies/add', moviesController.add);
router.post('/movies/altaPeli',[    
    check('title').notEmpty()
    .withMessage("Debe ingresar TITULO Completo")
    .bail()
    .custom (function(value){
        return db.Movie.findOne({
            where :{
                title:value
            }
        } )
        .then (movie => {
            if(movie){
                return Promise.reject(" La Película ya está en la BASE")                 
            }
        })
        })   
,
    check('rating').notEmpty().withMessage('Debe ingresar Rating'),
    check('awards').notEmpty().withMessage("Los awards debe estar completo"),
 check('release_date').notEmpty().withMessage("Campo FECHA  debe estar completo")       

       
],moviesController.altaPeli);



//
//router.???('', moviesController.edit);
//router.???('', moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.post('/movies/destroy/:id', moviesController.destroy);

module.exports = router; 