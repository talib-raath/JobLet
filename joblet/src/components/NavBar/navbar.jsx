import React, { useState, useEffect, useRef } from 'react';
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <ul className="flex justify-center flex-grow space-x-4"> {/* Centering the pages */}
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Feed</Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white hover:text-gray-300">Jobs</Link>
          </li>
          <li>
            <button className="text-white hover:text-gray-300 relative focus:outline-none" onClick={toggleNotifications}>
              Notifications
              {showNotifications && (
                <div ref={dropdownRef} className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
                  <div className="px-4 py-2"> {/* Custom styling for notifications */}
                    <span className="block text-gray-800 font-semibold mb-2">Notifications</span>
                    <a 
                      href="/" 
                      className="block text-gray-600 hover:text-gray-800 py-1"
                    >
                      Notification 1
                    </a>
                    <a 
                      href="/" 
                      className="block text-gray-600 hover:text-gray-800 py-1"
                    >
                      Notification 2
                    </a>
                  </div>
                </div>
              )}
            </button>
          </li>
        </ul>

        <div className="relative">
          <button
            onClick={toggleProfileDropdown}
            className="flex items-center text-white hover:text-gray-300 focus:outline-none"
          >
            <img
              src={avatar} 
              alt="Profile" 
              className="h-8 w-8 rounded-full"
            />
          </button>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
              <div className="px-4 py-2"> {/* Custom styling for profile dropdown */}
                <Link  
                  to="/login" 
                  className="block text-gray-600 hover:text-gray-800 py-1"
                >
                  Login
                </Link>
                <Link
                  to="/" 
                  className="block text-gray-600 hover:text-gray-800 py-1"
                >
                  Profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
