import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import {Link} from "react-router-dom"
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-white font-bold text-xl">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        <ul className="flex space-x-4 flex-grow justify-center md:justify-start"> {/* Added md:justify-start for responsiveness */}
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Feed</Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white hover:text-gray-300">Jobs</Link>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-300">Notifications</a>
          </li>
        </ul>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-white hover:text-gray-300"
          >
            <img
              src={avatar} 
              alt="Profile" 
              className="h-8 w-8 rounded-full"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
              <a 
                href="/" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Login
              </a>
              <a 
                href="/" 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
