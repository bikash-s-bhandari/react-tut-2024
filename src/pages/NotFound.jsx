import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function NotFound() {
    const navigate = useNavigate();  // Initialize useNavigate hook

    const goBackHome = () => {
        navigate('/');  // Navigate to the home page
      };
    
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <button onClick={goBackHome} style={{ padding: '0.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}>
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
