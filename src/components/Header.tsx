import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import { ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-skribh-deepnavy text-white shadow-md">
      <div className="skribh-container py-3">
        <div className="flex items-center justify-between">
          <RouterLink to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8" />
            <span className="text-xl font-bold">skribh</span>
          </RouterLink>

          <RouterLink
            to="/investors"
            className="flex items-center justify-center"
          >
            <Button className="skribh-button w-full">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </RouterLink>

          <div className="md:hidden">
            {/* Mobile menu button - would implement with state in a real app */}
            <button className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
