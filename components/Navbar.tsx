"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">My CV</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-teal-400 transition"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-700 space-y-2 py-4">
          {sections.map((section) => (
            <li key={section} className="text-center">
              <a
                href={`#${section.toLowerCase()}`}
                className="block py-2 hover:bg-teal-500 transition"
                onClick={() => setMenuOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
