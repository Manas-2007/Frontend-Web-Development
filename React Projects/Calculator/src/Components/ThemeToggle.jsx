import React from "react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mb-4 px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 transition duration-300 hover:bg-gray-600 dark:hover:bg-gray-300"
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;