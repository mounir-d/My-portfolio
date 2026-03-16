import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Experience } from '@/app/components/Experience';
import { Projects } from '@/app/components/Projects';
import { Certifications } from '@/app/components/Certifications';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { LanguageProvider } from '@/app/contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-space-black text-starlight-white overflow-x-hidden">
        {/* Smooth scroll behavior */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: var(--space-black);
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, var(--cyan-glow), var(--electric-violet));
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: var(--cyan-glow);
          }
        `}</style>

        
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}