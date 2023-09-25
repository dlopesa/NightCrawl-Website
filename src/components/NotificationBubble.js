import React, { useState, useEffect } from 'react';
import './NotificationBubble.css'; // Create a new CSS file (NotificationBubble.css) for the animations

const NotificationBubble = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const redirectToSurvey = () => {
    window.open(
      'https://forms.office.com/Pages/ResponsePage.aspx?id=K5jhl1w3DkaQcZBn3oY4i7GJHJOg07lEmJdH6_Go6GlUQkMxVVRIMlhTNFBWRzkzSFEwUkhaSDFDMi4u',
      '_blank'
    );
  };

  const handleClose = () => {
    setShowBubble(false);
  };

  return (
    <>
      {showBubble && (
        <div className="notification-bubble">
          <div className="notification-content">
            <div className="notification-icon" />
            <p className="notification-text">
              <span className="font-semibold">NightCrawl</span> says:
              <br />
              Hello there! 👋 Help us improve! Fill out our marketing research. 📝
            </p>
            <button className="notification-button" onClick={redirectToSurvey}>
              Take the survey ➡️
            </button>
            <button className="notification-close" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 011.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 111.414-1.414L10 10.586l4.293-4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationBubble;
