import { useState, useEffect } from 'react';
import { Download, Database, Calendar, Loader2 } from 'lucide-react';
import { fetchDatasets } from '../lib/api';

const Datasets = () => {
  const [datasetsList, setDatasetsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDatasets = async () => {
      try {
        const data = await fetchDatasets();
        setDatasetsList(data);
      } catch (err) {
        setError('Failed to load datasets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadDatasets();
  }, []);

  const handleDownload = (datasetTitle) => {
    alert(`Download initiated for: ${datasetTitle}\n\nNote: This is a demo. Actual files would be downloaded in a real implementation.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Open Green Datasets
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access comprehensive environmental and sustainability data from government sources. 
            All datasets are freely available for research, analysis, and application development.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Database className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">{datasetsList.length}</div>
            <div className="text-sm text-gray-600">Available Datasets</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Download className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">15.8 GB</div>
            <div className="text-sm text-gray-600">Total Data Volume</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">Monthly</div>
            <div className="text-sm text-gray-600">Update Frequency</div>
          </div>
        </div>

        {/* Datasets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {datasetsList.map((dataset) => (
            <div 
              key={dataset.id}
              data-testid={`dataset-card-${dataset.id}`}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-emerald-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {dataset.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {dataset.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Source:</span>
                  <span className="font-semibold text-emerald-700 text-xs">{dataset.source}</span>
                </div>
              </div>

              <button
                data-testid={`dataset-${dataset.id}-download-btn`}
                onClick={() => handleDownload(dataset.name)}
                className="w-full flex items-center justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Dataset
              </button>
            </div>
          ))}
        </div>

        {/* API Access Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need Programmatic Access?
            </h2>
            <p className="text-blue-50 mb-6">
              Access all datasets via our RESTful API. Perfect for building applications, 
              conducting research, or automating data pipelines.
            </p>
            <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View API Documentation
            </button>
          </div>
        </div>

        {/* Data Usage Guidelines */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Data Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free to Use</h3>
              <p className="text-sm text-gray-600">
                All datasets are open and free for commercial and non-commercial use
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">©</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Attribution Required</h3>
              <p className="text-sm text-gray-600">
                Please cite the source and provide appropriate attribution
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">↻</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-sm text-gray-600">
                Datasets are updated monthly with latest government data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datasets;
