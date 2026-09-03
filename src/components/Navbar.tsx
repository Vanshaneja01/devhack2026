"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
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
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-xs">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1 font-black tracking-tight text-slate-900 text-base sm:text-lg">
                <span>DEVHACK</span>
                <span className="text-blue-600">IIMTU</span>
                <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                  2026
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-slate-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>GDG on Campus – IIMT</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 text-sm font-semibold">
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <a
              href={eventConfig.devfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 shadow-xs transition-all"
            >
              <span>Register on Devfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 shadow-2xs transition-all focus:outline-none"
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

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl px-5 py-6 space-y-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={eventConfig.devfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-md text-sm"
            >
              🚀 REGISTER ON DEVFOLIO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
