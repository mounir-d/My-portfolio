import { Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Certifications() {
  const { t } = useLanguage();
  
  const certifications = [
    {
      name: t('cert.ccna'),
      issuer: t('cert.cisco'),
      year: '2024',
      icon: '🌐',
    },
    {
      name: t('cert.ccnp'),
      issuer: t('cert.cisco'),
      year: '2023',
      icon: '🔧',
    },
    {
      name: t('cert.ccnaSecurity'),
      issuer: t('cert.cisco'),
      year: '2023',
      icon: '🔒',
    },
    {
      name: t('cert.aws'),
      issuer: t('cert.awsOrg'),
      year: '2025',
      icon: '☁️',
    },
  ];

  return (
    <section id="certifications" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10" style={{ color: 'var(--electric-violet)' }} />
            <h2 className="inline-block text-4xl md:text-5xl font-heading bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
              {t('cert.title')}
            </h2>
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative backdrop-blur-sm bg-[var(--card)]/40 border rounded-xl p-6"
              style={{ borderColor: 'var(--border)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'var(--electric-violet)',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--cyan-glow)]/5 to-[var(--electric-violet)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <motion.div 
                  className="text-4xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading text-lg group-hover:scale-105 transition-transform inline-block" style={{ color: 'var(--electric-violet)' }}>
                      {cert.name}
                    </h3>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--cyan-glow)' }} />
                  </div>
                  <p className="text-sm mb-1" style={{ color: 'var(--muted-foreground)' }}>{cert.issuer}</p>
                  <p className="text-xs font-mono" style={{ color: 'var(--cyan-glow)' }}>{cert.year}</p>
                </div>
              </div>

              {/* Badge glow */}
              <motion.div 
                className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full shadow-lg"
                style={{ 
                  background: 'var(--electric-violet)',
                  boxShadow: '0 0 15px var(--electric-violet)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
