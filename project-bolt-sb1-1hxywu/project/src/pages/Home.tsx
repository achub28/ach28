import React from 'react';
import Layout from '../components/Layout';
import QRCodeGenerator from '../components/QRCodeGenerator';
import Features from '../components/Features';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional QR Code Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create custom QR codes for your business, social media, and personal use. 
            Choose from multiple templates and download instantly.
          </p>
        </section>

        <QRCodeGenerator />
        <Features />
      </div>
    </Layout>
  );
};

export default Home;