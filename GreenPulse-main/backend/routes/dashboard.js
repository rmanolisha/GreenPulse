const express = require('express');
const router = express.Router();

const dashboardStats = {
  citizen: {
    carbonReductionEstimate: "1.5 Tonnes CO2/year",
    greenPoints: 450,
    sustainabilityRecommendations: [
      "Switch to LED bulbs to save 15% on lighting energy",
      "Install a rooftop solar system for long-term savings",
      "Consider an electric two-wheeler for your daily commute"
    ]
  },
  government: {
    solarAdoptionProgress: "82.6 GW (75% of 2030 target)",
    evGrowthPercentage: "18.5% year-on-year",
    renewableEnergyMix: {
      solar: "45%",
      wind: "25%",
      hydro: "20%",
      biomass: "10%"
    },
    policyPerformanceSummary: [
      { policy: "PM Surya Ghar", performance: "Exceeding expectations", applicants: 1200000 },
      { policy: "FAME India", performance: "Steady growth", registrations: 250000 },
      { policy: "Green India Mission", performance: "On track", hectaresCovered: 500000 }
    ]
  }
};

// GET citizen dashboard stats
router.get('/citizen', (req, res) => {
  res.json(dashboardStats.citizen);
});

// GET government dashboard stats
router.get('/government', (req, res) => {
  res.json(dashboardStats.government);
});

module.exports = router;
