import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  const contactRef = useRef(null);
  const getInTouchRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-1', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.2, // Adjust this value to control when the animations trigger
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    if (getInTouchRef.current) {
      observer.observe(getInTouchRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="gradient-text text-6xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-lg bg-gray-800 opacity-0 translate-y-4 transition-opacity duration-1000 delay-100" ref={getInTouchRef}>
            <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400">Your Name</label>
                <input type="text" className="w-full rounded-md bg-gray-700 border border-gray-600 p-3 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">Your Email</label>
                <input type="email" className="w-full rounded-md bg-gray-700 border border-gray-600 p-3 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">Your Message</label>
                <textarea
                  rows="5"
                  className="w-full rounded-md bg-gray-700 border border-gray-600 p-3 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gray-800 opacity-0 translate-y-4 transition-opacity duration-1000 delay-100" ref={contactRef}>
            <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Send us an email or message us on our social media channels to participate in our project or inquire about possible partnerships. We'd love to hear from you!
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-medium">Email:</span> contact@example.com
              </p>
              {/* Text to follow on social media */}
              <p className="text-sm text-gray-400">
                <span className="font-medium">Follow us on:</span>
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
