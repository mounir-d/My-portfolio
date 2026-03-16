import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      category: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 95 },
        { name: 'Php', level: 90 },
        { name: 'SQL/NoSQL', level: 85 },
      ],
      color: '#00d9ff',
    },
    {
      category: t('skills.networking'),
      skills: [
        { name: 'TCP/IP', level: 95 },
        { name: 'Routing & Switching', level: 90 },
        { name: 'Network Security', level: 85 },
        { name: 'Linux Administration', level: 85 },
        { name: 'Network Protocols', level: 93 },
      ],
      color: '#a855f7',
    },
    {
      category: t('skills.cloud'),
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Openstack', level: 70 },
      ],
      color: '#22d3ee',
    },
    {
      category: t('skills.tools'),
     skills: [
        { name: 'Git', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Laravel', level: 90 },
        { name: 'Springboot', level: 95 },
      ],
      color: '#c084fc',
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background grid pattern - NASA style */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="inline-block text-4xl md:text-5xl font-heading mb-4 bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="backdrop-blur-sm bg-[var(--card)]/40 border rounded-2xl p-8 group"
              style={{ borderColor: 'var(--border)' }}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{
                borderColor: 'rgba(0, 217, 255, 0.3)',
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.1)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{ 
                    background: category.color,
                    boxShadow: `0 0 15px ${category.color}`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: categoryIndex * 0.2,
                  }}
                />
                <h3 className="font-heading text-xl">{category.category}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono">{skill.name}</span>
                      <motion.span 
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{ 
                          color: category.color,
                          background: `${category.color}20`,
                          border: `1px solid ${category.color}40`
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(to right, ${category.color}, ${category.color}cc)`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1,
                          delay: skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}