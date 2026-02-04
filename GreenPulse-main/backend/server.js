const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Route Imports
const policyRoutes = require('./routes/policies');
const applicationRoutes = require('./routes/applications');
const datasetRoutes = require('./routes/datasets');
const dashboardRoutes = require('./routes/dashboard');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/policies', policyRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/datasets', datasetRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to GreenPulse India API",
    version: "1.0.0",
    endpoints: [
      "/api/policies",
      "/api/applications",
      "/api/datasets",
      "/api/dashboard/citizen",
      "/api/dashboard/government"
    ]
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`GreenPulse India Server is running on port ${PORT}`);
});
