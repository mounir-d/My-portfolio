import { ExternalLink, Github, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.task.title'),
      description: t('projects.task.desc'),
      tags: ['Node.js', 'Redis', 'Docker', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'linear-gradient(135deg, #00d9ff, #22d3ee)',
    },
    {
      title: t('projects.network.title'),
      description: t('projects.network.desc'),
      tags: ['Python', 'Wireshark', 'ML', 'React'],
      github: 'https://github.com',
      demo: null,
      gradient: 'linear-gradient(135deg, #a855f7, #c084fc)',
    },
    {
      title: t('projects.gateway.title'),
      description: t('projects.gateway.desc'),
      tags: ['Go', 'gRPC', 'Kubernetes', 'Prometheus'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'linear-gradient(135deg, #22d3ee, #00d9ff)',
    },
    {
      title: t('projects.cloud.title'),
      description: t('projects.cloud.desc'),
      tags: ['Terraform', 'AWS', 'Python', 'CI/CD'],
      github: 'https://github.com',
      demo: null,
      gradient: 'linear-gradient(135deg, #c084fc, #a855f7)',
    },
    {
      title: t('projects.vpn.title'),
      description: t('projects.vpn.desc'),
      tags: ['C++', 'OpenVPN', 'Linux', 'Security'],
      github: 'https://github.com',
      demo: null,
      gradient: 'linear-gradient(135deg, #00d9ff, #a855f7)',
    },
    {
      title: t('projects.pipeline.title'),
      description: t('projects.pipeline.desc'),
      tags: ['Springboot', 'Spark', 'PostgreSQL', 'Java'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      gradient: 'linear-gradient(135deg, #22d3ee, #c084fc)',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-[120px]"
        style={{ background: 'var(--cyan-glow)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-[120px]"
        style={{ background: 'var(--electric-violet)' }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-10 h-10" style={{ color: 'var(--cyan-glow)' }} />
            </motion.div>
            <h2 className="inline-block text-4xl md:text-5xl font-heading bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative backdrop-blur-sm bg-[var(--card)]/40 border rounded-2xl p-6"
              style={{ borderColor: 'var(--border)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(0, 217, 255, 0.5)',
                boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)',
              }}
            >
              {/* Mission badge */}
              <motion.div 
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg font-heading"
                style={{ background: project.gradient, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                #{(index + 1).toString().padStart(2, '0')}
              </motion.div>

              {/* Title gradient bar */}
              <div className="h-1 w-16 rounded-full mb-4" style={{ background: project.gradient }} />

              <h3 className="font-heading text-xl mb-3 group-hover:scale-105 transition-transform" style={{ color: 'var(--cyan-glow)' }}>
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted-foreground)' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded border"
                    style={{ 
                      background: 'var(--accent)/40',
                      color: 'var(--accent-foreground)',
                      borderColor: 'var(--border)'
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: 'var(--cyan-glow)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--electric-violet)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cyan-glow)'}
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('projects.code')}</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: 'var(--electric-violet)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--cyan-glow)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--electric-violet)'}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projects.demo')}</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
