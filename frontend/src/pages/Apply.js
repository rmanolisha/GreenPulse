import { useState } from 'react';
import { CheckCircle2, Circle, FileText, User, Building, Mail, Phone, MapPin } from 'lucide-react';
import { applicationSteps, requiredDocuments, policies } from '../data/mockData';

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedScheme, setSelectedScheme] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplicationStatus('submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Apply for Green Schemes
          </h1>
          <p className="text-lg text-gray-600">
            Follow the simple steps below to apply for sustainability schemes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {applicationSteps.map((step, index) => (
              <div key={step.step} className="flex-1">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.step 
                      ? 'bg-emerald-600 border-emerald-600' 
                      : 'bg-white border-gray-300'
                  }`}>
                    {currentStep > step.step ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <span className={`text-sm font-semibold ${
                        currentStep >= step.step ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.step}
                      </span>
                    )}
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      currentStep > step.step ? 'bg-emerald-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
                <div className="mt-2 text-xs sm:text-sm">
                  <div className={`font-semibold ${
                    currentStep >= step.step ? 'text-emerald-700' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          {currentStep === 1 && (
            <div data-testid="eligibility-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-emerald-600" />
                Check Eligibility
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Scheme
                </label>
                <select
                  data-testid="scheme-selector"
                  value={selectedScheme}
                  onChange={(e) => setSelectedScheme(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="">Choose a scheme...</option>
                  {policies.map((policy) => (
                    <option key={policy.id} value={policy.name}>
                      {policy.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedScheme && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-emerald-900 mb-3">Eligibility Criteria:</h3>
                  <ul className="space-y-2 text-sm text-emerald-800">
                    <li className="flex items-start">
                      <Circle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Indian citizen or registered business entity</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Valid Aadhaar and PAN documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Property/land ownership proof (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <Circle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bank account with valid KYC</span>
                    </li>
                  </ul>
                </div>
              )}

              <button
                data-testid="next-step-btn"
                onClick={() => setCurrentStep(2)}
                disabled={!selectedScheme}
                className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Continue to Documents
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div data-testid="documents-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-emerald-600" />
                Required Documents
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-4">Please prepare the following documents:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start text-sm text-blue-800">
                      <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  data-testid="proceed-to-form-btn"
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Proceed to Application
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && !applicationStatus && (
            <div data-testid="application-form-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        data-testid="applicant-name-input"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        data-testid="applicant-email-input"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        data-testid="applicant-phone-input"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization (Optional)
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        data-testid="organization-input"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Company/Organization name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      data-testid="address-input"
                      required
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter complete address"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    data-testid="submit-application-btn"
                    className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

          {applicationStatus === 'submitted' && (
            <div data-testid="success-message" className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Application Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                Your application for <span className="font-semibold">{selectedScheme}</span> has been received.
                Reference ID: <span className="font-mono font-semibold">GPI-2025-{Math.floor(Math.random() * 10000)}</span>
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="font-semibold text-blue-900 mb-3">Application Status Tracker</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Application Submitted</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Circle className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-500">Under Review (3-5 days)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Circle className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-500">Verification (7-10 days)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Circle className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-500">Approval & Disbursement</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
