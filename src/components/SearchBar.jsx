import React, { useState, useEffect } from 'react';
import favicon from "../assets/images/favicon.png";

function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative flex items-center mt-5 max-w-3xl mx-auto w-96">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 w-96"
        style={{ border: "#F0F0F0 1px solid" }}
      />
      {!inputValue && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
          <span className="font-bold">Looking for</span> design |
        </div>
      )}
      <button
        className="absolute right-0 text-white p-2 rounded-md flex items-center justify-center h-10 px-3"
        style={{ backgroundColor: "#FFBE2E" }}
      >
        <img src={favicon} alt="Search Icon" height={15} width={15} />
      </button>
    </div>
  );
}

export default SearchBar;
