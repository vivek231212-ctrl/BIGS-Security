
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Download, Loader2 } from 'lucide-react';
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
      
      // Mocking project files for the download
      // In a real scenario, we'd fetch the source code or use the build manifest
      if (type === 'html') {
        zip.file("index.html", "<!DOCTYPE html><html><head><title>BIGS Support Services</title></head><body><h1>Static HTML Version</h1></body></html>");
        zip.file("assets/css/style.css", "/* Corporate Styles */");
        zip.file("assets/js/main.js", "// Site Logic");
      } else {
        zip.file("index.php", "<?php include('includes/header.php'); ?>\n<main>Core PHP Content</main>\n<?php include('includes/footer.php'); ?>");
        zip.folder("includes").file("header.php", "<header>PHP Header</header>");
        zip.folder("includes").file("footer.php", "<footer>PHP Footer</footer>");
        zip.folder("config").file("db.php", "<?php // Database Configuration ?>");
      }

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `BIGS_Project_Design_${type.toUpperCase()}.zip`;
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
            
            {/* Download Buttons Section */}
            <div className="space-y-4 mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50 mb-4">Export Design</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleDownload('php')}
                  disabled={isDownloading !== null}
                  className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-xl disabled:opacity-50"
                >
                  {isDownloading === 'php' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  Download in Core PHP
                </button>
                <button 
                  onClick={() => handleDownload('html')}
                  disabled={isDownloading !== null}
                  className="flex items-center justify-center gap-3 bg-white text-[#D30000] px-6 py-4 rounded-md font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl disabled:opacity-50"
                >
                  {isDownloading === 'html' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  Download in HTML
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
