import React from 'react';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout
      title="Terms of Service | Acyberhub QR Generator"
      description="Terms of service for Acyberhub QR Code Generator. Understand our terms and conditions of use."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Acyberhub's QR Code Generator, you agree to be bound by these 
              Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
            <p className="text-gray-600">Permission is granted to:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Generate QR codes for personal and commercial use</li>
              <li>Download and share generated QR codes</li>
              <li>Use our templates and customization features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Restrictions</h2>
            <p className="text-gray-600">You may not:</p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>Use the service for illegal purposes</li>
              <li>Generate QR codes containing malicious content</li>
              <li>Attempt to bypass any security features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Disclaimer</h2>
            <p className="text-gray-600">
              The service is provided "as is" without warranties of any kind, either express or implied.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;