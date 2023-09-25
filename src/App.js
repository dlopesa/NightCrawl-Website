import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TeaserSection from './components/TeaserSection';
import ColorPalette from './components/ColorPalette';
import NotificationBubble from './components/NotificationBubble';
import FeatureSection from './components/FeatureSection';
import FaqSection from './components/FaqSection';
import ContactUs from './components/ContactUs'; 
import Footer from './components/Footer';

function App() {
  const [showSurvey, setShowSurvey] = useState(true);

  const handleNotificationClick = () => {
    // Handle the click event, for example, show the marketing research survey form
    // You can use a modal or redirect the user to a separate page for the survey.
    // For simplicity, I'm just hiding the bubble here.
    setShowSurvey(false);
  };

  return (
    <div>
      {showSurvey && <NotificationBubble onClick={handleNotificationClick} />}
      <Navbar />
      <TeaserSection />
      <FeatureSection />
      <FaqSection />
      <ContactUs />
      <Footer />
      
      {/* Add other ColorPalette components here if needed */}
    </div>
  );
}

export default App;
