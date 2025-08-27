'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-netflix-black' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 lg:px-16 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img
            src="/netflix-logo.png"
            alt="Netflix"
            className="h-8 w-auto cursor-pointer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTExIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTExIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzIpIj48cGF0aCBkPSJNMTA1LjA2MiAxNC4yOEwxMTEgMzBIMTA0LjA3NEw5OS4xMjEgMTcuNzFMMTAyLjc3OSAxNC4yOEgxMDUuMDYyWiIgZmlsbD0iI0U5MUUxNyIvPjxwYXRoIGQ9Ik0xMDUuMTI1IDguNzA5TDEwNi4zNzQgMEgxMDAuNDI5TDk4LjQ2IDEwLjczN0wxMDMuNTc5IDguNzA5SDEwNS4xMjVaIiBmaWxsPSIjRTkxRTE3Ii8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8yIj48cmVjdCB3aWR0aD0iMTExIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==';
            }}
          />
          <ul className="hidden lg:flex space-x-8 text-white">
            <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
            <li className="cursor-pointer hover:text-gray-300 transition">TV Shows</li>
            <li className="cursor-pointer hover:text-gray-300 transition">Movies</li>
            <li className="cursor-pointer hover:text-gray-300 transition">New & Popular</li>
            <li className="cursor-pointer hover:text-gray-300 transition">My List</li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FiSearch 
              className="text-white text-xl cursor-pointer hover:text-gray-300 transition"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 bg-black/50 border border-gray-600 rounded px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                autoFocus
              />
            )}
          </div>
          
          <FiBell className="text-white text-xl cursor-pointer hover:text-gray-300 transition" />
          
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Profile"
              className="w-8 h-8 rounded"
            />
            <FiChevronDown className="text-white text-sm" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
