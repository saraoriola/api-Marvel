const express = require('express');
const MovieController = require('../controllers/movies');
const router = express.Router();

router.post('/', MovieController.createMovie);

router.get('/get', MovieController.getAll);

module.exports = router;