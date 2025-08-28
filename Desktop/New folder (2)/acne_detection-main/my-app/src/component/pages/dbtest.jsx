import React, { useEffect, useState } from 'react';

const DBTest = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const testDBConnection = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/diseases/BA-Impetigo');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    testDBConnection();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🔍 Database Connection Test</h2>
      {loading && <p>⏳ Loading...</p>}
      {error && <p style={{ color: 'red' }}>❌ Error: {error}</p>}
      {result && (
        <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
          <p><strong>Disease:</strong> {result.name}</p>
          <p><strong>Description:</strong> {result.description}</p>
          <p><strong>Remedies:</strong> {result.remedies?.join(', ') || 'None'}</p>
          <p><strong>Diet Plan:</strong> {result.dietPlan?.join(', ') || 'None'}</p>
        </div>
      )}
    </div>
  );
};

export default DBTest;
