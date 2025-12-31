import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
          <p>
            Welcome to Khushoo. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website 
            or use our mobile application and tell you about your privacy rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Data Collection</h2>
          <p>
            <strong>We do not collect personal data on our servers.</strong> Khushoo is designed to be privacy-first. 
            All processing regarding prayer times, location, and app blocking schedules happens locally on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Location Data</h2>
          <p>
            Our app requires access to your location solely to calculate accurate prayer times for your specific area. 
            This location data is processed locally on your device and is not transmitted to us or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Screen Time & Family Controls</h2>
          <p>
            Khushoo utilizes Apple's Screen Time and Family Controls APIs to provide the app blocking functionality. 
            We do not have access to see which apps you have installed, nor do we track your usage history. 
            The restrictions are applied by the iOS system based on the parameters you set within the app.
          </p>
        </section>
        
         <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact us via GitHub or at support@khushoo.app.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;