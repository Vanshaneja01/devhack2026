"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { eventConfig } from "@/config/eventConfig";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Timeline", href: "#timeline" },
    { name: "Judging", href: "#judging" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5"
          : "bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Area: DevHack Official Logo & GDG Logo Lockup */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            {/* Official DevHack Logo Image */}
            <div className="relative h-8 sm:h-10 w-auto aspect-[2.2/1] overflow-hidden rounded-lg">
              <Image
                src="/images/devhack-logo.jpg"
                alt="DevHack IIMT University Logo"
                width={120}
                height={50}
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>

            <span className="hidden sm:inline-block text-slate-300 font-light">|</span>

            {/* Official GDG Logo Image */}
            <div className="hidden sm:flex items-center h-6 sm:h-7 w-auto">
              <Image
                src="/images/gdg-logo.png"
                alt="Google Developer Group On Campus - IIMT, Meerut"
                width={160}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-slate-600 hover:text-blue-600 hover:bg-white transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions: Unstop CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={eventConfig.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-extrabold px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-md shadow-blue-500/20 transition-all hover:scale-105"
            >
              <span className="hidden xs:inline">Register on Unstop</span>
              <span className="xs:hidden">Register</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 shadow-2xs transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-[57px] bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl px-5 py-6 space-y-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-65px)] overflow-y-auto">
          {/* Mobile GDG Brand Display */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center">
            <Image
              src="/images/gdg-logo.png"
              alt="Google Developer Group On Campus - IIMT, Meerut"
              width={200}
              height={45}
              className="h-7 w-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-400 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-1">
            <a
              href={eventConfig.unstopUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-md text-sm"
            >
              🚀 REGISTER ON UNSTOP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
