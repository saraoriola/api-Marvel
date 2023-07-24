const express = require('express');
const MovieController = require('../controllers/movies');
const router = express.Router();

router.post('/', MovieController.createMovie);

module.exports = router;