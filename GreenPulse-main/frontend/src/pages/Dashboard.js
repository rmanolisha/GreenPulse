import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Zap, Car as CarIcon, Leaf } from 'lucide-react';
import { dashboardStats, solarAdoptionData, evGrowthData, energyMixData } from '../data/mockData';

const Dashboard = () => {
  const COLORS = ['#f59e0b', '#3b82f6', '#06b6d4', '#22c55e', '#8b5cf6'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sustainability Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Real-time analytics on India's green energy transition and environmental initiatives
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div data-testid="kpi-solar" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                {dashboardStats.solarCapacity.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {dashboardStats.solarCapacity.value} <span className="text-lg text-gray-600">{dashboardStats.solarCapacity.unit}</span>
            </div>
            <div className="text-sm text-gray-600">Total Solar Capacity</div>
          </div>

          <div data-testid="kpi-ev" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                {dashboardStats.evAdoption.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {dashboardStats.evAdoption.value}
            </div>
            <div className="text-sm text-gray-600">EV Adoption Rate</div>
          </div>

          <div data-testid="kpi-carbon" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                {dashboardStats.carbonReduction.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {dashboardStats.carbonReduction.value}
            </div>
            <div className="text-sm text-gray-600">{dashboardStats.carbonReduction.unit}</div>
          </div>

          <div data-testid="kpi-hydrogen" className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                {dashboardStats.greenHydrogen.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {dashboardStats.greenHydrogen.value} <span className="text-lg text-gray-600">{dashboardStats.greenHydrogen.unit}</span>
            </div>
            <div className="text-sm text-gray-600">Green Hydrogen</div>
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Solar Adoption Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Solar Capacity Growth (GW)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={solarAdoptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="capacity" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* EV Growth Chart */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Monthly EV Registrations
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={evGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  stroke="#6b7280"
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="registrations" 
                  fill="#3b82f6"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Renewable Energy Mix */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Renewable Energy Mix (GW)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={energyMixData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, capacity }) => `${source}: ${capacity} GW`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="capacity"
                >
                  {energyMixData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Progress Indicators */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              2030 Targets Progress
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Renewable Energy (500 GW)</span>
                  <span className="text-sm font-semibold text-emerald-600">38.6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-emerald-600 h-3 rounded-full" style={{ width: '38.6%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">EV Penetration (30%)</span>
                  <span className="text-sm font-semibold text-blue-600">22.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '22.7%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Carbon Intensity Reduction (45%)</span>
                  <span className="text-sm font-semibold text-amber-600">31.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-amber-600 h-3 rounded-full" style={{ width: '31.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Forest Cover (33%)</span>
                  <span className="text-sm font-semibold text-green-600">24.6%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '24.6%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Green Hydrogen (5 MMT)</span>
                  <span className="text-sm font-semibold text-purple-600">9%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '9%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Want Detailed Reports?
          </h2>
          <p className="mb-6 text-emerald-50">
            Download comprehensive quarterly and annual sustainability reports with in-depth analysis.
          </p>
          <button className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Download Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
