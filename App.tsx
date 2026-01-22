
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicePage } from './pages/ServicePage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { CertificationsPage } from './pages/CertificationsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { QuotePage } from './pages/QuotePage.tsx';
import { NewsPage } from './pages/NewsPage.tsx';
import { CareerPage } from './pages/CareerPage.tsx';

// ScrollToTop component to ensure pages start at the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/get-quote" element={<QuotePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
