import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4">
      <button
        className="text-left w-full font-semibold text-xl text-gray-800 focus:outline-none"
        onClick={handleToggle}
      >
        {question}
      </button>
      {isExpanded && (
        <p className="text-gray-600 mt-2">{answer}</p>
      )}
    </div>
  );
};

export default FaqItem;
