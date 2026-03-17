import React from "react";

function Title() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <h1 className="text-4xl md:text-[60px] font-[500] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 drop-shadow-sm">
        TODO <span className="text-slate-800">APP</span>
      </h1>
      
      {/* Sub-text for a more "Product" feel */}
      <div className="h-2 w-12 bg-blue-500 rounded-full"></div>
    </div>
  );
}

export default Title;