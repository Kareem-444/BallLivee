"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, CalendarClock, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800/95 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50 shadow-lg" dir="rtl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity">
            {/* Logo - replace with your logo image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg" 
                alt="Ball Live Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ball Live
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">البث المباشر للمباريات</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link
              href="/TodayMatchs"
              className="flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl bg-slate-700/50 hover:bg-emerald-600/20 border border-slate-600 hover:border-emerald-500 text-white font-semibold transition-all group"
            >
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm lg:text-base">مباريات اليوم</span>
            </Link>

            <Link
              href="/TomorrowMatchs"
              className="flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-xl bg-slate-700/50 hover:bg-teal-600/20 border border-slate-600 hover:border-teal-500 text-white font-semibold transition-all group"
            >
              <CalendarClock className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm lg:text-base">مباريات الغد</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700 animate-in slide-in-from-top">
            <div className="flex flex-col gap-3">
              <Link
                href="/TodayMatchs"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-700/50 hover:bg-emerald-600/20 border border-slate-600 hover:border-emerald-500 text-white font-semibold transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1 text-right">
                  <div className="text-base font-bold">مباريات اليوم</div>
                  <div className="text-xs text-gray-400">شاهد المباريات الحالية</div>
                </div>
              </Link>

              <Link
                href="/TomorrowMatchs"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-700/50 hover:bg-teal-600/20 border border-slate-600 hover:border-teal-500 text-white font-semibold transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <CalendarClock className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1 text-right">
                  <div className="text-base font-bold">مباريات الغد</div>
                  <div className="text-xs text-gray-400">تصفح مباريات الغد</div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}