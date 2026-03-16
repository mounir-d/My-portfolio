import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-[var(--deep-space)]/80 border rounded-lg"
      style={{ borderColor: 'var(--electric-violet)' }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <Globe className="w-4 h-4" style={{ color: 'var(--electric-violet)' }} />
      <div className="flex gap-1">
        <motion.button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs font-mono rounded transition-all ${
            language === 'en' ? 'font-bold' : 'opacity-60'
          }`}
          style={{
            background: language === 'en' ? 'var(--electric-violet)' : 'transparent',
            color: language === 'en' ? 'var(--space-black)' : 'var(--electric-violet)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
        <motion.button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 text-xs font-mono rounded transition-all ${
            language === 'fr' ? 'font-bold' : 'opacity-60'
          }`}
          style={{
            background: language === 'fr' ? 'var(--electric-violet)' : 'transparent',
            color: language === 'fr' ? 'var(--space-black)' : 'var(--electric-violet)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          FR
        </motion.button>
      </div>
    </motion.div>
  );
}
