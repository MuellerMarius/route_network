const express = require('express');
const { getAirportData } = require('../controllers/airports');

const router = express.Router();

router.route('/:id').get(getAirportData);

module.exports = router;
