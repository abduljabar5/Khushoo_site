import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <main className="bg-khushoo-dark min-h-screen">
      <Hero />
      <Features />
      
      {/* Simple CTA Section */}
      <section id="download" className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to improve your Salat?</h2>
        <p className="text-gray-400 mb-8">Download Khushoo for iOS today and find your focus.</p>
        <div className="inline-block">
            <a href="https://apps.apple.com/us/app/khushoo" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                Download Now
            </a>
        </div>
      </section>
    </main>
  );
};

export default Home;