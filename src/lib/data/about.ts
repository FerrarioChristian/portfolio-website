import type { Localized } from '$lib/i18n/locale.svelte';

export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  role: Localized<string>;
  period: string;
  badge?: string;
  description: Localized<string>;
  keyPoints: Localized<string[]>;
  technologies: string[];
  icon: string;
}

export interface PersonalInterest {
  id: string;
  title: Localized<string>;
  tag: Localized<string>;
  category: Localized<string>;
  icon: string;
  summary: Localized<string>;
  details: Localized<string>;
  pills: string[];
}

export interface EducationMilestone {
  id: 'magistrale' | 'triennale' | 'diploma' | 'projects';
  degreeId?: 'magistrale' | 'triennale';
  period: Localized<string> | string;
  title: Localized<string>;
  institution: Localized<string>;
  tag: Localized<string> | string;
  tagColor: string;
  icon: string;
  hasDetails: boolean;
  summary: Localized<string>;
}

export const educationMilestones: EducationMilestone[] = [
  {
    id: 'magistrale',
    degreeId: 'magistrale',
    period: '2024 — 2026',
    title: {
      it: 'Laurea Magistrale in Informatica',
      en: 'M.Sc. in Computer Science'
    },
    institution: {
      it: 'Università degli Studi di Milano-Bicocca',
      en: 'University of Milano-Bicocca'
    },
    tag: '110L',
    tagColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    icon: 'workspace_premium',
    hasDetails: true,
    summary: {
      it: 'Specializzazione in sistemi distribuiti, software analysis, machine learning e architetture scalabili. Tesi sul package manager Omnideps.',
      en: 'Specialized in distributed systems, software analysis, machine learning, and scalable architectures. Master thesis on Omnideps.'
    }
  },
  {
    id: 'triennale',
    degreeId: 'triennale',
    period: '2021 — 2024',
    title: {
      it: 'Laurea Triennale in Informatica',
      en: 'B.Sc. in Computer Science'
    },
    institution: {
      it: 'Università degli Studi di Milano-Bicocca',
      en: 'University of Milano-Bicocca'
    },
    tag: '103',
    tagColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    icon: 'school',
    hasDetails: true,
    summary: {
      it: 'Fondamenti di algoritmi, strutture dati, programmazione concorrente e calcolo numerico. Tesi su 2D-DCT e compressione JPEG.',
      en: 'Algorithms, data structures, concurrency, and scientific computing. Bachelor thesis on 2D-DCT and JPEG compression.'
    }
  },
  {
    id: 'diploma',
    period: '2016 — 2021',
    title: {
      it: 'Diploma Tecnico in Informatica',
      en: 'Technical Diploma in Computer Science'
    },
    institution: {
      it: 'IIS A. Badoni (Lecco)',
      en: 'IIS A. Badoni (Lecco)'
    },
    tag: {
      it: 'Completato',
      en: 'Graduated'
    },
    tagColor: 'text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 border-gray-200 dark:border-white/10',
    icon: 'history_edu',
    hasDetails: false,
    summary: {
      it: 'Primi passi con C, C++, Java, PHP, networking e basi di elettronica. Progetti pratici di gruppo fin dalle scuole superiori.',
      en: 'Early programming in C, C++, Java, PHP, networking, and electronics. Practical team engineering throughout high school.'
    }
  },
  {
    id: 'projects',
    period: {
      it: 'Continuo',
      en: 'Continuous'
    },
    title: {
      it: 'Progettazione Hands-On & Open Source',
      en: 'Hands-On Engineering & Open Source'
    },
    institution: {
      it: '17+ Progetti Sviluppati tra Hardware, Mobile e Web',
      en: '17+ Projects Across Embedded Systems, Mobile & Web'
    },
    tag: 'Hands-On',
    tagColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    icon: 'code',
    hasDetails: false,
    summary: {
      it: 'Costruzione di progetti reali: controller fisici con ESP32 e telemetria UDP, architetture multiplayer in tempo reale e tool CLI.',
      en: 'Building real systems: physical ESP32 sim controllers with UDP telemetry, real-time multiplayer architectures, and CLI tools.'
    }
  }
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'efebia',
    company: 'Efebia SRL',
    location: 'Full-remote',
    role: {
      it: 'Front-End Developer (Stage & Tesi)',
      en: 'Front-End Developer (Thesis Intern)'
    },
    period: '2024',
    badge: '6 mesi',
    icon: 'devices',
    description: {
      it: 'Sviluppo front-end per applicazioni web e mobile su molteplici progetti aziendali nell’ambito dello stage curriculare e della tesi di laurea.',
      en: 'Front-end development for web and cross-platform mobile applications across several projects during the degree thesis internship.'
    },
    keyPoints: {
      it: [
        'Sviluppo di interfacce web reattive e performanti con SvelteKit e Node.js.',
        'Progettazione e packaging di componenti mobile cross-platform tramite Ionic Framework.',
        'Integrazione con API REST e ottimizzazione dell’esperienza utente su mobile e desktop.'
      ],
      en: [
        'Built reactive, high-performance web interfaces using SvelteKit and Node.js.',
        'Engineered and packaged cross-platform mobile components using the Ionic Framework.',
        'Integrated REST APIs and optimized responsive UX across mobile and desktop.'
      ]
    },
    technologies: ['SvelteKit', 'Node.js', 'Ionic Framework', 'TypeScript', 'Cross-Platform Mobile', 'REST APIs']
  },
  {
    id: 'elemaster',
    company: 'Elemaster Group',
    location: 'Lomagna (LC)',
    role: {
      it: 'Ufficio IT & Assistenza Sistemistica',
      en: 'IT Operations & Systems Specialist'
    },
    period: '2020 — 2021',
    badge: '1 anno',
    icon: 'dns',
    description: {
      it: 'Gestione e manutenzione quotidiana dell’infrastruttura informatica aziendale a stretto contatto con utenti di sede e produzione.',
      en: 'Day-to-day management and maintenance of corporate IT infrastructure, collaborating directly with engineering and manufacturing staff.'
    },
    keyPoints: {
      it: [
        'Diagnostica hardware e risoluzione tempestiva di problemi tecnici per oltre 400 postazioni aziendali.',
        'Provisioning, configurazione ambienti Windows/Linux e gestione utenze su Active Directory.',
        'Monitoraggio apparati di rete, documentazione di procedure operative e supporto proattivo agli utenti.'
      ],
      en: [
        'Hardware diagnostics and rapid incident resolution across 400+ company workstations.',
        'Workstation provisioning, OS deployment (Windows/Linux), and Active Directory account management.',
        'Network device monitoring, authoring standard operating procedures, and proactive user support.'
      ]
    },
    technologies: ['IT Infrastructure', 'Windows & Linux Server', 'Active Directory', 'Networking & Switch', 'Hardware Diagnostics']
  },
  {
    id: 'asst-lecco',
    company: 'ASST Lecco (Presidio Ospedaliero)',
    location: 'Lecco (LC)',
    role: {
      it: 'Tirocinio Sviluppo Web & Sistemi Informativi',
      en: 'Web Engineering & Healthcare Systems Intern'
    },
    period: '2019 — 2020',
    badge: 'Tirocinio',
    icon: 'local_hospital',
    description: {
      it: 'Analisi dei flussi informativi ospedalieri e sviluppo full-stack del nuovo portale intranet con gestione granulare dei permessi.',
      en: 'Analysis of clinical data workflows and full-stack development of a new intranet portal with granular permission management.'
    },
    keyPoints: {
      it: [
        'Progettazione e sviluppo della nuova interfaccia intranet per il personale medico e amministrativo.',
        'Implementazione del modulo di controllo degli accessi (RBAC) basato su ruoli e reparti.',
        'Integrazione di query e transazioni SQL sicure per la consultazione e persistenza dei dati interni.'
      ],
      en: [
        'Designed and implemented the new intranet portal UI for clinical and administrative staff.',
        'Engineered dynamic role-based access control (RBAC) filtering module visibility by department.',
        'Structured secure SQL queries and transactions for internal hospital data access.'
      ]
    },
    technologies: ['PHP', 'MySQL / SQL', 'JavaScript', 'HTML5 & CSS3', 'RBAC Security', 'Intranet Architecture']
  }
];

export const personalInterests: PersonalInterest[] = [
  {
    id: 'homelab',
    title: {
      it: 'Home Lab & Self-Hosting',
      en: 'Home Lab & Self-Hosting'
    },
    tag: {
      it: 'Infrastruttura & DevOps',
      en: 'Infrastructure & DevOps'
    },
    category: {
      it: 'Sistemi & Reti',
      en: 'Systems & Networking'
    },
    icon: 'dns',
    summary: {
      it: 'Server casalingo Linux per sperimentare con container Docker, reti locali, reverse proxy Nginx con SSL e servizi self-hosted prima del deploy in produzione.',
      en: 'Home Linux server used as a hands-on testbed for Docker containers, local networking, Nginx reverse proxy with SSL, and self-hosted services.'
    },
    details: {
      it: 'Server Linux sempre attivo per testare configurazioni di rete, container Docker orchestrati con Compose, reverse proxy Nginx con certificati automatici, ambienti di staging per i miei progetti e sistemi di backup.',
      en: 'Dedicated home server running Docker Compose containers, automated Nginx reverse proxy with TLS certificates, project preview staging, and local backup jobs.'
    },
    pills: ['Linux Server', 'Docker & Compose', 'Nginx Proxy', 'Self-Hosting', 'Local Networking', 'SSL / TLS']
  },
  {
    id: 'neovim',
    title: {
      it: 'Neovim & Terminal-First',
      en: 'Neovim & Terminal-First'
    },
    tag: {
      it: 'Ambiente di Sviluppo',
      en: 'Developer Environment'
    },
    category: {
      it: 'Workflow',
      en: 'Workflow'
    },
    icon: 'terminal',
    summary: {
      it: 'Editor modale configurato da zero in Lua, sessioni multiplexate con tmux e pipeline pura da riga di comando per massima velocità e zero distrazioni.',
      en: 'Modal editor configured from scratch in Lua, multiplexed with tmux, and focused on a keyboard-driven command-line pipeline with zero bloat.'
    },
    details: {
      it: 'Configurazione Neovim interamente in Lua: LSP nativo per completamento, Treesitter per syntax highlighting e Telescope per fuzzy search istantaneo, abbinato a tmux e CLI Git.',
      en: 'Custom Neovim config in Lua with native LSP, Treesitter syntax trees, and Telescope fuzzy search, paired with tmux sessions and direct Git CLI usage.'
    },
    pills: ['Neovim', 'Lua Config', 'tmux', 'Zsh', 'Treesitter & LSP', 'CLI Tooling']
  },
  {
    id: 'counter-strike',
    title: {
      it: 'Counter-Strike & Gaming Competitivo',
      en: 'Counter-Strike & Competitive Gaming'
    },
    tag: {
      it: 'Teamwork & Precisione',
      en: 'Teamwork & Precision'
    },
    category: {
      it: 'Gaming',
      en: 'Gaming'
    },
    icon: 'sports_esports',
    summary: {
      it: 'Sparatutto tattico dove contano riflessi, posizionamento, sincronia di squadra, gestione del round e sangue freddo nei momenti clutch.',
      en: 'Tactical FPS demanding crosshair discipline, split-second reflexes, economic coordination, and composure under clutch pressure.'
    },
    details: {
      it: 'Passione per la componente strategica di CS2: comunicazione vocale immediata, gestione dell’economia di squadra, crosshair placement e decision-making in frazioni di secondo.',
      en: 'Appreciation for the strategic depth of CS2: fast callouts, round economy management, disciplined positioning, and rapid decision-making under pressure.'
    },
    pills: ['Tactical Shooter', 'Team Coordination', 'Economy & Strats', 'Fast Reflexes', 'Server Netcode']
  },
  {
    id: 'sim-racing',
    title: {
      it: 'Sim Racing & Hardware DIY',
      en: 'Sim Racing & DIY Electronics'
    },
    tag: {
      it: 'Maker & Telemetria',
      en: 'Maker & Telemetry'
    },
    category: {
      it: 'Motorsport & Hardware',
      en: 'Motorsport & Hardware'
    },
    icon: 'speed',
    summary: {
      it: 'Simulazione di guida (Assetto Corsa) unita alla costruzione di hardware fisico con ESP32 per visualizzare i giri motore in tempo reale via UDP.',
      en: 'Driving simulation (Assetto Corsa) combined with physical embedded hardware: built an ESP32 shift-light controller streaming live UDP telemetry.'
    },
    details: {
      it: 'Controller fisico realizzato da zero con microcontrollore ESP32 e striscia LED WS2812B, collegato via Wi-Fi ad un client Rust per replicare le luci di cambiata (RPM LEDs) delle vetture GT3/Formula.',
      en: 'Engineered an embedded ESP32 shift-light controller connected via Wi-Fi with a Rust UDP listener to stream live simulator telemetry onto WS2812B LEDs.'
    },
    pills: ['Assetto Corsa', 'ESP32 & C++', 'UDP Telemetry', 'WS2812B LEDs', 'Rust Client', 'Physical Computing']
  }
];
