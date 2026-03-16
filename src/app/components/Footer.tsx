import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const navItems = [
    { key: 'footer.about', href: '#about' },
    { key: 'footer.skills', href: '#skills' },
    { key: 'footer.projects', href: '#projects' },
    { key: 'footer.contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-8 px-6 border-t" style={{ borderColor: 'rgba(0, 217, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <p className="font-heading">
              © {new Date().getFullYear()} <span style={{ color: 'var(--cyan-glow)' }}>{t('hero.name')}</span>
            </p>
            <p className="text-xs mt-1">{t('footer.dev')}</p>
          </div>

          <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-sm transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
                whileHover={{ color: 'var(--cyan-glow)', scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </div>

          <div className="text-xs flex items-center gap-2" style={{ color: 'var(--muted-foreground)' }}>
            <motion.span 
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--cyan-glow)', boxShadow: '0 0 10px var(--cyan-glow)' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span>{t('footer.exploring')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
