const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')


router.get('/', mainController.home)
router.get('/login', mainController.login)
router.get('/register', mainController.register)
router.get('/listaDeDesejos', mainController.listaDeDesejos)
router.get('/carrinho', mainController.carrinho)
router.get('/produtoInterno', mainController.produtoInterno)
router.get('/finalizeCompra', mainController.finalizeCompra)
router.get('/listagemDeProduto', mainController.listagemDeProduto)


module.exports = router;