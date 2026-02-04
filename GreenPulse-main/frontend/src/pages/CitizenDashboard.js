import React, { useState, useEffect } from 'react';
import { Leaf, Award, TrendingDown, CheckCircle, Loader2 } from 'lucide-react';
import { fetchDashboardStats } from '../lib/api';

const CitizenDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchDashboardStats('citizen');
        setStats(data);
      } catch (err) {
        setError('Failed to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Green Impact</h1>
          <p className="text-lg text-gray-600">Track your contribution to a sustainable India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Green Points Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8 flex items-center space-x-6">
            <div className="bg-emerald-100 p-4 rounded-xl">
              <Award className="w-10 h-10 text-emerald-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">{stats.greenPoints}</div>
              <div className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Green Points Earned</div>
            </div>
          </div>

          {/* Carbon Reduction Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 flex items-center space-x-6">
            <div className="bg-blue-100 p-4 rounded-xl">
              <TrendingDown className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">{stats.carbonReductionEstimate}</div>
              <div className="text-blue-600 font-semibold uppercase tracking-wider text-sm">CO2 Reduction Estimate</div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Leaf className="w-6 h-6 mr-2 text-emerald-600" />
            Personalized Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.sustainabilityRecommendations.map((recommendation, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-emerald-200 transition-colors">
                <div className="bg-emerald-50 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-gray-800 font-medium">{recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
