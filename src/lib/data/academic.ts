import type { Localized } from '$lib/i18n/locale.svelte';

export interface Exam {
  name: Localized<string> | string;
  cfu: number;
  grade: string; // e.g. '30L', '30', '29', '28'
  date?: string; // e.g. '04/02/2026'
  area?: Localized<string> | string;
}

export interface DegreeDetails {
  id: 'magistrale' | 'triennale';
  title: Localized<string>;
  subtitle: string;
  period: string;
  status: Localized<string>;
  finalGrade: string; // e.g. '110L / 110' or '103 / 110'
  finalGradeLabel: Localized<string>;
  gpa: string; // e.g. '29.36 / 30'
  cfuTotal: number;
  thesis?: {
    title: Localized<string>;
    supervisor: string;
    description?: Localized<string>;
    pdfUrl?: string;
    projectSlug?: string;
  };
  exams: Exam[];
}

export const academicDegrees: Record<'magistrale' | 'triennale', DegreeDetails> = {
  magistrale: {
    id: 'magistrale',
    title: {
      it: 'Laurea Magistrale in Informatica',
      en: 'M.Sc. in Computer Science'
    },
    subtitle: 'Università degli Studi di Milano-Bicocca',
    period: '2024 — 2026',
    status: {
      it: 'Completata',
      en: 'Graduated'
    },
    finalGrade: '110L / 110',
    finalGradeLabel: {
      it: '110 e Lode',
      en: '110 with Honors'
    },
    gpa: '29.36 / 30',
    cfuTotal: 120,
    thesis: {
      title: {
        it: 'A Language-Agnostic Framework for Dependency Extraction',
        en: 'A Language-Agnostic Framework for Dependency Extraction'
      },
      supervisor: 'Prof.ssa Francesca Arcelli Fontana • Dott. Francesco Refolli',
      description: {
        it: 'Framework ad alte prestazioni per analisi statica di AST, name resolution cross-language e costruzione di grafi di dipendenza multilivello (Rust, C++, Java, Python).',
        en: 'High-performance framework for AST static analysis, cross-language name resolution, and multi-level dependency graph extraction (Rust, C++, Java, Python).'
      },
      pdfUrl: '/theses/thesis-magistrale.pdf',
      projectSlug: 'omnideps'
    },
    exams: [
      {
        name: { it: 'Processo e Sviluppo del Software', en: 'Software Process & Development' },
        cfu: 6,
        grade: '30L',
        date: '18/06/2025',
        area: { it: 'Software Engineering', en: 'Software Engineering' }
      },
      {
        name: { it: 'Architettura del Software', en: 'Software Architecture' },
        cfu: 6,
        grade: '30L',
        date: '22/01/2026',
        area: { it: 'Software Engineering', en: 'Software Engineering' }
      },
      {
        name: { it: 'Cloud Computing', en: 'Cloud Computing' },
        cfu: 6,
        grade: '30L',
        date: '29/01/2026',
        area: { it: 'Sistemi Distribuiti', en: 'Distributed Systems' }
      },
      {
        name: { it: 'Laboratorio di Progettazione', en: 'System Design Laboratory' },
        cfu: 6,
        grade: '30L',
        date: '12/06/2026',
        area: { it: 'Progettazione Sistemi', en: 'System Engineering' }
      },
      {
        name: { it: 'Modelli e Computazione', en: 'Models & Computation' },
        cfu: 12,
        grade: '30',
        date: '18/07/2025',
        area: { it: 'Teoria dei Linguaggi & Sistemi', en: 'Theory of Languages & Systems' }
      },
      {
        name: { it: 'Metodi del Calcolo Scientifico', en: 'Scientific Computing Methods' },
        cfu: 6,
        grade: '30',
        date: '09/06/2025',
        area: { it: 'Calcolo Scientifico', en: 'Scientific Computing' }
      },
      {
        name: { it: 'Modelli Probabilistici per le Decisioni', en: 'Probabilistic Decision Models' },
        cfu: 6,
        grade: '30',
        date: '20/06/2025',
        area: { it: 'Matematica Applicata', en: 'Applied Mathematics' }
      },
      {
        name: { it: "Qualità del Software", en: 'Software Quality' },
        cfu: 6,
        grade: '30',
        date: '13/06/2025',
        area: { it: 'Software Engineering', en: 'Software Engineering' }
      },
      {
        name: { it: 'Architetture Dati', en: 'Data Architectures' },
        cfu: 6,
        grade: '29',
        date: '04/02/2026',
        area: { it: 'Data Engineering', en: 'Data Engineering' }
      },
      {
        name: { it: 'Evolution of Software Systems & Reverse Engineering', en: 'Evolution of Software Systems & Reverse Engineering' },
        cfu: 6,
        grade: '29',
        date: '08/06/2026',
        area: { it: 'Software Evolution & Security', en: 'Software Evolution & Security' }
      },
      {
        name: { it: 'Laboratorio Internet of Things', en: 'Internet of Things Laboratory' },
        cfu: 6,
        grade: '29',
        date: '08/06/2026',
        area: { it: 'IoT & Embedded Systems', en: 'IoT & Embedded Systems' }
      },
      {
        name: { it: 'Machine Learning', en: 'Machine Learning' },
        cfu: 6,
        grade: '28',
        date: '20/06/2025',
        area: { it: 'AI & Data Science', en: 'AI & Data Science' }
      },
      {
        name: { it: 'Large Scale Data Management', en: 'Large Scale Data Management' },
        cfu: 6,
        grade: '26',
        date: '17/02/2026',
        area: { it: 'Data Engineering', en: 'Data Engineering' }
      }
    ]
  },
  triennale: {
    id: 'triennale',
    title: {
      it: 'Laurea Triennale in Informatica',
      en: 'B.Sc. in Computer Science'
    },
    subtitle: 'Università degli Studi di Milano-Bicocca',
    period: '2021 — 2024',
    status: {
      it: 'Completata',
      en: 'Graduated'
    },
    finalGrade: '103 / 110',
    finalGradeLabel: {
      it: '103 su 110',
      en: '103 / 110'
    },
    gpa: '26.20 / 30',
    cfuTotal: 180,
    thesis: {
      title: {
        it: 'Architetture e Performance delle Applicazioni Web: Tecniche di Rendering e Gestione delle Risorse',
        en: 'Web Application Architectures and Performance: Rendering Techniques and Resource Management'
      },
      supervisor: 'Prof.ssa Sara Lucia Manzoni',
      description: {
        it: 'Studio e benchmarking comparativo tra Server-Side Rendering (SSR), Client-Side Rendering (CSR) e tecniche di reattività moderna per l\'ottimizzazione del rendering e delle risorse.',
        en: 'Empirical benchmark and comparative study of Server-Side Rendering (SSR), Client-Side Rendering (CSR), and modern reactivity techniques for rendering and resource optimization.'
      },
      pdfUrl: '/theses/thesis-triennale.pdf'
    },
    exams: [
      {
        name: { it: 'Architettura degli Elaboratori', en: 'Computer Architecture' },
        cfu: 8,
        grade: '30L',
        date: '30/06/2022',
        area: { it: 'Architetture Hardware', en: 'Computer Architecture' }
      },
      {
        name: { it: 'Programmazione 2', en: 'Programming 2' },
        cfu: 8,
        grade: '30L',
        date: '30/07/2022',
        area: { it: 'OOP & Java', en: 'OOP & Java' }
      },
      {
        name: { it: 'Basi di Dati', en: 'Databases' },
        cfu: 8,
        grade: '30L',
        date: '11/07/2023',
        area: { it: 'Sistemi Informativi', en: 'Databases' }
      },
      {
        name: { it: 'Sicurezza ed Affidabilità', en: 'Security & Reliability' },
        cfu: 8,
        grade: '30L',
        date: '17/06/2024',
        area: { it: 'Cybersecurity', en: 'Cybersecurity' }
      },
      {
        name: { it: 'Programmazione 1', en: 'Programming 1' },
        cfu: 8,
        grade: '30',
        date: '04/02/2022',
        area: { it: 'Programmazione Fondamentale', en: 'Core Programming' }
      },
      {
        name: { it: 'Programmazione C++', en: 'C++ Programming' },
        cfu: 8,
        grade: '29',
        date: '17/09/2024',
        area: { it: 'Linguaggi Compilati', en: 'Compiled Systems' }
      },
      {
        name: { it: 'Programmazione di Dispositivi Mobili', en: 'Mobile Device Programming' },
        cfu: 8,
        grade: '29',
        date: '16/09/2024',
        area: { it: 'Mobile Development', en: 'Mobile Development' }
      },
      {
        name: { it: 'Algoritmi e Strutture Dati', en: 'Algorithms & Data Structures' },
        cfu: 8,
        grade: '28',
        date: '24/06/2022',
        area: { it: 'Algoritmica', en: 'Algorithms' }
      },
      {
        name: { it: 'Linguaggi di Programmazione', en: 'Programming Languages' },
        cfu: 8,
        grade: '28',
        date: '01/02/2023',
        area: { it: 'Teoria dei Linguaggi', en: 'Programming Languages' }
      },
      {
        name: { it: 'Linguaggi e Computabilità', en: 'Languages & Computability' },
        cfu: 8,
        grade: '27',
        date: '10/02/2023',
        area: { it: 'Teoria dei Linguaggi', en: 'Formal Languages' }
      },
      {
        name: { it: "Probabilità e Statistica per l'Informatica", en: 'Probability & Statistics for CS' },
        cfu: 8,
        grade: '27',
        date: '20/06/2023',
        area: { it: 'Statistica', en: 'Statistics' }
      },
      {
        name: { it: 'Reti e Sistemi Operativi', en: 'Networks & Operating Systems' },
        cfu: 8,
        grade: '26',
        date: '08/03/2023',
        area: { it: 'Reti & Sistemi', en: 'Networks & OS' }
      },
      {
        name: { it: 'Algebra Lineare e Geometria', en: 'Linear Algebra & Geometry' },
        cfu: 8,
        grade: '25',
        date: '29/02/2024',
        area: { it: 'Matematica', en: 'Mathematics' }
      },
      {
        name: { it: 'Analisi e Progettazione del Software', en: 'Software Analysis & Design' },
        cfu: 8,
        grade: '24',
        date: '08/06/2023',
        area: { it: 'Software Engineering', en: 'Software Engineering' }
      },
      {
        name: { it: 'Sistemi Distribuiti', en: 'Distributed Systems' },
        cfu: 8,
        grade: '24',
        date: '18/07/2023',
        area: { it: 'Sistemi Distribuiti', en: 'Distributed Systems' }
      },
      {
        name: { it: "Fondamenti dell'Informatica", en: 'Theoretical Computer Science' },
        cfu: 8,
        grade: '23',
        date: '14/09/2023',
        area: { it: 'Teoria della Computazione', en: 'Theory of Computation' }
      },
      {
        name: { it: 'Analisi e Progetto di Algoritmi', en: 'Algorithm Analysis & Design' },
        cfu: 8,
        grade: '23',
        date: '12/02/2024',
        area: { it: 'Algoritmica Avanzata', en: 'Advanced Algorithms' }
      },
      {
        name: { it: "Metodi Algebrici per l'Informatica", en: 'Algebraic Methods for Computer Science' },
        cfu: 8,
        grade: '21',
        date: '13/02/2024',
        area: { it: 'Matematica Applicata', en: 'Applied Mathematics' }
      },
      {
        name: { it: 'Ricerca Operativa e Pianificazione delle Risorse', en: 'Operations Research & Resource Planning' },
        cfu: 8,
        grade: '21',
        date: '22/07/2024',
        area: { it: 'Ottimizzazione', en: 'Optimization & OR' }
      },
      {
        name: { it: 'Analisi Matematica', en: 'Mathematical Analysis' },
        cfu: 8,
        grade: '19',
        date: '15/01/2024',
        area: { it: 'Matematica', en: 'Mathematics' }
      }
    ]
  }
};
