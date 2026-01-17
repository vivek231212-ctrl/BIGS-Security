
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Stats } from './components/Stats.tsx';
import { Services } from './components/Services.tsx';
import { Industries } from './components/Industries.tsx';
import { TechInnovation } from './components/TechInnovation.tsx';
import { Training } from './components/Training.tsx';
import { Leadership } from './components/Leadership.tsx';
import { Milestones } from './components/Milestones.tsx';
import { News } from './components/News.tsx';
import { CareersCTA } from './components/CareersCTA.tsx';
import { ClientLogos } from './components/Clients.tsx';
import { ContactCTA } from './components/ContactCTA.tsx';
import { Footer } from './components/Footer.tsx';

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
