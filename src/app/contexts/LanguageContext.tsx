import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero
    'hero.portfolio': 'Portfolio / Mission Control',
    'hero.name': 'Omari Mounir',
    'hero.role1': 'Software Developer',
    'hero.role2': 'Computer Systems & Networks Engineer',
    'hero.tagline': 'Exploring systems at scale, from networks to the universe',
    'hero.viewProjects': 'View Projects',
    'hero.getInTouch': 'Get in Touch',
    'hero.systemOnline': 'SYSTEM ONLINE',
    
    // About
    'about.title': 'About Me',
    'about.bio1': "I'm a passionate",
    'about.bio1b': 'Software Developer',
    'about.bio1c': 'and',
    'about.bio1d': 'Computer Networks Engineer',
    'about.bio1e': 'specializing in backend development, distributed systems, and network infrastructure.',
    'about.bio2': 'With a strong foundation in computer systems engineering and hands-on experience in cloud technologies, I build reliable, scalable solutions that power modern applications.',
    'about.bio3': 'My work spans from low-level networking protocols to high-level system architecture, always seeking elegant solutions to complex problems.',
    'about.backend': 'Backend Development',
    'about.backend.desc': 'Building scalable systems',
    'about.networking': 'Networking',
    'about.networking.desc': 'Infrastructure & protocols',
    'about.cloud': 'Cloud Architecture',
    'about.cloud.desc': 'Distributed solutions',
    'about.system': 'System Design',
    'about.system.desc': 'Performance optimization',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A constellation of technologies powering modern systems',
    'skills.backend': 'Backend Development',
    'skills.networking': 'Networking & Systems',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tools': 'Tools & Frameworks',
    
    // Experience
    'experience.title': 'Experience & Education',
    'experience.subtitle': 'A cosmic trajectory through learning and professional growth',
    'experience.masters': "Master's Degree in Computer systems and Networks",
    'experience.masters.desc': 'Advanced study in network architecture, distributed systems, and cloud computing.',
    'experience.senior': 'Computer systems and Networking Engineer',
    'experience.senior.org': 'EPIC Mitidja Hadaik',
    'experience.senior.desc': 'Leading backend development for microservices architecture and optimizing database performance.',
    'experience.network': 'Software Developer',
    'experience.network.org': 'Icone software ',
    'experience.network.desc': 'Designed and implemented CRMs ,CMSs and Database solutions.',
    'experience.bachelor': "Bachelor's Degree in Computer Systems ",
    'experience.bachelor.desc': 'Foundation in computer science, networking, and software engineering principles.',
    'experience.research': 'Research Project: Simulations and performance evaluation',
    'experience.research.org': 'UNIVERSITY OF BLIDA 1',
    'experience.research.desc': 'Simulations and performance evaluation of strategies for Named Data Networking (NDN) in Mobile ad hoc networks and IOT.',
    'experience.university': 'UNIVERSITY OF BLIDA 1',
    
    // Projects
    'projects.title': 'Mission Projects',
    'projects.subtitle': 'Engineering solutions for complex systems',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.task.title': 'Distributed Task Queue System',
    'projects.task.desc': 'Built a high-performance distributed task queue system handling 10M+ tasks daily with automatic scaling and fault tolerance.',
    'projects.network.title': 'Network Traffic Analyzer',
    'projects.network.desc': 'Real-time network traffic analysis tool with packet inspection, anomaly detection, and visualization dashboard.',
    'projects.gateway.title': 'Microservices API Gateway',
    'projects.gateway.desc': 'Custom API gateway with rate limiting, authentication, request routing, and load balancing for microservices architecture.',
    'projects.cloud.title': 'Cloud Infrastructure Automation',
    'projects.cloud.desc': 'Infrastructure as Code solution automating cloud resource provisioning, monitoring, and cost optimization.',
    'projects.vpn.title': 'VPN & Network Security Suite',
    'projects.vpn.desc': 'Enterprise-grade VPN solution with advanced encryption, network segmentation, and intrusion detection.',
    'projects.pipeline.title': 'Multi-Cloud Services Platform',
    'projects.pipeline.desc': 'Developed a web application and utilizing cloud servicesmicroservices with APIs',
    
    // Certifications
    'cert.title': 'Certifications',
    'cert.ccna': 'CCNA3 ENSA: Enterprise Networking, Security, and Automation',
    'cert.ccnp': 'CCNA2 SRWE v7: Switching, Routing, and Wireless Essentials',
    'cert.ccnaSecurity': 'CCNAv7: Introduction to Networks',
    'cert.aws': 'AWS Certified Solutions Architect',
    'cert.cisco': 'Cisco',
    'cert.awsOrg': 'Amazon Web Services',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's connect and explore opportunities to build something extraordinary",
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.ready': 'Ready to start a new mission?',
    'contact.description': "Whether it's building scalable systems, optimizing networks, or architecting cloud solutions, I'm always open to discussing new projects and opportunities.",
    'contact.send': 'Send a Message',
    
    // Footer
    'footer.dev': 'Software Developer | Networks Engineer',
    'footer.exploring': 'Exploring the universe of technology',
    'footer.about': 'About',
    'footer.skills': 'Skills',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
  },
  fr: {
  // Hero
  'hero.portfolio': 'Portfolio / Centre de contrôle',
  'hero.name': 'Omari Mounir',
  'hero.role1': 'Développeur Logiciel',
  'hero.role2': 'Ingénieur Systèmes & Réseaux Informatiques',
  'hero.tagline': 'Explorer les systèmes à grande échelle, des réseaux à l’univers',
  'hero.viewProjects': 'Voir les projets',
  'hero.getInTouch': 'Me contacter',
  'hero.systemOnline': 'SYSTÈME EN LIGNE',

  // About
  'about.title': 'À propos de moi',
  'about.bio1': 'Je suis un',
  'about.bio1b': 'Développeur Logiciel',
  'about.bio1c': 'et',
  'about.bio1d': 'Ingénieur Réseaux Informatiques',
  'about.bio1e':
    'spécialisé dans le développement backend, les systèmes distribués et l’infrastructure réseau.',
  'about.bio2':
    'Avec une solide formation en ingénierie des systèmes informatiques et une expérience pratique des technologies cloud, je conçois des solutions fiables et évolutives qui alimentent les applications modernes.',
  'about.bio3':
    'Mon travail couvre aussi bien les protocoles réseau de bas niveau que l’architecture système de haut niveau, avec une recherche constante de solutions élégantes à des problèmes complexes.',
  'about.backend': 'Développement Backend',
  'about.backend.desc': 'Construction de systèmes évolutifs',
  'about.networking': 'Réseaux',
  'about.networking.desc': 'Infrastructure et protocoles',
  'about.cloud': 'Architecture Cloud',
  'about.cloud.desc': 'Solutions distribuées',
  'about.system': 'Conception Système',
  'about.system.desc': 'Optimisation des performances',

  // Skills
  'skills.title': 'Compétences & expertise',
  'skills.subtitle': 'Une constellation de technologies au service des systèmes modernes',
  'skills.backend': 'Développement Backend',
  'skills.networking': 'Réseaux & Systèmes',
  'skills.cloud': 'Cloud & DevOps',
  'skills.tools': 'Outils & Frameworks',

  // Experience
  'experience.title': 'Expérience & formation',
  'experience.subtitle':
    'Une trajectoire cosmique à travers l’apprentissage et l’évolution professionnelle',
  'experience.masters':
    'Master en Systèmes Informatiques et Réseaux',
  'experience.masters.desc':
    'Études avancées en architecture réseau, systèmes distribués et informatique cloud.',
  'experience.senior':
    'Ingénieur Systèmes et Réseaux Informatiques',
  'experience.senior.org': 'EPIC Mitidja Hadaik',
  'experience.senior.desc':
    'Développement backend pour des architectures microservices et optimisation des performances des bases de données.',
  'experience.network': 'Développeur Logiciel',
  'experience.network.org': 'Icone Software',
  'experience.network.desc':
    'Conception et implémentation de solutions CRM, CMS et de systèmes de gestion de bases de données.',
  'experience.bachelor':
    'Licence en Systèmes Informatiques',
  'experience.bachelor.desc':
    'Bases solides en informatique, réseaux et principes d’ingénierie logicielle.',
  'experience.research':
    'Projet de recherche : simulations et évaluation des performances',
  'experience.research.org': 'UNIVERSITÉ DE BLIDA 1',
  'experience.research.desc':
    'Recherche sur l’optimisation des performances réseau dans des systèmes distribués.',
  'experience.university': 'UNIVERSITÉ DE BLIDA 1',

  // Projects
  'projects.title': 'Projets mission',
  'projects.subtitle': 'Solutions d’ingénierie pour des systèmes complexes',
  'projects.code': 'Code',
  'projects.demo': 'Démo',
  'projects.task.title': 'Système de file de tâches distribuées',
  'projects.task.desc':
    'Développement d’un système de file de tâches distribué haute performance avec mise à l’échelle automatique et tolérance aux pannes.',
  'projects.network.title': 'Analyseur de trafic réseau',
  'projects.network.desc':
    'Outil d’analyse du trafic réseau en temps réel avec inspection de paquets, détection d’anomalies et tableau de bord de visualisation.',
  'projects.gateway.title': 'Passerelle API microservices',
  'projects.gateway.desc':
    'Passerelle API personnalisée avec limitation de débit, authentification, routage des requêtes et équilibrage de charge.',
  'projects.cloud.title': 'Automatisation d’infrastructure cloud',
  'projects.cloud.desc':
    'Solution Infrastructure as Code automatisant le provisionnement des ressources cloud, la surveillance et l’optimisation des coûts.',
  'projects.vpn.title': 'Suite VPN & sécurité réseau',
  'projects.vpn.desc':
    'Solution VPN de niveau entreprise avec chiffrement avancé, segmentation réseau et détection d’intrusions.',
  'projects.pipeline.title': 'Plateforme de services multi-cloud',
  'projects.pipeline.desc':
    'Simulations and performance evaluation of strategies for Named Data Networking (NDN) in Mobile ad hoc networks and IOT.',

  // Certifications
  'cert.title': 'Certifications',
  'cert.ccna':
    'CCNA3 ENSA : Réseaux d’entreprise, sécurité et automatisation',
  'cert.ccnp':
    'CCNA2 SRWE v7 : Commutation, routage et réseaux sans fil',
  'cert.ccnaSecurity':
    'CCNAv7 : Introduction aux réseaux',
  'cert.aws': 'AWS Certified Solutions Architect',
  'cert.cisco': 'Cisco',
  'cert.awsOrg': 'Amazon Web Services',

  // Contact
  'contact.title': 'Me contacter',
  'contact.subtitle':
    'Connectons-nous et explorons des opportunités pour construire quelque chose d’extraordinaire',
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',
  'contact.ready': 'Prêt à démarrer une nouvelle mission ?',
  'contact.description':
    'Qu’il s’agisse de concevoir des systèmes évolutifs, d’optimiser des réseaux ou d’architecturer des solutions cloud, je suis toujours ouvert à discuter de nouveaux projets et opportunités.',
  'contact.send': 'Envoyer un message',

  // Footer
  'footer.dev': 'Développeur Logiciel | Ingénieur Réseaux',
  'footer.exploring': 'Explorer l’univers de la technologie',
  'footer.about': 'À propos',
  'footer.skills': 'Compétences',
  'footer.projects': 'Projets',
  'footer.contact': 'Contact',
}

};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
