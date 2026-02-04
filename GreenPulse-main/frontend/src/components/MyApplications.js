import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, AlertCircle, Loader2, FileText } from 'lucide-react';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/applications');
        if (!response.ok) throw new Error('Failed to fetch applications');
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case 'Under Review': return <Clock className="w-5 h-5 text-amber-500" />;
      default: return <AlertCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
    </div>
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-emerald-600" />
          Submitted Applications
        </h2>
        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-full">
          {applications.length} Total
        </span>
      </div>
      
      {applications.length === 0 ? (
        <div className="p-12 text-center">
          <p className="text-gray-500">No applications submitted yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase text-gray-500 font-bold border-b border-gray-200">
                <th className="px-6 py-4">Reference ID</th>
                <th className="px-6 py-4">Scheme Name</th>
                <th className="px-6 py-4">Applicant</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-emerald-700">GPI-2025-{app.id.slice(0, 4)}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{app.selectedScheme}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{app.userDetails.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(app.status)}
                      <span className={`text-sm font-semibold ${
                        app.status === 'Approved' ? 'text-emerald-700' : 
                        app.status === 'Under Review' ? 'text-amber-700' : 'text-blue-700'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
