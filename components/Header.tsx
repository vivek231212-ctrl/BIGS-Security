
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  const serviceLinks = [
    { name: 'Physical Guarding', href: '/services/physical-guarding' },
    { name: 'Corporate Consulting', href: '/services/corporate-consulting' },
    { name: 'Command Centre', href: '/services/command-centre' },
    { name: 'Integrated Facility', href: '/services/integrated-facility' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'Electronic Security', href: '/services/electronic-security' },
  ];

  const otherLinks = [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const headerTextClass = (isScrolled || !isHome) ? 'text-[#0a1d37]' : 'text-white';
  const headerBgClass = (isScrolled || !isHome) ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#e63946] p-2 rounded-lg">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className={`font-bold text-xl leading-none ${headerTextClass}`}>BIGS</h1>
            <p className={`text-[10px] font-medium tracking-widest ${(isScrolled || !isHome) ? 'text-slate-500' : 'text-slate-300'}`}>SUPPORT SERVICES</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className={`text-sm font-semibold transition-colors hover:text-[#e63946] ${headerTextClass}`}>
              {link.name}
            </Link>
          ))}
          
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#e63946] ${headerTextClass}`}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div 
              className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-4 mt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {serviceLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="block px-6 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#e63946] font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {otherLinks.map((link) => (
            <Link key={link.name} to={link.href} className={`text-sm font-semibold transition-colors hover:text-[#e63946] ${headerTextClass}`}>
              {link.name}
            </Link>
          ))}
          
          <Link to="/get-quote" className="bg-[#e63946] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#c32f3a] transition-all">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={headerTextClass} /> : <Menu className={headerTextClass} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-start px-8 gap-4 animate-in slide-in-from-top overflow-y-auto max-h-[90vh]">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-semibold w-full">
              {link.name}
            </Link>
          ))}
          <div className="w-full border-t border-slate-100 pt-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Services</p>
            {serviceLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-700 font-medium ml-4">
                {link.name}
              </Link>
            ))}
          </div>
          {otherLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-800 font-semibold w-full">
              {link.name}
            </Link>
          ))}
          <Link to="/get-quote" onClick={() => setIsMenuOpen(false)} className="bg-[#e63946] text-white w-full py-3 rounded-xl font-bold text-center">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};
