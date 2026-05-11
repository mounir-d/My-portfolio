import { ExternalLink, Github, Rocket, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  role?: string;
  description: string;
  technologies: string[];
  category: string;
  featured?: boolean;
  github?: string;
  demo?: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 'forsa',
      title: 'Forsa Freelancing Marketplace Platform',
      role: 'CTO & Technical Lead | Backend, DevOps & Database',
      description:
        'Led the technical design and development of Forsa, a security-aware freelancing marketplace connecting clients and freelancers through project posting, service browsing, proposals, messaging, delivery review, payments, reviews, notifications, and admin oversight. Built the platform with a Spring Boot monolith backend and React + Vite frontend, supporting Admin, Client, and Freelancer roles. Implemented secure authentication using HttpOnly cookie sessions, CSRF protection, RSA-signed JWTs, MFA, WebAuthn/passkeys, role-based access control, upload handling, audit logging, WebSocket messaging, payout-beneficiary protection, and PayPal checkout/capture payment flows.',
      technologies: [
        'Java 21',
        'Spring Boot',
        'MongoDB',
        'React',
        'Vite',
        'Tailwind CSS',
        'REST APIs',
        'WebSocket/STOMP',
        'JWT',
        'CSRF',
        'MFA',
        'WebAuthn',
        'PayPal API',
        'GitHub Actions',
        'Security Scanning',
      ],
      category: 'Full-Stack',
      featured: true,
    },
    {
      id: 'devops-pipeline',
      title: 'Secure DevOps Pipeline for Spring Boot Microservices',
      description:
        'Built a practical DevOps lab for a microservices-style web application, including source control workflow, containerized services, environment configuration, automated build/test/deploy steps, Nginx reverse proxy, and log review for troubleshooting.',
      technologies: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Linux', 'Nginx', 'Spring Boot', 'MySQL', 'MongoDB', 'CI/CD pipelines'],
      category: 'DevOps',
    },
    {
      id: 'network-security-lab',
      title: 'Network Security Lab - Segmentation, Firewall Rules & Monitoring',
      description:
        'Designed an enterprise-style network topology with VLAN segmentation, inter-VLAN routing, OSPF, NAT, ACL/firewall policies, DHCP services, STP protection, and Syslog monitoring. Validated connectivity and documented troubleshooting scenarios.',
      technologies: ['Cisco Packet Tracer', 'VLANs', 'OSPF', 'NAT', 'STP', 'ACLs', 'Firewall Rules', 'Syslog'],
      category: 'Security',
    },
    {
      id: 'linux-hardening',
      title: 'Linux Server Hardening & Monitoring Lab',
      description:
        'Configured a Linux server with users/groups, service management, SSH hardening, firewall rules, backup scripting, log analysis, and basic monitoring to practice secure administration and operational visibility.',
      technologies: ['Linux', 'Bash', 'SSH', 'UFW/firewalld', 'cron', 'logs', 'backup scripts', 'monitoring'],
      category: 'Security',
    },
    {
      id: 'ndnsim-research',
      title: 'Research Project Using ndnSIM',
      description:
        'Simulated and evaluated strategies for Named Data Networking, NDN, in mobile ad hoc networks and IoT environments, focusing on performance metrics and scenario analysis.',
      technologies: ['ns-3', 'ndnSIM', 'NetAnim', 'C++', 'Awk', 'Linux'],
      category: 'Research',
    },
    {
      id: 'multicloud-platform',
      title: 'Multi-Cloud Services Platform',
      description:
        'Developed a web platform using service-oriented modules, APIs, database integration, and Docker-based packaging for a cloud/microservices architecture.',
      technologies: ['Java EE', 'Spring Boot', 'MySQL', 'MongoDB', 'Docker', 'HTML', 'CSS', 'JavaScript', 'PHP'],
      category: 'Backend',
    },
    {
      id: 'iot-dashboard',
      title: 'IoT Network Simulation & Data Dashboard',
      description:
        'Simulated IoT devices sending network data and created a dashboard to visualize traffic behavior and performance metrics.',
      technologies: ['ns-3', 'ndnSIM', 'NetAnim', 'JavaScript', 'Dashboard Development'],
      category: 'Research',
    },
    {
      id: 'lost-object-finder',
      title: 'Lost Object Finder Android Application',
      description:
        'Built a mobile application concept for reporting and finding lost objects with API and Firebase integration.',
      technologies: ['Android Studio', 'Java', 'Kotlin', 'Firebase', 'APIs'],
      category: 'Mobile',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Backend', 'DevOps', 'Security', 'Networking', 'Research', 'Mobile'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

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
          ease: 'easeInOut',
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
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Rocket className="w-10 h-10" style={{ color: 'var(--cyan-glow)' }} />
            </motion.div>
            <h2 className="inline-block text-4xl md:text-5xl font-heading bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] bg-clip-text text-transparent">
              Projects & Missions
            </h2>
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[var(--cyan-glow)] to-[var(--electric-violet)] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
            Backend systems, DevOps infrastructure, network security, and cloud-native solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
              style={{
                background: activeFilter === category ? 'var(--accent)' : 'transparent',
                color:
                  activeFilter === category
                    ? 'var(--starlight-white)'
                    : 'var(--muted-foreground)',
                border:
                  activeFilter === category ? 'none' : '1px solid var(--border)',
              }}
              whileHover={{
                scale: 1.05,
                borderColor: 'var(--cyan-glow)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category === activeFilter && <Filter className="w-4 h-4" />}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Forsa Featured Project */}
        {filteredProjects.some((p) => p.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {filteredProjects.map(
              (project) =>
                project.featured && (
                  <motion.div
                    key={project.id}
                    className="relative group overflow-hidden rounded-2xl backdrop-blur-sm border-2 p-8 md:p-10"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--deep-space)/80 0%, var(--midnight-blue)/60 100%)',
                      borderColor: 'var(--cyan-glow)',
                      boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)',
                    }}
                    whileHover={{
                      boxShadow: '0 0 60px rgba(0, 217, 255, 0.2)',
                      borderColor: 'var(--soft-cyan)',
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--cyan-glow), var(--electric-violet))',
                      }}
                    />

                    {/* Featured badge */}
                    <div className="absolute -top-4 -right-4">
                      <motion.div
                        className="w-32 h-32 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background:
                            'linear-gradient(135deg, var(--cyan-glow), var(--soft-cyan))',
                          boxShadow:
                            '0 0 30px rgba(0, 217, 255, 0.4)',
                          color: 'var(--space-black)',
                        }}
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        ★ FEATURED
                      </motion.div>
                    </div>

                    <div className="relative z-10">
                      {/* Top accent */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="h-1 w-16 rounded-full"
                          style={{
                            background:
                              'linear-gradient(90deg, var(--cyan-glow), var(--electric-violet))',
                          }}
                        />
                        {project.role && (
                          <span
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{
                              background:
                                'rgba(0, 217, 255, 0.1)',
                              color: 'var(--cyan-glow)',
                              border: '1px solid var(--cyan-glow)',
                            }}
                          >
                            {project.role}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3
                        className="text-3xl md:text-4xl font-heading mb-4 group-hover:scale-105 transition-transform duration-300"
                        style={{ color: 'var(--cyan-glow)' }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-base leading-relaxed mb-6"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <p
                          className="text-xs font-semibold mb-3"
                          style={{ color: 'var(--accent-foreground)' }}
                        >
                          TECHNOLOGIES
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              className="px-3 py-1 text-xs rounded-full border"
                              style={{
                                background:
                                  'rgba(0, 217, 255, 0.1)',
                                color: 'var(--cyan-glow)',
                                borderColor:
                                  'rgba(0, 217, 255, 0.3)',
                              }}
                              whileHover={{
                                scale: 1.15,
                                background:
                                  'rgba(0, 217, 255, 0.2)',
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="flex items-center gap-4">
                        <span
                          className="inline-block px-4 py-2 text-xs font-bold rounded-lg"
                          style={{
                            background:
                              'linear-gradient(135deg, var(--electric-violet), var(--energy-purple))',
                            color: 'var(--starlight-white)',
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              !project.featured && (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 h-full flex flex-col"
                  style={{
                    background: 'var(--card)/40',
                    borderColor: 'var(--border)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                    boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)',
                  }}
                >
                  {/* Category badge */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <motion.span
                      className="inline-block px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        background: project.category === 'Full-Stack'
                          ? 'linear-gradient(135deg, var(--cyan-glow), var(--electric-violet))'
                          : project.category === 'Backend'
                          ? 'linear-gradient(135deg, var(--cyan-glow), var(--soft-cyan))'
                          : project.category === 'DevOps'
                          ? 'linear-gradient(135deg, var(--electric-violet), var(--energy-purple))'
                          : project.category === 'Security'
                          ? 'linear-gradient(135deg, #ef4444, #ff6b6b)'
                          : project.category === 'Research'
                          ? 'linear-gradient(135deg, var(--soft-cyan), var(--cyan-glow))'
                          : 'linear-gradient(135deg, var(--electric-violet), var(--soft-cyan))',
                        color: 'var(--space-black)',
                        boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  {/* Title gradient bar */}
                  <div
                    className="h-1 w-12 rounded-full mb-4"
                    style={{
                      background:
                        'linear-gradient(90deg, var(--cyan-glow), var(--electric-violet))',
                    }}
                  />

                  {/* Title */}
                  <h3
                    className="font-heading text-xl mb-3 group-hover:scale-105 transition-transform"
                    style={{ color: 'var(--cyan-glow)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Role if available */}
                  {project.role && (
                    <p
                      className="text-xs font-semibold mb-3 px-2 py-1 rounded"
                      style={{
                        background: 'rgba(0, 217, 255, 0.1)',
                        color: 'var(--cyan-glow)',
                        width: 'fit-content',
                      }}
                    >
                      {project.role}
                    </p>
                  )}

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4 flex-grow"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="px-2 py-1 text-xs rounded border"
                        style={{
                          background: 'var(--accent)/40',
                          color: 'var(--accent-foreground)',
                          borderColor: 'var(--border)',
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span
                        className="px-2 py-1 text-xs rounded border"
                        style={{
                          background: 'var(--accent)/40',
                          color: 'var(--accent-foreground)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p style={{ color: 'var(--muted-foreground)' }}>
              No projects in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
