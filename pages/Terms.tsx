import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using the Khushoo application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">2. Use License</h2>
          <p>
            Permission is granted to download one copy of the materials (information or software) on Khushoo's application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">3. Disclaimer</h2>
          <p>
            The materials on Khushoo's application are provided on an 'as is' basis. Khushoo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">4. Prayer Times Accuracy</h2>
          <p>
            While we strive for high accuracy in prayer time calculations, Khushoo is a tool to assist you. Variations in calculation methods and local conventions may apply. Users are encouraged to verify times with their local mosques.
          </p>
        </section>

         <section>
          <h2 className="text-2xl font-semibold text-white mb-3">5. Modifications</h2>
          <p>
            Khushoo may revise these terms of service for its application at any time without notice. By using this application you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;