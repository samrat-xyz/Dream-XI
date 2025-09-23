import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar({ availableBalance }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-2">
      <nav className="flex items-center justify-between">
        {/* Logo + Balance for mobile */}
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="logo" className="w-16" />
          {/* Show balance only on small devices */}
          <button className="border px-4 py-1 rounded-lg border-gray-200 text-sm md:hidden">
            {availableBalance}$
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-14 text-gray-600 font-medium">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">Fixture</li>
            <li className="hover:text-gray-900 cursor-pointer">Teams</li>
            <li className="hover:text-gray-900 cursor-pointer">Schedules</li>
          </ul>
          <button className="border px-8 py-2 text-green-800 rounded-lg border-gray-200 font-bold">
            {availableBalance}$
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Fixture</li>
            <li className="hover:text-blue-500 cursor-pointer">Teams</li>
            <li className="hover:text-blue-500 cursor-pointer">Schedules</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
