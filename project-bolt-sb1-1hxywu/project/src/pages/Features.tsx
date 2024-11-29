import React from 'react';
import Layout from '../components/Layout';
import { Shield, Zap, Palette, Download, Share2, BarChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Generation',
      description: 'All QR codes are generated securely with encrypted data transmission.'
    },
    {
      icon: Zap,
      title: 'Instant Creation',
      description: 'Generate QR codes instantly with our high-performance system.'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Customize colors, add logos, and choose from multiple templates.'
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Download QR codes in PNG, SVG, or JPEG formats.'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share QR codes directly to social media or via email.'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Track QR code scans and analyze performance metrics.'
    }
  ];

  return (
    <Layout
      title="Features | Acyberhub QR Generator"
      description="Explore the powerful features of Acyberhub's QR Code Generator. Create, customize, and track your QR codes."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your QR Needs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and track professional QR codes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Create Your QR Code?
          </h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Features;