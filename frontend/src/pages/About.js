import { Target, Users, Leaf, TrendingUp, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-100 p-4 rounded-full mb-4">
            <Leaf className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About GreenPulse India
          </h1>
          <p className="text-lg text-gray-600">
            Bridging policy and action for a sustainable India
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            GreenPulse India is a comprehensive digital platform designed to democratize access to 
            sustainability information and green schemes across the nation. We aim to transform 
            India's environmental policies into actionable opportunities for citizens, businesses, 
            and communities.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            By centralizing government initiatives, datasets, and application processes, we empower 
            every Indian to participate in the country's green revolution and contribute to achieving 
            our ambitious climate targets.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To create a transparent, accessible, and efficient ecosystem that enables 
              seamless participation in India's sustainability journey through technology 
              and data-driven insights.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Who We Serve</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Individual citizens, farmers, entrepreneurs, researchers, NGOs, and businesses 
              seeking to leverage government schemes and contribute to environmental goals.
            </p>
          </div>
        </div>

        {/* Alignment Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl p-8 text-white mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Aligned with Union Budget 2025-26</h2>
              <p className="text-emerald-50 leading-relaxed mb-4">
                GreenPulse India directly supports the government's vision outlined in the 
                Union Budget 2025-26, which allocated significant resources to:
              </p>
              <ul className="space-y-2 text-emerald-50">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>PM Surya Ghar scheme for 1 crore rooftop solar installations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>₹19,744 crore National Green Hydrogen Mission</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Electric vehicle infrastructure expansion through FAME India</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>GOBARdhan and bio-energy initiatives for waste-to-energy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Green India Mission for afforestation and carbon sequestration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-emerald-600 font-bold text-sm">01</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Policy Explorer</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive database of all green policies, schemes, and initiatives with direct links to official sources.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-blue-600 font-bold text-sm">02</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Simplified Applications</h3>
                <p className="text-sm text-gray-600">
                  Step-by-step guidance for scheme applications with eligibility checks and document requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-purple-600 font-bold text-sm">03</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Open Datasets</h3>
                <p className="text-sm text-gray-600">
                  Free access to government environmental data for research, analysis, and application development.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-100 rounded-full p-2 mr-4 mt-1">
                <span className="text-amber-600 font-bold text-sm">04</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Analytics Dashboard</h3>
                <p className="text-sm text-gray-600">
                  Real-time tracking of India's progress toward renewable energy and sustainability goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hackathon Context */}
        <div className="bg-gray-100 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hackathon Project</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            GreenPulse India was developed as part of a hackathon focused on leveraging technology 
            to address India's sustainability challenges. This platform demonstrates how digital 
            solutions can bridge the gap between government policies and citizen action.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Tech Stack:</strong> React.js, Tailwind CSS, React Router, Recharts for data visualization
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join the Movement
          </h2>
          <p className="text-gray-600 mb-6">
            Together, we can transform India into a global leader in sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.india.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Visit Government Portal
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Apply for Schemes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
