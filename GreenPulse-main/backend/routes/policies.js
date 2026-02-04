const express = require('express');
const router = express.Router();
const policies = require('../data/policies.json');

// GET all policies
router.get('/', (req, res) => {
  res.json(policies.map(p => ({ 
    id: p.id, 
    name: p.name, 
    category: p.category, 
    description: p.description 
  })));
});

// GET policy by ID
router.get('/:id', (req, res) => {
  const policy = policies.find(p => p.id === parseInt(req.params.id));
  if (!policy) return res.status(404).json({ error: "Policy not found" });
  res.json(policy);
});

module.exports = router;
