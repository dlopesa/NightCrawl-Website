import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faComment, faBell, faCheckCircle, faStar, faPercent } from '@fortawesome/free-solid-svg-icons';

const features = [
    {
      title: 'Mapping and Routing',
      description: 'Easily navigate through the pub crawl route and explore new venues with our interactive mapping and routing feature.',
      icon: faMapMarkerAlt,
    },
    {
      title: 'Chat Group',
      description: 'Connect and socialize with fellow pub crawl enthusiasts in our vibrant chat groups, making every crawl a memorable experience.',
      icon: faComment,
    },
    {
      title: 'Live Notifications',
      description: 'Stay updated with real-time notifications about upcoming events, special offers, and exciting pub crawl opportunities.',
      icon: faBell,
    },
    {
      title: 'Check-in',
      description: 'Mark your presence at each bar and track your progress as you embark on an exciting journey through the best nightlife spots.',
      icon: faCheckCircle,
    },
    {
      title: 'Rating',
      description: 'Share your feedback and experiences with other pub crawlers, and discover highly-rated pub crawls curated by our community.',
      icon: faStar,
    },
    {
      title: 'Discounts and Perks',
      description: 'Enjoy exclusive discounts and perks at partner bars, making your pub crawl adventure both fun and budget-friendly.',
      icon: faPercent,
    },
  ];
  
  const FeatureSection = () => {
    const featureRefs = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-up'); // Add the class to trigger the fade-in animation
            } else {
              entry.target.classList.remove('fade-in-up'); // Remove the class if not intersecting
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
  
      featureRefs.current.forEach((ref) => {
        observer.observe(ref);
      });
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="gradient-text text-6xl font-bold text-center mb-12">Explore the Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="feature-card bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <FontAwesomeIcon icon={feature.icon} className="text-yellow-500 text-3xl mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;