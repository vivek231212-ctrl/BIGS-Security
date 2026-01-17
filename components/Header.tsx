
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
  const headerBgClass = (isScrolled || !isHome) ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4';
  const headerTextClass = (isScrolled || !isHome) ? 'text-black' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#e63946] p-1.5 sm:p-2 rounded-lg shadow-lg shadow-red-500/20">
            <Shield className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h1 className={`font-black text-lg sm:text-xl leading-none ${headerTextClass}`}>BIGS</h1>
            <p className={`text-[8px] sm:text-[10px] font-bold tracking-widest ${(isScrolled || !isHome) ? 'text-black/50' : 'text-white/70'}`}>SUPPORT SERVICES</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#e63946] ${location.pathname === link.href ? 'text-[#e63946]' : headerTextClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#e63946] ${headerTextClass}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-2xl py-6 mt-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-slate-100">
              {serviceLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`block px-8 py-3 text-sm font-bold transition-colors hover:bg-red-50 hover:text-[#e63946] ${location.pathname === link.href ? 'text-[#e63946]' : 'text-black'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {otherLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#e63946] ${location.pathname === link.href ? 'text-[#e63946]' : headerTextClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/get-quote" className="bg-[#e63946] text-white px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-red-500/20">
            Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <X className={headerTextClass} size={28} /> : <Menu className={headerTextClass} size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col h-full overflow-y-auto pt-24 pb-10 px-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-black font-black text-2xl uppercase border-b border-slate-100 pb-2 hover:text-[#e63946]">
                {link.name}
              </Link>
            ))}
            
            <div className="py-2">
              <p className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] mb-4">Our Services</p>
              <div className="grid grid-cols-1 gap-3 ml-4">
                {serviceLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="text-black font-bold text-lg hover:text-[#e63946]">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-black font-black text-2xl uppercase border-b border-slate-100 pb-2 hover:text-[#e63946]">
                {link.name}
              </Link>
            ))}
            
            <Link to="/get-quote" className="bg-[#e63946] text-white w-full py-5 mt-4 rounded-2xl font-black text-center uppercase tracking-widest shadow-xl">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
