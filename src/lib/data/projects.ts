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
  report?: string;
}

export const projects: Project[] = [
  {
    slug: 'sportrack',
    title: 'Sportrack',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/sportrack',
    demo: '',
    technologies: ['Java', 'Android', 'Firebase', 'Room SQLite', 'Material Design 3', 'Retrofit'],
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
    isFeatured: true
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
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/jpeg-converter',
    demo: '',
    technologies: ['Python', 'SciPy', 'NumPy', 'Image Processing'],
    description: 'An educational implementation of the JPEG image compression algorithm using 2D Discrete Cosine Transform (DCT) from scratch.',
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
    technologies: ['Java', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Bootstrap'],
    description: 'Spring Boot Web App for an university software development course on MVC architecture.',
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
    isFeatured: false
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
    isFeatured: false
  },
  {
    slug: 'snakey',
    title: 'Snakey',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/FerrarioChristian/Snakey',
    demo: '',
    technologies: ['JavaScript', 'Node.js'],
    description: 'Multiplayer snake made in Node.js.',
    isFeatured: false
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
    isFeatured: true
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
    isFeatured: false
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
    isFeatured: false
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
    isFeatured: false
  }
];
