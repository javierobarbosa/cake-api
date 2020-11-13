const express = require('express');
const router = express.Router()
const cakeController = require('../controllers/cakeController');

router.post('/cakes', cakeController.create);
router.get('/cakes', cakeController.getCakes);
router.get('/cakes/:id', cakeController.getCake);
router.put('/cakes/:id', cakeController.updateCake);
router.delete('/cakes/:id', cakeController.deleteCake);

module.exports = router
