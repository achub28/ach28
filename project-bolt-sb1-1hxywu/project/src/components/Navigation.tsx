import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ mobile }) => {
  const baseClasses = "text-gray-600 hover:text-blue-600 transition-colors";
  const mobileClasses = mobile ? "block px-4 py-2" : "px-3 py-2";
  const activeClasses = "text-blue-600 font-medium";

  return (
    <nav className={mobile ? "py-2" : "flex items-center space-x-4"}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${mobileClasses} ${isActive ? activeClasses : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/features"
        className={({ isActive }) =>
          `${baseClasses} ${mobileClasses} ${isActive ? activeClasses : ''}`
        }
      >
        Features
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${baseClasses} ${mobileClasses} ${isActive ? activeClasses : ''}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;