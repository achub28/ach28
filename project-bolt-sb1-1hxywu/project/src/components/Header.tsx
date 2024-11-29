import React from 'react';
import { Code2, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Code2 className="h-8 w-8 text-blue-600" />
            <div>
              <span className="text-xl font-bold text-gray-800">Acyberhub</span>
              <span className="text-sm text-gray-500 block">QR Code Generator</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <Navigation mobile />
        </div>
      )}
    </header>
  );
};

export default Header;