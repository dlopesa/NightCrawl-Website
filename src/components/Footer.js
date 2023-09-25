import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white">
      <div className="container mx-auto max-w-5xl flex items-center justify-between">
        <div className="text-xl font-bold">NightCrawl</div>
        <div className="flex space-x-4">
          {/* Instagram button */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-yellow-500"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
          {/* Facebook button */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-900 hover:bg-yellow-500"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          </a>
        </div>
        <div className="text-sm text-gray-400">
          <p className="mb-2">
            Email: contact@example.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
