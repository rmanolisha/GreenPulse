const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

export const fetchPolicies = async () => {
  const response = await fetch(`${BACKEND_URL}/api/policies`);
  if (!response.ok) throw new Error('Failed to fetch policies');
  return response.json();
};

export const fetchPolicyById = async (id) => {
  const response = await fetch(`${BACKEND_URL}/api/policies/${id}`);
  if (!response.ok) throw new Error('Failed to fetch policy details');
  return response.json();
};

export const fetchDatasets = async () => {
  const response = await fetch(`${BACKEND_URL}/api/datasets`);
  if (!response.ok) throw new Error('Failed to fetch datasets');
  return response.json();
};

export const submitApplication = async (applicationData) => {
  const response = await fetch(`${BACKEND_URL}/api/applications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicationData),
  });
  if (!response.ok) throw new Error('Failed to submit application');
  return response.json();
};

export const fetchDashboardStats = async (type) => {
  const response = await fetch(`${BACKEND_URL}/api/dashboard/${type}`);
  if (!response.ok) throw new Error(`Failed to fetch ${type} dashboard stats`);
  return response.json();
};
