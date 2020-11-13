const express = require('express');
const router = express.Router();
const cakeRoutes = require('./cakeRoutes');

router.get('/', (req,res) => res.status(200).send({message: 'Server on'}));
router.use(cakeRoutes);

module.exports = router