import { Starfield } from '@/app/components/Starfield';
import { ChevronDown, Radio } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { LanguageSwitcher } from '@/app/components/LanguageSwitcher';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Starfield />
      <LanguageSwitcher />
      {/* Cosmic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--space-black)] pointer-events-none" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-[100px]"
        style={{ background: 'var(--cyan-glow)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-[100px]"
        style={{ background: 'var(--electric-violet)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* NASA-style status indicator */}
      <motion.div 
        className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 bg-[var(--deep-space)]/80 border rounded-lg backdrop-blur-sm"
        style={{ borderColor: 'var(--cyan-glow)' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <Radio className="w-4 h-4" style={{ color: 'var(--cyan-glow)' }} />
        <span className="text-xs font-mono" style={{ color: 'var(--cyan-glow)' }}>{t('hero.systemOnline')}</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Orbital ring decoration */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border rounded-full pointer-events-none hidden md:block"
          style={{ borderColor: 'rgba(0, 217, 255, 0.1)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border rounded-full pointer-events-none hidden md:block"
          style={{ borderColor: 'rgba(168, 85, 247, 0.1)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="space-y-6">
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase opacity-80 block mb-4" style={{ color: 'var(--cyan-glow)' }}>
              {t('hero.portfolio')}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading tracking-tight mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[var(--starlight-white)] via-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-3 text-lg md:text-xl mb-6"
            style={{ color: 'var(--starlight-white)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-medium">{t('hero.role1')}</span>
            <span className="hidden md:inline" style={{ color: 'var(--cyan-glow)' }}>|</span>
            <span className="font-medium">{t('hero.role2')}</span>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t('hero.tagline')}
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              style={{ 
                background: 'linear-gradient(to right, var(--cyan-glow), var(--soft-cyan))',
                color: 'var(--space-black)'
              }}
            >
              <span className="font-heading tracking-wide">{t('hero.viewProjects')}</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              style={{ 
                borderColor: 'var(--electric-violet)',
                color: 'var(--electric-violet)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--electric-violet)';
                e.currentTarget.style.color = 'var(--space-black)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--electric-violet)';
              }}
            >
              <span className="font-heading tracking-wide">{t('hero.getInTouch')}</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 opacity-60" style={{ color: 'var(--cyan-glow)' }} />
      </motion.button>
    </section>
  );
}