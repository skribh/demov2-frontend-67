import React from "react";
import { ChevronRight } from "lucide-react";

const SimpleHeader = () => {
  return (
    <header className="w-full py-5 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-black-600">Skribh</span>
        </div>

        <a href="https://tbd.tbd" className="skribh-button flex">
          Get Started
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </header>
  );
};

export default SimpleHeader;
