import type { Localized } from '$lib/i18n/locale.svelte';

export interface Project {
  slug: string;
  title: string;
  imageLight: string;
  imageDark: string;
  github: string;
  demo: string;
  technologies: string[];
  description: Localized<string>;
  isFeatured: boolean;
  isMinor?: boolean;
  report?: string;
  category?: string;
  highlight?: Localized<string> | string;
}

export const projects: Project[] = [
  {
    slug: 'sportrack',
    title: 'Sportrack',
    imageLight: '/assets/projects/sportrack/cover.jpg',
    imageDark: '/assets/projects/sportrack/cover.jpg',
    github: 'https://github.com/FerrarioChristian/sportrack',
    demo: '',
    technologies: ['Java', 'Android', 'Room SQLite', 'Material Design 3', 'Retrofit', 'Gemini AI'],
    description: {
      it: 'Applicazione Android per il tracciamento e la gestione delle sessioni sportive con database locale e raccomandazioni nutrizionali tramite Gemini AI.',
      en: 'Android application for sports tracking and management with local database and Gemini AI diet recommendations.'
    },
    isFeatured: true,
    category: 'Mobile & AI',
    highlight: {
      it: 'Fitness su Android & Gemini AI',
      en: 'Android Fitness & Gemini AI'
    },
    report: '/reports/sportrack.pdf'
  },
  {
    slug: 'sudoku-solver',
    title: 'Sudoku Solver',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/sudoku-solver',
    demo: '',
    technologies: ['C++', 'Qt Framework', 'OOP', 'Backtracking DFS'],
    description: {
      it: 'Applicazione GUI in C++/Qt per la risoluzione di Sudoku. Algoritmo di Backtracking DFS visualizzato e animato in tempo reale.',
      en: 'A C++/Qt GUI application that solves Sudoku puzzles. Demonstrates algorithmic problem-solving with real-time visual Backtracking.'
    },
    isFeatured: false,
    category: 'Algorithms & GUI'
  },
  {
    slug: 'iterative-linear-solver',
    title: 'Sparse Iterative Solvers',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/iterative-linear-solver',
    demo: '',
    technologies: ['Python', 'SciPy', 'NumPy', 'Matplotlib', 'Scientific Computing'],
    description: {
      it: 'Libreria Python per la risoluzione di sistemi lineari sparsi su larga scala tramite metodi iterativi (Jacobi, Gauss-Seidel, Gradiente Coniugato).',
      en: 'Python library for solving large-scale sparse linear systems using iterative methods (Jacobi, Gauss-Seidel, Conjugate Gradient).'
    },
    isFeatured: false,
    category: 'Scientific Computing',
    report: '/reports/iterative-linear-solver.pdf'
  },
  {
    slug: 'jpeg-converter',
    title: 'DCT Image Compressor',
    imageLight: '/assets/projects/jpeg-converter/cover.jpg',
    imageDark: '/assets/projects/jpeg-converter/cover.jpg',
    github: 'https://github.com/FerrarioChristian/jpeg-converter',
    demo: '',
    technologies: ['Python', 'NumPy', 'SciPy', 'CustomTkinter', 'Image Processing'],
    description: {
      it: 'Case study scientifico per la simulazione della compressione JPEG tramite 2D DCT da zero. Stima entropica di Huffman, metriche PSNR/MSE in tempo reale e moderna GUI Dark-Mode.',
      en: 'A scientific case study simulating JPEG compression via 2D DCT from scratch. Features Huffman entropy estimation, real-time PSNR/MSE metrics, and a modern Dark-Mode GUI.'
    },
    isFeatured: true,
    category: 'Scientific Computing',
    highlight: {
      it: 'Compressione 2D DCT & Analisi da Zero',
      en: '2D DCT Compression & Analysis from Scratch'
    },
    report: '/reports/jpeg-converter.pdf'
  },
  {
    slug: 'timetrack',
    title: 'Timetrack',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/timetrack',
    demo: '',
    technologies: ['Java 23', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Tailwind CSS', 'Chart.js'],
    description: {
      it: 'Web app di produttività full-stack con tracciamento attività in tempo reale, modalità Pomodoro, obiettivi dinamici e analisi Chart.js in una UI dark in stile Shadcn.',
      en: 'A modern full-stack productivity web app featuring real-time activity tracking, Pomodoro focus mode, dynamic time goals, and Chart.js analytics in a Shadcn-style dark UI.'
    },
    isFeatured: true,
    category: 'Full-Stack Web',
    highlight: {
      it: 'Piattaforma di Produttività Full-Stack',
      en: 'Full-Stack Productivity Platform'
    }
  },
  {
    slug: 'assettocorsa-rpm-led',
    title: 'Assetto Corsa RPM LEDs',
    imageLight: '/assets/projects/assetto-corsa/cover.jpg',
    imageDark: '/assets/projects/assetto-corsa/cover.jpg',
    github: 'https://github.com/FerrarioChristian/AssettoCorsaRPM-LED',
    demo: '',
    technologies: ['Rust', 'ESP32', 'WLED', 'UDP', 'Shared Memory'],
    description: {
      it: 'Client di telemetria ad alte prestazioni in Rust che sincronizza i giri motore di Assetto Corsa con una matrice LED controllata da ESP32 via WLED.',
      en: 'A high-performance Rust telemetry client that syncs Assetto Corsa engine RPMs with an ESP32-powered LED matrix via WLED.'
    },
    isFeatured: true,
    category: 'Systems & Embedded',
    highlight: {
      it: 'Telemetria Real-Time con Rust ed ESP32',
      en: 'Real-Time Rust & ESP32 Telemetry'
    }
  },
  {
    slug: 'svelte-unused-components',
    title: 'Svelte Unused Components',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/svelte-unused-components',
    demo: '',
    technologies: ['Go', 'AST Parsing', 'CLI', 'Concurrency'],
    description: {
      it: 'CLI tool ultra-veloce scritto in Go per rilevare ed eliminare componenti orfani o inutilizzati in progetti Svelte e SvelteKit.',
      en: 'A blazing fast CLI tool written in Go to detect unused components in Svelte/SvelteKit projects.'
    },
    isFeatured: false
  },
  {
    slug: 'snake',
    title: 'Snake',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/snakey2-with-pipeline',
    demo: '',
    technologies: ['Node.js', 'WebSockets', 'CI/CD', 'GitHub Actions', 'Docker'],
    description: {
      it: 'Snake multiplayer in tempo reale con focus approfondito su pipeline CI/CD automatizzate, test di regressione e deployment su container.',
      en: 'Real-time multiplayer Snake game with a strong focus on automated CI/CD pipelines and deployment.'
    },
    isFeatured: false,
    isMinor: true
  },
  {
    slug: 'iot-lab-course',
    title: 'Smart Museum Case',
    imageLight: '/assets/projects/smart-museum-case/cover.jpg',
    imageDark: '/assets/projects/smart-museum-case/cover.jpg',
    github: 'https://github.com/FerrarioChristian/IoT-lab-course',
    demo: '',
    technologies: ['C++', 'ESP8266', 'MQTT', 'InfluxDB', 'WoT', 'Telegram API'],
    description: {
      it: 'Sistema IoT decentralizzato e a basso consumo energetico per il monitoraggio ambientale e la sicurezza fisica in contesti museali.',
      en: 'A decentralized, low-power IoT system for museum environmental monitoring and physical security.'
    },
    isFeatured: true,
    category: 'IoT & Embedded',
    highlight: {
      it: 'IoT Decentralizzato & Sicurezza Museale',
      en: 'Decentralized Museum IoT & Security'
    }
  },
  {
    slug: 'large-scale',
    title: 'E-Commerce Data Warehouse',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/large-scale',
    demo: '',
    technologies: ['DuckDB', 'dbt', 'SQL', 'PostgreSQL', 'ELT', 'Tableau'],
    description: {
      it: 'Pipeline ELT end-to-end e Data Warehouse (Star Schema) progettato con DuckDB e dbt per analizzare vendite e-commerce multi-canale.',
      en: 'End-to-end ELT pipeline and Data Warehouse (Star Schema) built to analyze multi-channel e-commerce sales.'
    },
    isFeatured: false
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning Models Evaluation',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/machine-learning',
    demo: '',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'MLP Neural Networks', 'Decision Trees'],
    description: {
      it: 'Pre-elaborazione dei dati, tuning degli iperparametri e analisi comparativa di modelli predittivi su dataset reali (credito e accademia).',
      en: 'Data preprocessing, hyperparameter tuning, and comparative analysis of predictive models on multiple datasets.'
    },
    isFeatured: false
  },
  {
    slug: 'java-multiplayer-snake',
    title: 'Java Multiplayer Snake',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/java-multiplayer-snake',
    demo: '',
    technologies: ['Java', 'Swing', 'JavaFX'],
    description: {
      it: 'Classico gioco Snake 2D con modalità multiplayer locale. Sviluppato in Java sfruttando Swing, AWT e JavaFX.',
      en: 'Classic 2D Snake game with local multiplayer mode. Developed in Java using Swing, AWT, and JavaFX.'
    },
    isFeatured: false,
    isMinor: true
  },
  {
    slug: 'python-file-sorter',
    title: 'Python File Sorter',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/python-file-sorter',
    demo: '',
    technologies: ['Python'],
    description: {
      it: 'Script Python per l\'organizzazione automatica dei file scaricati in directory dedicate in base alle estensioni.',
      en: 'Python Script that sorts downloaded files into different folders based on file extensions.'
    },
    isFeatured: false,
    isMinor: true
  },
  {
    slug: 'cpp-binarysearchtree',
    title: 'C++ Binary Search Tree',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/cpp-binarysearchtree',
    demo: '',
    technologies: ['C++'],
    description: {
      it: 'Implementazione di un albero binario di ricerca generico a template in C++. Iteratori custom, funtori di confronto e robusta gestione manuale della memoria.',
      en: 'A generic, template-based Binary Search Tree implementation in C++. Features custom iterators, functor-based comparisons, and robust manual memory management.'
    },
    isFeatured: false,
    isMinor: true
  },
  {
    slug: 'prolog-json-parser',
    title: 'Prolog JSON Parser',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/prolog-json-parser',
    demo: '',
    technologies: ['Prolog'],
    description: {
      it: 'Parser e serializzatore JSON custom in SWI-Prolog. Applicazione pratica di programmazione logica, unificazione di termini e risoluzione ricorsiva.',
      en: 'A custom JSON parser and serializer written in SWI-Prolog. Demonstrates the application of logic programming, term unification, and recursive resolution for data parsing.'
    },
    isFeatured: false,
    isMinor: true
  },
  {
    slug: 'lisp-json-parser',
    title: 'Lisp JSON Parser',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/lisp-json-parser',
    demo: '',
    technologies: ['Common Lisp'],
    description: {
      it: 'Parser e serializzatore JSON ricorsivo a discesa privo di dipendenze esterne, sviluppato interamente in Common Lisp con principi funzionali.',
      en: 'Custom, dependency-free JSON parser and serializer written entirely in Common Lisp. Demonstrates recursive descent parsing and functional programming fundamentals.'
    },
    isFeatured: false,
    isMinor: true
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/portfolio-website',
    demo: 'https://www.ferraa.it',
    technologies: ['SvelteKit', 'TailwindCSS'],
    description: {
      it: 'Sito portfolio personale sviluppato con SvelteKit 5 e Svelte Runes, Tailwind CSS v4, dark mode nativa e design reattivo con scroll snapping.',
      en: 'Personal portfolio website featuring dark mode, scroll snapping, and responsive design.'
    },
    isFeatured: false,
    isMinor: true
  }
];
