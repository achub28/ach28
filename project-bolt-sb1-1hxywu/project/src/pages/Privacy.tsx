import React from 'react';
import Layout from '../components/Layout';

const Privacy: React.FC = () => {
  return (
    <Layout
      title="Privacy Policy | Acyberhub QR Generator"
      description="Privacy policy for Acyberhub QR Code Generator. Learn how we protect your data and maintain your privacy."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">When you use our QR code generator, we collect:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Information you provide when creating QR codes</li>
              <li>Usage data to improve our service</li>
              <li>Device information for optimization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Generate and manage your QR codes</li>
              <li>Improve our services</li>
              <li>Provide customer support</li>
              <li>Send important updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your data. All QR code 
              generation and storage processes are secured using encryption.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@acyberhub.com
              <br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;