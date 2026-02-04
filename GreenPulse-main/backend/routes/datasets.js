const express = require('express');
const router = express.Router();
const datasets = require('../data/datasets.json');

// GET all datasets
router.get('/', (req, res) => {
  res.json(datasets);
});

module.exports = router;
