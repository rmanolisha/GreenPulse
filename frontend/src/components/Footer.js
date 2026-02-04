import { Leaf, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">GreenPulse India</span>
                <span className="text-xs text-emerald-300">Transforming Policy into Action</span>
              </div>
            </div>
            <p className="text-sm text-emerald-100">
              Empowering India's sustainable future through accessible green policies and schemes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/policies" className="text-emerald-100 hover:text-white transition-colors">Government Policies</a></li>
              <li><a href="/apply" className="text-emerald-100 hover:text-white transition-colors">Apply for Schemes</a></li>
              <li><a href="/datasets" className="text-emerald-100 hover:text-white transition-colors">Open Datasets</a></li>
              <li><a href="/dashboard" className="text-emerald-100 hover:text-white transition-colors">Analytics Dashboard</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-emerald-300" />
                <span className="text-emerald-100">Ministry of Environment<br />New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100">info@greenpulse.gov.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center">
          <p className="text-sm text-emerald-200">
            © 2025 GreenPulse India. A Government of India Initiative. All Rights Reserved.
          </p>
          <p className="text-xs text-emerald-300 mt-2">
            Aligned with Union Budget 2025-26 | Sustainable Development Goals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
