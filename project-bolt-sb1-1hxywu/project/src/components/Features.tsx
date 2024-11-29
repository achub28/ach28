import React from 'react';
import { 
  Palette, 
  Download, 
  Share2, 
  Shield, 
  Smartphone, 
  BarChart 
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Custom Templates',
    description: 'Choose from a variety of professional templates for different use cases.'
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Download your QR codes in PNG, SVG, or JPEG formats.'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your QR codes directly to social media or via email.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your data is always secure and QR codes are generated instantly.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Create and manage QR codes from any device.'
  },
  {
    icon: BarChart,
    title: 'Analytics Ready',
    description: 'Track QR code scans and analyze performance.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Why Choose Our QR Generator?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;