import React from "react";

const Display = ({ value }) => {
  return (
    <div className="w-full h-20 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-3xl flex items-center justify-end px-4 rounded-t-lg overflow-x-auto">
      {value || "0"}
    </div>
  );
};

export default Display;