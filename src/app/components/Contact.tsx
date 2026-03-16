import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  
  const contactLinks = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'omarimohammedmounir@gmail.com',
      href: 'mailto:omarimohammedmounir@gmail.com',
      color: '#00d9ff',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'github.com/OmariMohammedmounir',
      href: 'https://github.com/OmariMohammedmounir',
      color: '#a855f7',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/mohammed-mounir-omari-a0890a2a0/',
      href: 'https://www.linkedin.com/in/mohammed-mounir-omari-a0890a2a0/',
      color: '#22d3ee',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-transparent via-[var(--deep-space)]/50 to-[var(--space-black)]">
      {/* Observatory console effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan-glow)] to-transparent opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Send className="w-10 h-10" style={{ color: 'var(--cyan-glow)' }} />
            </motion.div>
            <h2 className="inline-block text-4xl md:text-5xl font-heading bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
              {t('contact.title')}
            </h2>
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative backdrop-blur-sm bg-[var(--card)]/40 border rounded-xl p-6"
                style={{ borderColor: 'var(--border)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: link.color,
                  boxShadow: `0 0 30px ${link.color}30`,
                }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <motion.div 
                    className="w-14 h-14 rounded-full flex items-center justify-center border"
                    style={{ 
                      background: `${link.color}20`,
                      borderColor: `${link.color}30`
                    }}
                    whileHover={{ 
                      rotate: 360,
                      boxShadow: `0 0 20px ${link.color}50`
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" style={{ color: link.color }} />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">{link.label}</h3>
                    <p className="text-xs transition-colors" style={{ color: 'var(--muted-foreground)' }}>
                      {link.value}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100"
                  style={{ 
                    background: link.color,
                    boxShadow: `0 0 10px ${link.color}`
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center backdrop-blur-sm bg-gradient-to-r from-[var(--cyan-glow)]/10 to-[var(--electric-violet)]/10 border rounded-2xl p-12"
          style={{ borderColor: 'rgba(0, 217, 255, 0.2)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: '0 0 50px rgba(0, 217, 255, 0.2)',
          }}
        >
          <h3 className="font-heading text-2xl md:text-3xl mb-4">
            {t('contact.ready')}
          </h3>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            {t('contact.description')}
          </p>
          <motion.a
            href="mailto:omarimohammedmounir@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--soft-cyan)] rounded-lg font-heading"
            style={{ color: 'var(--space-black)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>{t('contact.send')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
