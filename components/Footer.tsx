
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
      
      const commonCss = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .bg-bigs-red { background-color: #D30000; }
        .text-bigs-red { color: #D30000; }
        .border-bigs-red { border-color: #D30000; }
      `;

      if (type === 'html') {
        const pages = [
          { name: 'index.html', title: 'Home' },
          { name: 'about.html', title: 'About Us' },
          { name: 'services.html', title: 'Our Services' },
          { name: 'gallery.html', title: 'Operational Gallery' },
          { name: 'certifications.html', title: 'Compliance & Certifications' },
          { name: 'contact.html', title: 'Contact Us' },
          { name: 'get-quote.html', title: 'Request a Quote' }
        ];

        pages.forEach(page => {
          zip.file(page.name, `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title} | BIGS Support Services</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>${commonCss}</style>
</head>
<body class="bg-white text-black">
    <header class="p-6 bg-white shadow-md flex justify-between items-center">
        <div class="font-black text-2xl">BIGS</div>
        <nav class="space-x-6 font-bold uppercase text-xs tracking-widest">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>
    <main class="py-20 container mx-auto px-6">
        <h1 class="text-6xl font-black uppercase mb-8">${page.title}</h1>
        <p class="text-xl text-gray-600 mb-12">Total protection and integrated facility management solutions.</p>
        <div class="h-96 bg-gray-100 flex items-center justify-center border-4 border-dashed border-gray-200">
            [Content Section for ${page.title}]
        </div>
    </main>
    <footer class="bg-bigs-red text-white p-20 text-center">
        <p class="font-black uppercase tracking-widest">&copy; 2024 BIGS Support Services</p>
    </footer>
</body>
</html>`);
        });
        
        zip.folder("assets/css").file("main.css", commonCss);
      } else {
        // PHP Version with includes
        zip.folder("includes").file("header.php", `<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?> | BIGS Support Services</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>${commonCss}</style>
</head>
<body class="bg-white text-black">
    <header class="p-6 bg-white shadow-md flex justify-between items-center">
        <div class="font-black text-2xl">BIGS</div>
        <nav class="space-x-6 font-bold uppercase text-xs tracking-widest">
            <a href="index.php">Home</a>
            <a href="about.php">About</a>
            <a href="services.php">Services</a>
            <a href="contact.php">Contact</a>
        </nav>
    </header>`);

        zip.folder("includes").file("footer.php", `
    <footer class="bg-bigs-red text-white p-20 text-center mt-20">
        <p class="font-black uppercase tracking-widest">&copy; <?php echo date('Y'); ?> BIGS Support Services</p>
    </footer>
</body>
</html>`);

        const phpPages = [
          { name: 'index.php', title: 'Home' },
          { name: 'about.php', title: 'About Us' },
          { name: 'services.php', title: 'Our Services' },
          { name: 'gallery.php', title: 'Operational Gallery' },
          { name: 'certifications.php', title: 'Compliance & Certifications' },
          { name: 'contact.php', title: 'Contact Us' },
          { name: 'get-quote.php', title: 'Request a Quote' }
        ];

        phpPages.forEach(page => {
          zip.file(page.name, `<?php 
$pageTitle = "${page.title}";
include 'includes/header.php'; 
?>
<main class="py-20 container mx-auto px-6">
    <h1 class="text-6xl font-black uppercase mb-8"><?php echo $pageTitle; ?></h1>
    <p class="text-xl text-gray-600 mb-12">Professional security and facility management solutions for India's leading enterprises.</p>
    <div class="bg-gray-50 p-20 border-l-8 border-[#D30000]">
        <h3 class="text-2xl font-black mb-4">Core Protection Services</h3>
        <p>This is a template section for the ${page.title} page content.</p>
    </div>
</main>
<?php include 'includes/footer.php'; ?>`);
        });

        zip.folder("config").file("db.php", "<?php \n// Database Configuration\n$host = 'localhost';\n$user = 'root';\n$pass = '';\n$db = 'bigs_db';\n?>");
      }

      // Metadata for the package
      zip.file("README.txt", `BIGS Support Services - Full Website Package
Format: ${type.toUpperCase()}
Includes:
- Home Page
- About Us
- Services
- Gallery
- Certifications/Compliance
- Contact Us
- Quote Request Page

Documentation:
1. Extract the ZIP file.
${type === 'php' ? '2. Place in your web server (XAMPP/WAMP/LAMP) htdocs folder.\n3. Configure config/db.php if needed.' : '2. Open index.html in any modern browser.'}`);

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `BIGS_Complete_Site_${type.toUpperCase()}.zip`;
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
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50 mb-4">Export Full Website</p>
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
              <p className="text-[8px] font-black text-black/30 uppercase tracking-widest">Includes 7 Main Pages & Core Components</p>
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
