import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "QR Code Generator | Acyberhub",
  description = "Create custom QR codes for your business, social media, and personal use with Acyberhub's professional QR code generator. Support for multiple templates and instant downloads."
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <SEO title={title} description={description} />
      <Header />
      <main className="flex-grow py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;