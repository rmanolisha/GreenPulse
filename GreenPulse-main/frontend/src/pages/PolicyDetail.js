import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, Gift, ListOrdered, Loader2 } from 'lucide-react';
import { fetchPolicyById } from '../lib/api';

const PolicyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPolicy = async () => {
      try {
        const data = await fetchPolicyById(id);
        setPolicy(data);
      } catch (err) {
        setError('Policy details not found.');
      } finally {
        setLoading(false);
      }
    };
    loadPolicy();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
    </div>
  );

  if (error || !policy) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-red-600 mb-4">{error}</p>
      <button onClick={() => navigate('/policies')} className="text-emerald-600 hover:underline">Back to Policies</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/policies" className="inline-flex items-center text-emerald-600 font-medium mb-8 hover:text-emerald-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Policies
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-emerald-600 p-8 text-white">
            <span className="inline-block px-3 py-1 bg-emerald-500/30 rounded-full text-sm font-medium mb-4">
              {policy.category}
            </span>
            <h1 className="text-3xl font-bold">{policy.name}</h1>
          </div>

          <div className="p-8">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Description</h2>
              <p className="text-gray-600 leading-relaxed">{policy.description}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <ShieldCheck className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Eligibility</h3>
                <p className="text-sm text-gray-600">{policy.eligibility || 'Standard Indian Citizen / Business Entity'}</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <Gift className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Benefits</h3>
                <p className="text-sm text-gray-600">{policy.benefits || 'Financial incentives and subsidies up to 40%'}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <ListOrdered className="w-6 h-6 text-amber-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Process</h3>
                <p className="text-sm text-gray-600">{policy.applicationGuide || 'Online application with document verification'}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={policy.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
              >
                Official Government Link
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/apply"
                className="flex-1 flex items-center justify-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
              >
                Apply for this Scheme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetail;
