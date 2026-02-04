const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory storage for applications
let applications = [
  {
    id: uuidv4(),
    userDetails: { name: "Aarav Sharma", email: "aarav@example.com" },
    selectedScheme: "PM Surya Ghar Rooftop Solar",
    documents: ["aadhaar.pdf", "electricity_bill.pdf"],
    status: "Approved",
    submittedAt: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    id: uuidv4(),
    userDetails: { name: "Priya Patel", email: "priya@example.com" },
    selectedScheme: "FAME India (EV)",
    documents: ["driving_license.pdf", "vehicle_invoice.pdf"],
    status: "Under Review",
    submittedAt: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

// POST a new application
router.post('/', (req, res) => {
  const { userDetails, selectedScheme, documents } = req.body;
  const newApplication = {
    id: uuidv4(),
    userDetails,
    selectedScheme,
    documents,
    status: "Applied",
    submittedAt: new Date().toISOString()
  };
  applications.push(newApplication);
  res.status(201).json(newApplication);
});

// GET all applications
router.get('/', (req, res) => {
  res.json(applications);
});

module.exports = router;
