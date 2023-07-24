const express = require('express');
const MovieController = require('../controllers/movies');
const router = express.Router();

router.post('/', MovieController.create);

module.exports = router;