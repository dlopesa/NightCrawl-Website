import React, { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: 'Question 1',
    answer: 'Answer to question 1...',
  },
  {
    question: 'Question 2',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lacinia diam, sit amet tempor dui euismod sit amet. Curabitur dictum, libero at varius porttitor, urna quam hendrerit purus, in tincidunt nisl purus eget sem. Sed non ligula a justo tincidunt elementum. Nullam sed vestibulum purus, eu consectetur tortor. Etiam maximus, turpis id finibus malesuada, dolor enim semper risus, vel varius mi tellus ut dui. In vel eleifend ipsum. Maecenas ac venenatis justo. Nunc pharetra justo sit amet interdum accumsan. Donec sit amet neque a libero aliquam semper in vitae odio. Nam finibus eu odio nec facilisis. Donec rhoncus mi sit amet elit blandit, nec volutpat erat eleifend. Nam tincidunt, turpis vel tristique facilisis, quam odio vehicula odio, a lacinia libero elit vel orci. Phasellus facilisis fermentum est, ac vestibulum eros laoreet a. Integer tempus tellus tellus, et elementum libero dictum ut.',
  },
];
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current = contentRefs.current.map((ref, index) => contentRefs.current[index] || null);
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

    contentRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="gradient-text text-6xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div key={index}>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-6 opacity-0 translate-y-4 transition-opacity duration-1000 delay-100 cursor-pointer`}
                onClick={() => handleQuestionClick(index)}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    activeIndex === index ? 'text-yellow-500' : ''
                  }`}
                >
                  {faq.question}
                </h3>
                <div className={`text-gray-400 transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;