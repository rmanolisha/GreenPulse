import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Car, Leaf, TrendingUp } from 'lucide-react';
import { features } from '../data/mockData';

const iconMap = {
  sun: Sun,
  car: Car,
  leaf: Leaf,
  'trending-up': TrendingUp
};

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powering India's <span className="text-emerald-400">Green Future</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Your unified platform for exploring government sustainability initiatives, applying for green schemes, 
            and accessing comprehensive environmental datasets aligned with India's climate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/policies"
              data-testid="hero-explore-policies-btn"
              className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
            >
              Explore Policies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/apply"
              data-testid="hero-apply-schemes-btn"
              className="px-8 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Apply for Schemes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coverage of India's sustainability initiatives across critical sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div 
                  key={index}
                  data-testid={`feature-card-${index}`}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all"
                >
                  <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-solar">
              <div className="text-4xl font-bold text-white mb-2">82.6 GW</div>
              <div className="text-sm text-emerald-100">Solar Capacity</div>
            </div>
            <div data-testid="stat-ev">
              <div className="text-4xl font-bold text-white mb-2">6.8%</div>
              <div className="text-sm text-emerald-100">EV Adoption</div>
            </div>
            <div data-testid="stat-carbon">
              <div className="text-4xl font-bold text-white mb-2">280M</div>
              <div className="text-sm text-emerald-100">Tonnes CO₂ Reduced</div>
            </div>
            <div data-testid="stat-schemes">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-emerald-100">Active Schemes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Contribute to India's Green Revolution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of citizens, businesses, and organizations transforming sustainability vision into action.
          </p>
          <Link
            to="/apply"
            data-testid="cta-get-started-btn"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
