
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Download, Loader2, Code2, Globe, FileCode, Mail, Phone, MapPin } from 'lucide-react';
import JSZip from 'https://esm.sh/jszip';

export const Footer: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState<'php' | 'html' | null>(null);

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
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; color: #000; background-color: #fff; overflow-x: hidden; }
        .hero-overlay { background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)); }
        .text-bigs-red { color: var(--bigs-red); }
        .bg-bigs-red { background-color: var(--bigs-red); }
        .border-bigs-red { border-color: var(--bigs-red); }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { display: flex; width: 200%; animation: scroll 40s linear infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        ::selection { background-color: var(--bigs-red); color: #fff; }
        .stat-card:hover { border-bottom-color: var(--bigs-red); transform: translateY(-5px); }
        .service-card:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); border-color: transparent; }
        .industry-card:hover img { filter: grayscale(0); transform: scale(1.05); }
        .industry-card .overlay { background: rgba(0,0,0,0.6); transition: all 0.5s; }
        .industry-card:hover .overlay { background: rgba(0,0,0,0.2); }
        .transition-slow { transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
      `;

      const mainJs = `
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenuBtn = document.getElementById('close-menu-btn');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-white', 'shadow-xl', 'py-4');
                    header.classList.remove('bg-transparent', 'py-8', 'text-white');
                    header.querySelectorAll('.nav-link').forEach(l => {
                        l.classList.add('text-black');
                        l.classList.remove('text-white');
                    });
                } else {
                    header.classList.remove('bg-white', 'shadow-xl', 'py-4');
                    header.classList.add('bg-transparent', 'py-8');
                    header.querySelectorAll('.nav-link').forEach(l => {
                        l.classList.remove('text-black');
                        l.classList.add('text-white');
                    });
                }
            });

            mobileMenuBtn?.addEventListener('click', () => mobileMenu?.classList.remove('translate-x-full'));
            closeMenuBtn?.addEventListener('click', () => mobileMenu?.classList.add('translate-x-full'));

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const end = parseInt(target.getAttribute('data-count'));
                        let start = 0;
                        const duration = 2000;
                        const step = end / (duration / 16);
                        const timer = setInterval(() => {
                            start += step;
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

            if (window.lucide) window.lucide.createIcons();
        });
      `;

      if (type === 'html') {
        const homeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BIGS Support Services | Corporate Security</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="antialiased">
    <header class="fixed w-full z-50 transition-all duration-500 bg-transparent py-8 text-white">
        <div class="container mx-auto px-8 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-3">
                <img src="https://bigs.in/lobo.jpeg" alt="BIGS Logo" class="h-12 w-auto object-contain rounded-lg">
                <div class="flex flex-col">
                    <h1 class="font-black text-xl leading-none uppercase tracking-tighter">BIGS</h1>
                    <p class="text-[8px] font-bold tracking-[0.2em] opacity-70 uppercase">Support Services</p>
                </div>
            </a>
            <nav class="hidden lg:flex items-center gap-10 font-black uppercase text-xs tracking-widest">
                <a href="index.html" class="text-bigs-red nav-link">Home</a>
                <a href="#about" class="nav-link hover:text-bigs-red transition-colors">About</a>
                <a href="#services" class="nav-link hover:text-bigs-red transition-colors">Services</a>
                <a href="#contact" class="nav-link hover:text-bigs-red transition-colors">Contact</a>
            </nav>
        </div>
    </header>

    <section class="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105" style="background-image: url('https://scontent.fstv8-2.fna.fbcdn.net/v/t39.30808-6/614388964_921705314365677_8961878546008505667_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e1afaa&_nc_ohc=cWiVWoZCdHsQ7kNvwElTFxd&oh=00_AfoHmm1XBZWDEH_hT0dS5wu35i1C4F0udLcBhWMoErfEKQ&oe=69713DB9')"></div>
        <div class="absolute inset-0 hero-overlay"></div>
        <div class="container mx-auto px-8 relative z-10">
            <h1 class="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] mb-10">Total Protection</h1>
        </div>
    </section>

    <footer id="contact" class="bg-bigs-red text-white pt-32 pb-16 relative border-t-8 border-black">
        <div class="container mx-auto px-8">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-20">
                <div>
                    <h4 className="text-black font-black uppercase tracking-widest text-xs mb-10">Address</h4>
                    <p className="text-white font-bold text-sm leading-relaxed">27/B, T-12, Silicon Shoppers, Third Floor,<br>Opp. Satyanagar, Main Road, Udhna,<br>Surat – 394210</p>
                </div>
                <div>
                    <h4 className="text-black font-black uppercase tracking-widest text-xs mb-10">Contact</h4>
                    <p className="text-2xl font-black">+91 93766 44227</p>
                    <p className="text-2xl font-black">+91 0261-2278091</p>
                </div>
                <div>
                    <h4 className="text-black font-black uppercase tracking-widest text-xs mb-10">Emails</h4>
                    <p className="font-bold">ho.surat@bigs.in</p>
                    <p className="font-bold">support@bigssupport.com</p>
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
        zip.file("index.php", `<?php include 'includes/header.php'; ?> <main><h1>BIGS Security</h1></main> <?php include 'includes/footer.php'; ?>`);
        zip.folder("includes").file("header.php", `<!DOCTYPE html><html><head><title>BIGS</title></head><body>`);
        zip.folder("includes").file("footer.php", `</body></html>`);
        zip.folder("css").file("style.css", globalStyles);
        zip.folder("js").file("main.js", mainJs);
      }

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `BIGS_Site_${type.toUpperCase()}.zip`;
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
            
            <div className="bg-black/20 p-6 rounded-2xl mb-10 border border-white/10">
               <h5 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-black flex items-center gap-2">
                 <Globe className="w-3 h-3" /> Webmaster Tools
               </h5>
               <div className="grid grid-cols-1 gap-3">
                 <button 
                   onClick={() => handleDownload('html')}
                   disabled={isDownloading !== null}
                   className="flex items-center justify-center gap-3 bg-black text-white px-5 py-3.5 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-white hover:text-black transition-all shadow-lg disabled:opacity-50"
                 >
                   {isDownloading === 'html' ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileCode className="w-4 h-4" />}
                   Export as HTML/CSS
                 </button>
                 <button 
                   onClick={() => handleDownload('php')}
                   disabled={isDownloading !== null}
                   className="flex items-center justify-center gap-3 bg-white text-black px-5 py-3.5 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-black hover:text-white transition-all shadow-lg disabled:opacity-50"
                 >
                   {isDownloading === 'php' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Code2 className="w-4 h-4" />}
                   Full Source (PHP)
                 </button>
               </div>
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
              <li><Link to="/careers" className="hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link></li>
              <li><Link to="/certifications" className="hover:text-black transition-colors">Compliance</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/get-quote" className="hover:text-black transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-black">Contact us</h4>
            <div className="font-bold space-y-8 text-sm text-white">
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-black/30 rounded flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 uppercase text-[9px] tracking-widest mb-1">Direct Line</p>
                    <p className="font-black text-lg">+91 93766 44227</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-black/30 rounded flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 uppercase text-[9px] tracking-widest mb-1">Office Landline</p>
                    <p className="font-black text-lg">+91 0261-2278091</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-black/30 rounded flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/60 uppercase text-[9px] tracking-widest mb-1">Principal Office</p>
                    <p className="leading-relaxed text-xs">
                      27/B, T-12, Silicon Shoppers, Third Floor,<br />
                      Opp. Satyanagar, Main Road, Udhna,<br />
                      Surat – 394210, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black mb-10 uppercase tracking-[0.3em] text-black">Official Correspondence</h4>
            <div className="font-bold space-y-6 text-sm text-white">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black/30 rounded flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white/60 uppercase text-[9px] tracking-widest mb-1">Corporate Enquiries</p>
                    <p className="font-black truncate">ho.surat@bigs.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black/30 rounded flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white/60 uppercase text-[9px] tracking-widest mb-1">Security & Manpower</p>
                    <p className="font-black truncate">bigs.security@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black/30 rounded flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white/60 uppercase text-[9px] tracking-widest mb-1">Client Support</p>
                    <p className="font-black truncate">support@bigssupport.com</p>
                  </div>
                </div>
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
