import { Code2, Network, Cloud, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code2,
      label: t('about.backend'),
      description: t('about.backend.desc'),
    },
    {
      icon: Network,
      label: t('about.networking'),
      description: t('about.networking.desc'),
    },
    {
      icon: Cloud,
      label: t('about.cloud'),
      description: t('about.cloud.desc'),
    },
    {
      icon: Cpu,
      label: t('about.system'),
      description: t('about.system.desc'),
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute top-0 left-1/3 w-64 h-64 rounded-full opacity-5 blur-[120px]"
        style={{ background: 'var(--electric-violet)' }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block text-4xl md:text-5xl font-heading mb-4 bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
        </motion.div>

        {/* Main content card */}
        <motion.div 
          className="backdrop-blur-sm bg-[var(--card)]/40 border rounded-2xl p-8 md:p-12 shadow-2xl"
          style={{ borderColor: 'var(--border)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio section */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.bio1')} <span className="font-medium" style={{ color: 'var(--cyan-glow)' }}>{t('about.bio1b')}</span> {t('about.bio1c')}{' '}
                <span className="font-medium" style={{ color: 'var(--electric-violet)' }}>{t('about.bio1d')}</span> {t('about.bio1e')}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.bio2')}
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                {t('about.bio3')}
              </p>
            </div>

            {/* Constellation-style highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative p-6 backdrop-blur-sm bg-[var(--accent)]/20 border rounded-xl transition-all duration-300"
                    style={{ borderColor: 'var(--border)' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: 'rgba(0, 217, 255, 0.5)',
                    }}
                  >
                    {/* Constellation dot */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full shadow-lg" style={{ 
                      background: 'var(--cyan-glow)',
                      boxShadow: '0 0 10px var(--cyan-glow)'
                    }} />
                    
                    <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" style={{ color: 'var(--cyan-glow)' }} />
                    <h3 className="font-heading text-sm mb-1">{item.label}</h3>
                    <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
