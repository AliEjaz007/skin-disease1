// src/component/FirebaseConnectionTest.jsx
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { fetchSignInMethodsForEmail } from 'firebase/auth';

export default function FirebaseConnectionTest() {
  const [connectionStatus, setConnectionStatus] = useState('Testing connection...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        setConnectionStatus('Checking Firebase Auth...');
        
        // Test with a timeout
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Connection timeout')), 5000)
        );
        
        await Promise.race([
          fetchSignInMethodsForEmail(auth, "test@example.com"),
          timeoutPromise
        ]);
        
        setConnectionStatus('Success! Firebase connected');
      } catch (error) {
        if (error.message === 'Connection timeout') {
          setConnectionStatus('Failed: Timeout');
          setError('Firebase server not responding');
        } else if (error.code === 'auth/network-request-failed') {
          setConnectionStatus('Failed: Network error');
          setError('Check your internet connection');
        } else if (error.code === 'auth/user-not-found') {
          setConnectionStatus('Success! Firebase connected');
        } else {
          setConnectionStatus('Failed: Unknown error');
          setError(error.message);
        }
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid',
      borderColor: connectionStatus.includes('Success') ? 'green' : 'red',
      backgroundColor: '#f5f5f5'
    }}>
      <h3>Firebase Connection Test</h3>
      <p><strong>Status:</strong> {connectionStatus}</p>
      {error && (
        <div style={{color: 'red', marginTop: '10px'}}>
          <strong>Details:</strong> {error}
        </div>
      )}
    </div>
  );
}