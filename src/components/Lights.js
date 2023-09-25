// Lights.js
import React from 'react';

const Lights = ({ className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      {/* The lights animation or background styling */}
      {/* Replace this with your desired lights effect */}
      <div
        className="w-full h-full bg-gradient-to-r from-red-500 to-yellow-500"
        style={{ opacity: 0.3, mixBlendMode: 'color-dodge' }}
      />
    </div>
  );
};

export default Lights;
