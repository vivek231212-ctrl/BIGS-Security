
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Download, Loader2, Code2 } from 'lucide-react';
import JSZip from 'https://esm.sh/jszip';

export const Footer: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState<'php' | 'html' | 'full' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownload = async (type: 'php' | 'html') => {
    setIsDownloading(type);
    try {
      const zip = new JSZip();
      
      const globalStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        :root { --bigs-red: #D30000; }
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; color: #000; }
        .hero-overlay { background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)); }
        .text-bigs-red { color: var(--bigs-red); }
        .bg-bigs-red { background-color: var(--bigs-red); }
        .border-bigs-red { border-color: var(--bigs-red); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { display: flex; width: 200%; animation: scroll 40s linear infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        ::selection { background-color: var(--bigs-red); color: #fff; }
      `;

      const mainJs = `
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenuBtn = document.getElementById('close-menu-btn');

            // Header Scroll Effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-white', 'shadow-md', 'py-4');
                    header.classList.remove('bg-transparent', 'py-8', 'text-white');
                    header.querySelectorAll('.nav-link').forEach(l => l.classList.add('text-black'));
                    header.querySelector('.logo-text')?.classList.add('text-black');
                } else {
                    header.classList.remove('bg-white', 'shadow-md', 'py-4');
                    header.classList.add('bg-transparent', 'py-8');
                    header.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-black'));
                    header.querySelector('.logo-text')?.classList.remove('text-black');
                }
            });

            // Mobile Menu Logic
            mobileMenuBtn?.addEventListener('click', () => {
                mobileMenu?.classList.remove('translate-x-full');
            });
            closeMenuBtn?.addEventListener('click', () => {
                mobileMenu?.classList.add('translate-x-full');
            });

            // Initialize Lucide Icons
            if (window.lucide) {
                window.lucide.createIcons();
            }

            // Simple Counter Animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const end = parseInt(target.getAttribute('data-count'));
                        let start = 0;
                        const duration = 2000;
                        const increment = end / (duration / 16);
                        const timer = setInterval(() => {
                            start += increment;
                            if (start >= end) {
                                target.textContent = end + (target.getAttribute('data-suffix') || '');
                                clearInterval(timer);
                            } else {
                                target.textContent = Math.floor(start) + (target.getAttribute('data-suffix') || '');
                            }
                        }, 16);
                        observer.unobserve(target);
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.stat-counter').forEach(el => observer.observe(el));
        });
      `;

      if (type === 'html') {
        const homeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BIGS Support Services | Corporate Security & Facility Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-white text-black antialiased">
    <!-- Header -->
    <header class="fixed w-full z-50 transition-all duration-500 bg-transparent py-8 text-white">
        <div class="container mx-auto px-8 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3">
                <img src="https://bigs.in/lobo.jpeg" alt="BIGS Logo" class="h-12 w-auto object-contain rounded-lg">
                <div class="flex flex-col">
                    <h1 class="font-black text-xl leading-none uppercase tracking-tighter logo-text">BIGS</h1>
                    <p class="text-[8px] font-bold tracking-[0.2em] opacity-70 uppercase">Support Services</p>
                </div>
            </a>
            <nav class="hidden lg:flex items-center gap-10 font-black uppercase text-xs tracking-widest">
                <a href="index.html" class="text-bigs-red nav-link">Home</a>
                <a href="#about" class="nav-link hover:text-bigs-red transition-colors">About</a>
                <a href="#services" class="nav-link hover:text-bigs-red transition-colors">Services</a>
                <a href="#contact" class="nav-link hover:text-bigs-red transition-colors">Contact</a>
                <a href="#contact" class="bg-bigs-red text-white px-8 py-3 rounded hover:bg-black transition-all shadow-lg">Get Quote</a>
            </nav>
            <button id="mobile-menu-btn" class="lg:hidden p-2">
                <i data-lucide="menu" class="w-8 h-8"></i>
            </button>
        </div>
    </header>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 z-[60] bg-white translate-x-full transition-transform duration-500 lg:hidden">
        <div class="p-8 h-full flex flex-col">
            <div class="flex justify-between items-center mb-16">
                <div class="font-black text-2xl uppercase tracking-tighter">BIGS</div>
                <button id="close-menu-btn"><i data-lucide="x" class="w-8 h-8"></i></button>
            </div>
            <nav class="flex flex-col gap-8 font-black text-3xl uppercase tracking-tighter">
                <a href="index.html" class="text-bigs-red">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105" style="background-image: url('https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&oh=00_AfoHmm1XBZWDEH_hT0dS5wu35i1C4F0udLcBhWMoErfEKQ&oe=69713DB9')"></div>
        <div class="absolute inset-0 hero-overlay"></div>
        <div class="container mx-auto px-8 relative z-10 pt-20">
            <div class="max-w-4xl">
                <h4 class="text-bigs-red font-black tracking-[0.4em] uppercase text-sm mb-6">India's Leading Security Solutions</h4>
                <h1 class="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-10">
                    Total Protection<br><span class="border-b-8 border-bigs-red">Unmatched Trust</span>
                </h1>
                <p class="text-white/80 text-xl md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed">
                    World-class security guarding and facility management solutions for India's leading enterprises.
                </p>
                <div class="flex flex-wrap gap-6">
                    <a href="#services" class="bg-bigs-red text-white px-12 py-6 rounded font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-white hover:text-bigs-red transition-all shadow-2xl">
                        Our Services <i data-lucide="chevron-right" class="w-5 h-5"></i>
                    </a>
                    <a href="#contact" class="bg-transparent text-white border-2 border-white px-12 py-6 rounded font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
                        Request Audit
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-32 bg-white">
        <div class="container mx-auto px-8">
            <div class="grid lg:grid-cols-2 gap-20 items-center">
                <div class="relative">
                    <div class="overflow-hidden shadow-[30px_30px_0px_0px_rgba(211,0,0,1)] border-8 border-white">
                        <img src="https://scontent.fstv8-2.fna.fbcdn.net/o1/v/t0/f2/m421/AQNKl6KWFqpNqKN8aKf9sgtgWbUvMLes9sz851cOfObSCzWIJNVXmaMCprrfHNB9tO7NXjV01_ij-tf0V6iHB7wFyUYwW_Djl980Nr7hp2oQzg_4e6a8un9NO2sMfdQW45kwzWJuJNP0_bG4u1sykChAyT2d.jpeg?stp=s600x337&oh=00_AfqWTJKhFqY_q28jqxlYW5AQsFw_IsnB9sX_y4cgLGcLYQ&oe=696D60D7" alt="BIGS Protection" class="w-full h-auto object-cover">
                    </div>
                </div>
                <div>
                    <span class="text-bigs-red font-black tracking-[0.4em] uppercase text-xs mb-6 block">Company Profile</span>
                    <h2 class="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">Legacy of<br>Safety & Reliability</h2>
                    <p class="text-black/70 text-lg leading-relaxed mb-10 font-medium">
                        Since 1998, BIGS Support Services has been the vanguard of security excellence in India. We specialize in integrated manpower and technology solutions that safeguard assets and empower businesses across 28 states.
                    </p>
                    <div class="grid sm:grid-cols-2 gap-8 mb-12">
                        <div class="border-l-4 border-bigs-red pl-6">
                            <i data-lucide="shield-check" class="text-bigs-red w-10 h-10 mb-4"></i>
                            <h4 class="font-black text-xl uppercase tracking-tighter">ISO Certified</h4>
                            <p class="text-black/50 text-sm font-bold">Quality benchmarks since inception.</p>
                        </div>
                        <div class="border-l-4 border-bigs-red pl-6">
                            <i data-lucide="target" class="text-bigs-red w-10 h-10 mb-4"></i>
                            <h4 class="font-black text-xl uppercase tracking-tighter">Pan-India</h4>
                            <p class="text-black/50 text-sm font-bold">Presence in every major city.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 border-t border-slate-100 bg-[#F5F5F5]">
        <div class="container mx-auto px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-white p-12 text-center border-b-8 border-transparent hover:border-bigs-red transition-all group">
                    <div class="text-5xl font-black stat-counter mb-2" data-count="45000" data-suffix="+">0</div>
                    <div class="text-[10px] font-black uppercase tracking-widest opacity-40">Force Strength</div>
                </div>
                <div class="bg-white p-12 text-center border-b-8 border-transparent hover:border-bigs-red transition-all group">
                    <div class="text-5xl font-black stat-counter mb-2" data-count="1200" data-suffix="+">0</div>
                    <div class="text-[10px] font-black uppercase tracking-widest opacity-40">Corporates</div>
                </div>
                <div class="bg-white p-12 text-center border-b-8 border-transparent hover:border-bigs-red transition-all group">
                    <div class="text-5xl font-black stat-counter mb-2" data-count="28" data-suffix="">0</div>
                    <div class="text-[10px] font-black uppercase tracking-widest opacity-40">States</div>
                </div>
                <div class="bg-white p-12 text-center border-b-8 border-transparent hover:border-bigs-red transition-all group">
                    <div class="text-5xl font-black stat-counter mb-2" data-count="15" data-suffix="+">0</div>
                    <div class="text-[10px] font-black uppercase tracking-widest opacity-40">Excellence Awards</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 bg-white">
        <div class="container mx-auto px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div class="max-w-xl">
                    <span class="text-bigs-red font-black tracking-[0.4em] uppercase text-xs mb-4 block">Our Solutions</span>
                    <h2 class="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">Integrated Services</h2>
                </div>
                <a href="#" class="font-black uppercase tracking-widest text-xs border-b-4 border-bigs-red pb-2 hover:text-bigs-red transition-colors flex items-center gap-2 group">
                    All Services <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </a>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="group p-12 bg-[#F5F5F5] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                    <div class="w-16 h-16 bg-black text-white group-hover:bg-bigs-red flex items-center justify-center mb-8 transition-colors">
                        <i data-lucide="shield" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-black uppercase mb-4">Manpower Guarding</h3>
                    <p class="text-black/50 font-medium mb-8">Elite SIA-compliant personnel trained in high-stakes defensive tactics.</p>
                    <span class="text-bigs-red font-black uppercase text-[10px] tracking-widest group-hover:pl-4 transition-all flex items-center gap-2">Read More <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
                </div>
                <div class="group p-12 bg-[#F5F5F5] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                    <div class="w-16 h-16 bg-black text-white group-hover:bg-bigs-red flex items-center justify-center mb-8 transition-colors">
                        <i data-lucide="cctv" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-black uppercase mb-4">Tech Surveillance</h3>
                    <p class="text-black/50 font-medium mb-8">AI-driven monitoring systems and centralized command solutions.</p>
                    <span class="text-bigs-red font-black uppercase text-[10px] tracking-widest group-hover:pl-4 transition-all flex items-center gap-2">Read More <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
                </div>
                <div class="group p-12 bg-[#F5F5F5] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
                    <div class="w-16 h-16 bg-black text-white group-hover:bg-bigs-red flex items-center justify-center mb-8 transition-colors">
                        <i data-lucide="building-2" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-black uppercase mb-4">Facility Mgmt</h3>
                    <p class="text-black/50 font-medium mb-8">Comprehensive maintenance and soft services for infrastructure.</p>
                    <span class="text-bigs-red font-black uppercase text-[10px] tracking-widest group-hover:pl-4 transition-all flex items-center gap-2">Read More <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
                </div>
            </div>
        </div>
    </section>

    <!-- Scrolling Clients -->
    <section class="py-24 border-y border-slate-100 overflow-hidden bg-white">
        <div class="container mx-auto px-8 mb-16 text-center">
            <span class="text-bigs-red font-black tracking-[0.3em] uppercase text-[10px]">Enterprise Trust</span>
        </div>
        <div class="relative">
            <div class="animate-scroll">
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Google</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Amazon</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Reliance</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Tata</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">HDFC</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Infosys</div>
                <!-- Duplicate for seamless scroll -->
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Google</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Amazon</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Reliance</div>
                <div class="flex-shrink-0 px-16 opacity-30 grayscale hover:opacity-100 transition-all font-black text-3xl uppercase tracking-tighter">Tata</div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-bigs-red text-white pt-32 pb-16 relative">
        <div class="container mx-auto px-8">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-20 mb-20">
                <div>
                    <div class="flex items-center gap-3 mb-10">
                        <div class="bg-white p-1 rounded font-black text-bigs-red text-2xl uppercase tracking-tighter">BIGS</div>
                        <div class="text-[8px] font-black text-black tracking-[0.2em] uppercase">Support Services</div>
                    </div>
                    <p class="text-white/80 leading-relaxed font-medium mb-10">
                        Protecting progress through excellence since 1998. The most trusted integrated force in India.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-12 h-12 bg-black rounded flex items-center justify-center hover:bg-white hover:text-black transition-all"><i data-lucide="facebook" class="w-5 h-5"></i></a>
                        <a href="#" class="w-12 h-12 bg-black rounded flex items-center justify-center hover:bg-white hover:text-black transition-all"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                        <a href="#" class="w-12 h-12 bg-black rounded flex items-center justify-center hover:bg-white hover:text-black transition-all"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="text-black font-black uppercase tracking-widest text-xs mb-10">Headquarters</h4>
                    <p class="text-white font-bold text-sm leading-relaxed">
                        102, Western Plaza,<br>Udhna Main Road, Surat,<br>Gujarat, India - 394210
                    </p>
                </div>
                <div>
                    <h4 class="text-black font-black uppercase tracking-widest text-xs mb-10">Divisions</h4>
                    <ul class="space-y-4 font-black text-[10px] uppercase tracking-widest">
                        <li><a href="#" class="hover:text-black">Physical Guarding</a></li>
                        <li><a href="#" class="hover:text-black">Facility Mgmt</a></li>
                        <li><a href="#" class="hover:text-black">Tech Solutions</a></li>
                        <li><a href="#" class="hover:text-black">Consulting</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-black font-black uppercase tracking-widest text-xs mb-10">Support</h4>
                    <p class="text-2xl font-black mb-2">+91 261 2278091</p>
                    <p class="text-white/70 font-bold">ho.surat@bigs.in</p>
                </div>
            </div>
            <div class="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-[10px] font-black uppercase tracking-widest text-white/50">© 2024 BIGS Support Services Pvt. Ltd.</p>
                <div class="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/50">
                    <a href="#" class="hover:text-white">Privacy</a>
                    <a href="#" class="hover:text-white">Terms</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>`;

        zip.file("index.html", homeHtml);
        zip.folder("css").file("style.css", globalStyles);
        zip.folder("js").file("main.js", mainJs);
        
      } else {
        // PHP Version with includes (Modular Structure)
        zip.folder("includes").file("header.php", `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title><?php echo $title; ?> | BIGS</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>`);
        zip.folder("includes").file("footer.php", `<footer class="bg-red-600 text-white p-10 text-center">© 2024 BIGS</footer></body></html>`);
        zip.file("index.php", `<?php $title="Home"; include 'includes/header.php'; ?> <main><h1>Welcome to BIGS</h1></main> <?php include 'includes/footer.php'; ?>`);
        zip.folder("css").file("style.css", globalStyles);
      }

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `BIGS_Export_${type.toUpperCase()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(null);
    }
  };

  return (
    <footer className="bg-[#D30000] text-white pt-24 pb-12 relative border-t-8 border-black">
      <div className="w-full px-[30px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <img 
                src="https://bigs.in/lobo.jpeg" 
                alt="BIGS Logo" 
                className="h-14 w-auto object-contain bg-white p-1 rounded-md"
              />
              <div className="flex flex-col">
                <h1 className="font-black text-2xl leading-none text-white uppercase tracking-tight">BIGS</h1>
                <p className="text-[10px] font-bold tracking-[0.2em] text-black">SUPPORT SERVICES</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-8 font-medium">
              Protecting progress through excellence in security and facility management across the Indian subcontinent since 1998.
            </p>
            
            {/* Download Action Section */}
            <div className="space-y-4 mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50 mb-4">Developer Export</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleDownload('html')}
                  disabled={isDownloading !== null}
                  className="group flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-xl disabled:opacity-50"
                >
                  {isDownloading === 'html' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Code2 className="w-4 h-4" />}
                  Download Structured HTML
                </button>
                <button 
                  onClick={() => handleDownload('php')}
                  disabled={isDownloading !== null}
                  className="flex items-center justify-center gap-3 bg-white text-[#D30000] px-6 py-4 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl disabled:opacity-50"
                >
                  {isDownloading === 'php' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  Modular PHP Bundle
                </button>
              </div>
              <p className="text-[8px] font-black text-black/30 uppercase tracking-widest">Zip includes css/ style, js/ main, and index assets</p>
            </div>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-black text-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-black">Company</h4>
            <ul className="space-y-4 font-black uppercase text-xs tracking-widest">
              <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link></li>
              <li><Link to="/certifications" className="hover:text-black transition-colors">Compliance</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-black">Divisions</h4>
            <ul className="space-y-4 font-black uppercase text-xs tracking-widest">
              <li><Link to="/services/physical-guarding" className="hover:text-black transition-colors">Guarding</Link></li>
              <li><Link to="/services/command-centre" className="hover:text-black transition-colors">Command Center</Link></li>
              <li><Link to="/services/integrated-facility" className="hover:text-black transition-colors">Facility Mgmt</Link></li>
              <li><Link to="/services/electronic-security" className="hover:text-black transition-colors">E-Surveillance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-black">Headquarters</h4>
            <div className="font-bold space-y-6 text-sm text-white">
              <p>102, Western Plaza,<br />Udhna Main Road, Surat,<br />Gujarat, India - 394210</p>
              <div className="space-y-2">
                <p className="text-white/60 uppercase text-[10px] tracking-widest">Contact Lines</p>
                <p className="font-black">+91 261 2278091</p>
                <p className="font-black">ho.surat@bigs.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">
            © 2024 BIGS Support Services Pvt. Ltd. | All Rights Reserved
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/60">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="absolute -top-6 right-10 bg-black text-white p-4 rounded-md shadow-2xl hover:bg-white hover:text-black hover:-translate-y-2 transition-all group">
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
