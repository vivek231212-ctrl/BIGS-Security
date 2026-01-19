
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

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
  const headerBgClass = (isScrolled || !isHome) ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';
  const headerTextClass = (isScrolled || !isHome) ? 'text-black' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-[30px] flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://bigs.in/lobo.jpeg" 
            alt="BIGS Logo" 
            className="h-10 sm:h-12 w-auto object-contain rounded-lg"
          />
          <div className="flex flex-col">
            <h1 className={`font-black text-lg sm:text-xl leading-none ${headerTextClass}`}>BIGS</h1>
            <p className={`text-[8px] sm:text-[10px] font-bold tracking-[0.2em] ${(isScrolled || !isHome) ? 'text-black/50' : 'text-white/70'}`}>SUPPORT SERVICES</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-[#D30000] ${location.pathname === link.href ? 'text-[#D30000]' : headerTextClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-[#D30000] ${headerTextClass}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-xl py-4 mt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-slate-100">
              {serviceLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`block px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors hover:bg-red-50 hover:text-[#D30000] ${location.pathname === link.href ? 'text-[#D30000]' : 'text-black'}`}
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
              className={`text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-[#D30000] ${location.pathname === link.href ? 'text-[#D30000]' : headerTextClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/get-quote" className="bg-[#D30000] text-white px-8 py-3 rounded-md text-xs font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg">
            Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="text-black" size={28} /> : <Menu className={headerTextClass} size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col h-full overflow-y-auto pt-6 pb-10 px-[30px]">
          {/* Mobile Menu Logo Branding */}
          <div className="flex items-center gap-4 mb-12 pb-6 border-b border-slate-100">
            <img 
              src="https://bigs.in/lobo.jpeg" 
              alt="BIGS Logo" 
              className="h-14 w-auto object-contain rounded-xl shadow-sm"
            />
            <div className="flex flex-col">
              <h1 className="font-black text-2xl leading-none text-black">BIGS</h1>
              <p className="text-[10px] font-black tracking-[0.2em] text-[#D30000] uppercase">SUPPORT SERVICES</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-black font-black text-2xl uppercase border-b border-slate-100 pb-4 hover:text-[#D30000]">
                {link.name}
              </Link>
            ))}
            
            <div className="py-2">
              <p className="text-[10px] font-black text-[#D30000] uppercase tracking-[0.2em] mb-6">Our Services</p>
              <div className="grid grid-cols-1 gap-4 ml-4">
                {serviceLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="text-black font-bold text-lg hover:text-[#D30000]">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-black font-black text-2xl uppercase border-b border-slate-100 pb-4 hover:text-[#D30000]">
                {link.name}
              </Link>
            ))}
            
            <Link to="/get-quote" className="bg-[#D30000] text-white w-full py-5 mt-6 rounded-md font-black text-center uppercase tracking-widest shadow-xl">
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
