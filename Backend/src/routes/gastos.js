const express = require('express');
const app = express();
const router = express.Router()
const { Client } = require('pg');
const { getGastos, setGastos } = require('../controllers/index.controllers'); 

router.get('/', getGastos); 
router.post('/', setGastos);

module.exports = router; 