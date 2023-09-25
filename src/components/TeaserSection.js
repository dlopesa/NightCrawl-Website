import React, { useEffect, useRef } from 'react';
import logo from '../img/logo.png'

const Teaser = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="circle-gradient-background"></div>
      <div className="text-white text-center">
        <img src={logo} alt="NightCrawl Logo" className="w-40 h-40 mx-auto mb-4 logo-animation" />
        <h1 className="text-6xl font-semibold mb-4">Join the <b>NightCrawl</b> Community</h1>
          
        <p className="text-2xl mb-8">
          Discover the <b>best</b> nightlife spots and connect with party enthusiasts and <br />
          experience <b>unforgettable</b> nights with NightCrawl!
        </p>
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=K5jhl1w3DkaQcZBn3oY4i7GJHJOg07lEmJdH6_Go6GlUQkMxVVRIMlhTNFBWRzkzSFEwUkhaSDFDMi4u"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg shadow-md"
        >
          Sign Up for Early Access
        </a>
      </div>
    </section>
  );
};

export default Teaser;