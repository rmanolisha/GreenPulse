import { Link } from 'react-router-dom';
import { ExternalLink, Sun, Wind, Car, Leaf, Trees, BadgeIndianRupee } from 'lucide-react';
import { policies } from '../data/mockData';

const iconMap = {
  sun: Sun,
  wind: Wind,
  car: Car,
  leaf: Leaf,
  trees: Trees,
  'badge-indian-rupee': BadgeIndianRupee
};

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Government Green Policies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore major sustainability initiatives and schemes launched by the Government of India 
            to achieve net-zero emissions and promote renewable energy.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy) => {
            const Icon = iconMap[policy.icon];
            return (
              <div 
                key={policy.id}
                data-testid={`policy-card-${policy.id}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-emerald-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {policy.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {policy.name}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {policy.description}
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href={policy.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`policy-${policy.id}-official-link`}
                    className="flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
                  >
                    View Official Policy
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                  <Link
                    to="/apply"
                    data-testid={`policy-${policy.id}-apply-btn`}
                    className="flex items-center justify-center px-4 py-2 border-2 border-emerald-600 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50 transition-colors text-sm"
                  >
                    How to Apply
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Can't Find What You're Looking For?
          </h2>
          <p className="mb-6 text-emerald-50">
            Visit the official government portal for more schemes and detailed information.
          </p>
          <a
            href="https://www.india.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Visit India.gov.in
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Policies;
