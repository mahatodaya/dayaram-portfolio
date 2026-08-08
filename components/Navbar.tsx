"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          D<span className="text-blue-500">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300" aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>
    </nav>
  );
}
