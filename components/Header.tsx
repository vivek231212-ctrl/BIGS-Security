
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sectors', href: '#industries' },
    { name: 'Technology', href: '#tech' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-[#e63946] p-2 rounded-lg">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className={`font-bold text-xl leading-none ${isScrolled ? 'text-[#0a1d37]' : 'text-white'}`}>BIGS</h1>
            <p className={`text-[10px] font-medium tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>SUPPORT SERVICES</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-[#e63946] ${isScrolled ? 'text-[#0a1d37]' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#e63946] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#c32f3a] transition-all">
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-800 font-semibold hover:text-[#e63946]"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#e63946] text-white px-8 py-3 rounded-full font-bold">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};
