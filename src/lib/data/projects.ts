export interface Project {
  slug: string;
  title: string;
  imageLight: string;
  imageDark: string;
  github: string;
  demo: string;
  technologies: string[];
  description: string;
  isFeatured: boolean;
  isMinor?: boolean;
  report?: string;
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
    description: 'Android application for sports tracking and management.',
    isFeatured: true,
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
    description: 'A C++/Qt GUI application that solves Sudoku puzzles. Demonstrates algorithmic problem-solving with real-time visual Backtracking.',
    isFeatured: false
  },
  {
    slug: 'iterative-linear-solver',
    title: 'Sparse Iterative Solvers',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/iterative-linear-solver',
    demo: '',
    technologies: ['Python', 'SciPy', 'NumPy', 'Matplotlib', 'Scientific Computing'],
    description: 'Python library for solving large-scale sparse linear systems using iterative methods (Jacobi, Gauss-Seidel, Conjugate Gradient).',
    isFeatured: false,
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
    description: 'A scientific case study simulating JPEG compression via 2D DCT from scratch. Features Huffman entropy estimation, real-time PSNR/MSE metrics, and a modern Dark-Mode GUI.',
    isFeatured: false,
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
    description: 'A modern full-stack productivity web app featuring real-time activity tracking, Pomodoro focus mode, dynamic time goals, and Chart.js analytics in a Shadcn-style dark UI.',
    isFeatured: false
  },
  {
    slug: 'assettocorsa-rpm-led',
    title: 'Assetto Corsa RPM LEDs',
    imageLight: '/assets/projects/assetto-corsa/cover.jpg',
    imageDark: '/assets/projects/assetto-corsa/cover.jpg',
    github: 'https://github.com/FerrarioChristian/AssettoCorsaRPM-LED',
    demo: '',
    technologies: ['Rust', 'ESP32', 'WLED', 'UDP', 'Shared Memory'],
    description: 'A high-performance Rust telemetry client that syncs Assetto Corsa engine RPMs with an ESP32-powered LED matrix via WLED.',
    isFeatured: true
  },
  {
    slug: 'svelte-unused-components',
    title: 'Svelte Unused Components',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/svelte-unused-components',
    demo: '',
    technologies: ['Go', 'AST Parsing', 'CLI', 'Concurrency'],
    description: 'A blazing fast CLI tool written in Go to detect unused components in Svelte/SvelteKit projects.',
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
    description: 'Real-time multiplayer Snake game with a strong focus on automated CI/CD pipelines and deployment.',
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
    description: 'A decentralized, low-power IoT system for museum environmental monitoring and physical security.',
    isFeatured: true
  },
  {
    slug: 'large-scale',
    title: 'E-Commerce Data Warehouse',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/large-scale',
    demo: '',
    technologies: ['DuckDB', 'dbt', 'SQL', 'PostgreSQL', 'ELT', 'Tableau'],
    description: 'End-to-end ELT pipeline and Data Warehouse (Star Schema) built to analyze multi-channel e-commerce sales.',
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
    description: 'Data preprocessing, hyperparameter tuning, and comparative analysis of predictive models on multiple datasets.',
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
    description: 'Classic 2D Snake game with local multiplayer mode. Developed in Java using Swing, AWT, and JavaFX.',
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
    description: 'Python Script that sorts downloaded files into different folders based on file extensions.',
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
    description: 'A generic, template-based Binary Search Tree implementation in C++. Features custom iterators, functor-based comparisons, and robust manual memory management.',
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
    description: 'A custom JSON parser and serializer written in SWI-Prolog. Demonstrates the application of logic programming, term unification, and recursive resolution for data parsing.',
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
    description: 'Custom, dependency-free JSON parser and serializer written entirely in Common Lisp. Demonstrates recursive descent parsing and functional programming fundamentals.',
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
    description: 'Personal portfolio website featuring dark mode, scroll snapping, and responsive design.',
    isFeatured: false,
    isMinor: true
  }
];
