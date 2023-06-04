import React, { useState } from 'react';

function App() {
  const [isBackgroundDark, setBackgroundDark] = useState(false);

  const toggleBackground = () => {
    setBackgroundDark(!isBackgroundDark);
  };

  const bodyStyle = {
    backgroundColor: isBackgroundDark ? '#222' : '#fff',
    color: isBackgroundDark ? '#fff' : '#222',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    transition: 'background-color 0.3s ease-in-out',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#555',
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (
    <div style={bodyStyle}>
      <h1>Toggle Background Color</h1>
      <button onClick={toggleBackground} style={buttonStyle}>
        Toggle
      </button>
    </div>
  );
}

export default App;
