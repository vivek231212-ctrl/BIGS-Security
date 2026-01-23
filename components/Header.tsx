
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';

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
    <>
      {/* Great Place to Work Badge - Visible only at the top of the page */}
      <div 
        className={`fixed top-0 right-4 sm:right-[30px] z-[60] pointer-events-none transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="bg-white border-x border-b border-slate-200 shadow-2xl p-2.5 sm:p-3 rounded-b-lg flex flex-col items-center justify-center min-w-[70px] sm:min-w-[85px] pointer-events-auto group">
          <div className="text-[#D30000] font-black text-[8px] sm:text-[10px] leading-tight uppercase text-center tracking-tighter">
            Great<br/>Place<br/>To<br/>Work
          </div>
          <div className="w-full h-[1px] bg-[#D30000]/20 my-1.5 sm:my-2" />
          <div className="bg-[#D30000] text-white text-[7px] sm:text-[9px] font-black uppercase px-2 py-0.5 rounded-[1px] tracking-widest">
            Certified
          </div>
          <div className="text-black/40 text-[5px] sm:text-[7px] font-black mt-1.5 uppercase tracking-tighter">
            MAR 2024 - 2025
          </div>
          <div className="text-black/10 mt-1.5 sm:mt-2">
            <Award size={14} className="sm:size-12" />
          </div>
        </div>
      </div>

      <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass} ${pyClass}`}>
        <div className="w-full px-6 sm:px-[30px] flex justify-between items-center">
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mr-16 sm:mr-24 xl:mr-32">
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

          {/* Mobile Toggle - Dynamic Margin based on Scroll */}
          <button 
            className={`lg:hidden p-3 z-50 transition-all duration-300 hover:bg-black/5 rounded-full flex items-center justify-center ${
              isScrolled ? 'mr-0' : 'mr-14 sm:mr-20'
            }`} 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="text-black" size={26} /> : <Menu className={headerTextClass} size={26} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col h-full overflow-y-auto pt-8 pb-10 px-6 sm:px-[30px]">
            {/* Mobile Menu Logo Header */}
            <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                <img 
                  src="https://bigs.in/lobo.jpeg" 
                  alt="BIGS Logo" 
                  className="h-10 w-auto object-contain rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="font-black text-xl leading-none text-black uppercase tracking-tighter">BIGS</h1>
                  <p className="text-[8px] font-bold tracking-[0.2em] text-black/50">SUPPORT SERVICES</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className={`font-black text-2xl sm:text-3xl uppercase border-b border-slate-100 pb-4 transition-colors ${location.pathname === link.href ? 'text-[#D30000]' : 'text-black hover:text-[#D30000]'}`}>
                  {link.name}
                </Link>
              ))}
              
              <div className="flex flex-col border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                  className={`flex items-center justify-between font-black text-2xl sm:text-3xl uppercase text-left transition-colors ${location.pathname.startsWith('/services') ? 'text-[#D30000]' : 'text-black hover:text-[#D30000]'}`}
                >
                  Services <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isServicesMobileOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isServicesMobileOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden flex flex-col gap-4 ml-4">
                    {serviceLinks.map((link) => (
                      <Link key={link.name} to={link.href} className={`font-bold text-lg sm:text-xl transition-colors ${location.pathname === link.href ? 'text-[#D30000]' : 'text-black/60 hover:text-[#D30000]'}`}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {otherLinks.map((link) => (
                <Link key={link.name} to={link.href} className={`font-black text-2xl sm:text-3xl uppercase border-b border-slate-100 pb-4 transition-colors ${location.pathname === link.href ? 'text-[#D30000]' : 'text-black hover:text-[#D30000]'}`}>
                  {link.name}
                </Link>
              ))}
              
              <Link to="/get-quote" className="bg-[#D30000] text-white w-full py-5 mt-6 rounded-md font-black text-center uppercase tracking-widest shadow-xl hover:bg-black transition-all">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
