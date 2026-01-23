
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
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
    setIsServicesMobileOpen(false);
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesMobileOpen(false);
    }
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

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
    { name: 'Careers', href: '/careers' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const headerBgClass = (isScrolled || !isHome) ? 'bg-white shadow-md' : 'bg-transparent';
  const headerTextClass = (isScrolled || !isHome) ? 'text-black' : 'text-white';
  const pyClass = isScrolled ? 'py-4 sm:py-5' : 'py-6 sm:py-[30px]';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass} ${pyClass}`}>
      <div className="w-full px-4 sm:px-[30px] flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img 
            src="https://bigs.in/lobo.jpeg" 
            alt="BIGS Logo" 
            className="h-9 sm:h-12 w-auto object-contain rounded-lg"
          />
          <div className="flex flex-col">
            <h1 className={`font-black text-base sm:text-xl leading-none ${headerTextClass}`}>BIGS</h1>
            <p className={`text-[7px] sm:text-[10px] font-bold tracking-[0.2em] ${(isScrolled || !isHome) ? 'text-black/50' : 'text-white/70'}`}>SUPPORT SERVICES</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-xs xl:text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-[#D30000] ${location.pathname === link.href ? 'text-[#D30000]' : headerTextClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative group">
            <button className={`flex items-center gap-1 text-xs xl:text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-[#D30000] ${headerTextClass}`}>
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
              className={`text-xs xl:text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-[#D30000] ${location.pathname === link.href ? 'text-[#D30000]' : headerTextClass}`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/get-quote" className="bg-[#D30000] text-white px-6 xl:px-8 py-3 rounded-md text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg">
            Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 z-50" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="text-black" size={24} /> : <Menu className={headerTextClass} size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full overflow-y-auto pt-24 pb-10 px-6 sm:px-[30px]">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-black font-black text-2xl sm:text-3xl uppercase border-b border-slate-100 pb-4 hover:text-[#D30000] transition-colors">
                {link.name}
              </Link>
            ))}
            
            <div className="flex flex-col border-b border-slate-100 pb-4">
              <button 
                onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                className="flex items-center justify-between text-black font-black text-2xl sm:text-3xl uppercase text-left hover:text-[#D30000] transition-colors"
              >
                Services <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`grid transition-all duration-300 ease-in-out ${isServicesMobileOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden flex flex-col gap-4 ml-4">
                  {serviceLinks.map((link) => (
                    <Link key={link.name} to={link.href} className="text-black/60 font-bold text-lg sm:text-xl hover:text-[#D30000] transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-black font-black text-2xl sm:text-3xl uppercase border-b border-slate-100 pb-4 hover:text-[#D30000] transition-colors">
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
