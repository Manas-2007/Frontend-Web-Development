import React, { useState } from "react";
import Calculator from "./components/Calculator";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen text-white flex items-center justify-center" : "bg-gray-100 min-h-screen text-gray-900 flex items-center justify-center"}>
      <div className="flex flex-col items-center">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Calculator />
      </div>
    </div>
  );
}

export default App;