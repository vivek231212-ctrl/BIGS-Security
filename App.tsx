
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  Building2, 
  Cctv, 
  Truck, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Menu, 
  X,
  Award,
  Calendar,
  Zap,
  Microscope,
  Briefcase
} from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { TechInnovation } from './components/TechInnovation';
import { Training } from './components/Training';
import { Leadership } from './components/Leadership';
import { Milestones } from './components/Milestones';
import { News } from './components/News';
import { CareersCTA } from './components/CareersCTA';
import { ClientLogos } from './components/Clients';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Industries />
        <TechInnovation />
        <Training />
        <Leadership />
        <Milestones />
        <News />
        <CareersCTA />
        <ClientLogos />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
