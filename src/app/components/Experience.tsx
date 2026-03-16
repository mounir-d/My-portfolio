import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();
  
  const timeline = [
    {
      type: 'education',
      icon: GraduationCap,
      title: t('experience.masters'),
      organization: t('experience.university'),
      period: '2019 - 2024',
      description: t('experience.masters.desc'),
      color: '#00d9ff',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: t('experience.senior'),
      organization: t('experience.senior.org'),
      period: '2024 - 2026',
      description: t('experience.senior.desc'),
      color: '#a855f7',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: t('experience.network'),
      organization: t('experience.network.org'),
      period: '2025',
      description: t('experience.network.desc'),
      color: '#22d3ee',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: t('experience.bachelor'),
      organization: t('experience.university'),
      period: '2019 - 2022',
      description: t('experience.bachelor.desc'),
      color: '#c084fc',
    },
    {
      type: 'research',
      icon: Award,
      title: t('experience.research'),
      organization: t('experience.research.org'),
      period: '2024',
      description: t('experience.research.desc'),
      color: '#00d9ff',
    },
  ];

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-[var(--deep-space)]/30 to-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block text-4xl md:text-5xl font-heading mb-4 bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--cyan-glow)] via-[var(--electric-violet)] to-[var(--soft-cyan)] transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline node */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center shadow-lg"
                      style={{ 
                        background: `${item.color}20`,
                        borderColor: item.color,
                        boxShadow: `0 0 20px ${item.color}50`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 0 30px ${item.color}80`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </motion.div>
                  </motion.div>

                  {/* Content card */}
                  <div className={`ml-28 md:ml-0 flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <motion.div 
                      className="backdrop-blur-sm bg-[var(--card)]/60 border rounded-xl p-6 group"
                      style={{ borderColor: 'var(--border)' }}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: item.color,
                        boxShadow: `0 0 25px ${item.color}20`,
                      }}
                    >
                      <div className="mb-2">
                        <span 
                          className="inline-block px-3 py-1 text-xs font-mono rounded-full border"
                          style={{ 
                            background: `${item.color}20`,
                            color: item.color,
                            borderColor: `${item.color}30`
                          }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl mb-2 group-hover:scale-105 transition-transform inline-block" style={{ color: item.color }}>
                        {item.title}
                      </h3>
                      <p className="font-medium mb-3" style={{ color: 'var(--electric-violet)' }}>{item.organization}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
