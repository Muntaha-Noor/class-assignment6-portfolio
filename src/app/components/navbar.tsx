"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-teal-500 w-12 h-12 flex items-center justify-center text-gray-900 font-bold text-2xl">
            MN
          </div>
          <h1 className="text-2xl font-extrabold tracking-wide text-teal-400">Muntaha Noor</h1>
        </div>

        <div className="hidden md:flex space-x-10">
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/about" label="About" />
          <NavbarLink href="/skills" label="Skills" />
          <NavbarLink href="/contact" label="Contact" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-teal-400 hover:text-white focus:outline-none transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-6 space-y-4">
          <NavbarLink href="/" label="Home" />
          <NavbarLink href="/about" label="About" />
          <NavbarLink href="/skills" label="Skills" />
          <NavbarLink href="/contact" label="Contact" />
        </div>
      )}
    </nav>
  );
}

function NavbarLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-center px-4 py-2 text-lg font-medium hover:bg-teal-500 hover:text-gray-900 rounded-lg transition-all duration-300"
    >
      {label}
    </Link>
  );
}
