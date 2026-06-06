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
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/',
    demo: 'https://github.com/',
    technologies: ['SvelteKit', 'TailwindCSS'],
    description: 'A brief description of Project One.',
    isFeatured: true
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/',
    demo: 'https://github.com/',
    technologies: ['React', 'Node.js'],
    description: 'A brief description of Project Two.',
    isFeatured: true
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/',
    demo: 'https://github.com/',
    technologies: ['Spring Boot', 'Java'],
    description: 'A brief description of Project Three.',
    isFeatured: true
  },
  {
    slug: 'android-app',
    title: 'Android App',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/',
    demo: 'https://github.com/',
    technologies: ['Kotlin', 'Android Studio'],
    description: 'An Android application built with Kotlin.',
    isFeatured: false
  },
  {
    slug: 'python-lib',
    title: 'Python Data Lib',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/',
    demo: 'https://github.com/',
    technologies: ['Python', 'Pandas'],
    description: 'A data processing library in Python.',
    isFeatured: false
  },
  {
    slug: 'cpp-gui',
    title: 'C++ QT App',
    imageLight: '/assets/project-wip.jpg',
    imageDark: '/assets/project-wip-dark.jpg',
    github: 'https://github.com/',
    demo: 'https://github.com/',
    technologies: ['C++', 'Qt'],
    description: 'A cross-platform desktop application built with C++ and Qt.',
    isFeatured: false
  }
];
