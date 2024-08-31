import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Profile() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const goToHDocumentation = () => {
      navigate('/docs');  
    };
  return (
    <>
  <h3>Profile Page</h3>
  <button onClick={goToHDocumentation} style={{ padding: '0.5rem 1rem', marginTop: '1rem', cursor: 'pointer' }}>
        Go To Documentation
      </button>
  </>
);
}

export default Profile;
