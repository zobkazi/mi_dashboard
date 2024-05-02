// TopHeader.tsx
import React from 'react';

function TopHeader() {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-white text-gray-800">
          Logo
        </div>
        <p className="text-3xl">Dashboard</p>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            className="py-2 px-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 19l-6-6m0 0l-6 6m6-6V5"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h1 className="text-3xl">Abater</h1>
        </div>
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
