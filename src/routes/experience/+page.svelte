<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Button from '$lib/components/Button.svelte';
  import AcademicDetailModal from '$lib/components/AcademicDetailModal.svelte';
  import { academicDegrees } from '$lib/data/academic';
  import { workExperiences, educationMilestones, personalInterests } from '$lib/data/about';
  import { getLocale, t } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  type DegreeKey = 'magistrale' | 'triennale';
  let activeDegreeId = $state<DegreeKey | null>(null);

  function openDegreeModal(id: DegreeKey) {
    activeDegreeId = id;
  }

  function closeDegreeModal() {
    activeDegreeId = null;
  }

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // Remove scroll-snap on this page so the user can scroll freely without viewport lock
  onMount(() => {
    const root = document.documentElement;
    const hadSnap = root.classList.contains('lg:snap-y');
    root.classList.remove('lg:snap-y', 'lg:snap-mandatory');
    return () => {
      if (hadSnap) {
        root.classList.add('lg:snap-y', 'lg:snap-mandatory');
      }
    };
  });

  interface BaseTimelineItem {
    id: string;
    period: string;
    category: string;
    metaSubtitle: string;
    icon: string;
  }

  interface AcademicTimelineItem extends BaseTimelineItem {
    type: 'academic';
    title: string;
    subtitle: string;
    tag: string;
    tagColor: string;
    summary: string;
    hasDetails: boolean;
    degreeId?: DegreeKey;
  }

  interface WorkTimelineItem extends BaseTimelineItem {
    type: 'work';
    role: string;
    company: string;
    location: string;
    badge?: string;
    description: string;
    keyPoints: string[];
    technologies: string[];
  }

  type TimelineItem = AcademicTimelineItem | WorkTimelineItem;

  const workMap = new Map(workExperiences.map((w) => [w.id, w]));
  const eduMap = new Map(educationMilestones.map((e) => [e.id, e]));

  function buildAcademicItem(id: 'magistrale' | 'triennale' | 'diploma', categoryKey: 'academic' | 'highSchool'): AcademicTimelineItem {
    const edu = eduMap.get(id)!;
    const category = categoryKey === 'academic'
      ? (locale === 'it' ? 'Formazione Accademica' : 'Academic Education')
      : (locale === 'it' ? 'Istruzione Superiore' : 'High School Education');
    return {
      type: 'academic',
      id: edu.id,
      degreeId: edu.degreeId,
      period: typeof edu.period === 'string' ? edu.period : t(edu.period),
      category,
      metaSubtitle: `${t(edu.institution)} • ${typeof edu.tag === 'string' ? edu.tag : t(edu.tag)}`,
      title: t(edu.title),
      subtitle: t(edu.institution),
      tag: typeof edu.tag === 'string' ? edu.tag : t(edu.tag),
      tagColor: edu.tagColor,
      icon: edu.icon,
      hasDetails: edu.hasDetails,
      summary: t(edu.summary)
    };
  }

  function buildWorkItem(id: string): WorkTimelineItem {
    const work = workMap.get(id)!;
    return {
      type: 'work',
      id: work.id,
      period: work.period,
      category: locale === 'it' ? 'Esperienza Lavorativa' : 'Work Experience',
      metaSubtitle: `${work.company} • ${work.location}`,
      role: t(work.role),
      company: work.company,
      location: work.location,
      badge: work.badge,
      icon: work.icon,
      description: t(work.description),
      keyPoints: t(work.keyPoints),
      technologies: work.technologies
    };
  }

  // Unified Chronological Timeline: Formazione + Esperienze Lavorative sourced directly from about.ts
  const timelineItems = $derived<TimelineItem[]>([
    buildAcademicItem('magistrale', 'academic'),
    buildWorkItem('efebia'),
    buildAcademicItem('triennale', 'academic'),
    buildWorkItem('elemaster'),
    buildWorkItem('asst-lecco'),
    buildAcademicItem('diploma', 'highSchool')
  ]);
</script>

<svelte:head>
  <title>{locale === 'it' ? 'Esperienze, Percorso & Interessi' : 'Experience, Journey & Interests'} | Christian Ferrario</title>
</svelte:head>

<Header />

<main class="w-full box-border pb-16">

  <!-- ================================================================= -->
  <!-- UNIFIED TIMELINE: FORMAZIONE & LAVORO (Grand Alternating Timeline) -->
  <!-- ================================================================= -->
  <section
    id="timeline"
    class="relative w-full pt-4 sm:pt-6 pb-16 sm:pb-24 px-[5%] lg:px-[8rem] box-border bg-white dark:bg-black"
  >
    <div class="w-full max-w-[85rem] mx-auto flex flex-col">
      
      <!-- Top Navigation Row: Back to Home & Anchor Tabs -->
      <div class="flex items-center justify-between w-full mb-6 sm:mb-8 shrink-0">
        <a
          href="/"
          data-sveltekit-preload-data="hover"
          class="group interactable inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <span class="material-symbols-rounded text-base transition-transform duration-200 group-hover:-translate-x-1 pointer-events-none">arrow_back</span>
          <span class="group-hover:underline group-hover:decoration-gray-300 underline-offset-[0.35rem]">{locale === 'it' ? 'Torna alla Home' : 'Back to Home'}</span>
        </a>

        <!-- Anchor Navigation Tabs -->
        <nav class="flex items-center gap-1.5 sm:gap-2">
          <button
            onclick={() => scrollToSection('timeline')}
            class="interactable px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black transition-all"
          >
            {locale === 'it' ? 'Timeline' : 'Timeline'}
          </button>
          <button
            onclick={() => scrollToSection('interests')}
            class="interactable px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-white/30 transition-all"
          >
            {locale === 'it' ? 'Interessi & Setup' : 'Interests'}
          </button>
        </nav>
      </div>

      <!-- Section Title & Statement Header -->
      <div class="text-left mb-10 sm:mb-14">
        <p class="font-semibold text-xs sm:text-sm font-mono tracking-wider text-gray-500 dark:text-zinc-400 uppercase mb-2">
          {locale === 'it' ? '01 • Formazione & Esperienze Lavorative' : '01 • Education & Work Experience'}
        </p>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight leading-tight mb-3">
          {locale === 'it' ? 'Il Mio Percorso Completo' : 'My Complete Journey'}
        </h1>
        <p class="text-base sm:text-lg text-[var(--color-brand-gray)] dark:text-gray-300 font-light max-w-3xl leading-relaxed">
          {locale === 'it'
            ? 'Dagli studi universitari alle esperienze sul campo in azienda e in ambito sanitario. Clicca sui titoli accademici per consultare esami, voti e tesi.'
            : 'From university degrees to hands-on experience in industry and healthcare IT systems. Click university degrees to view courses, transcripts, and thesis PDFs.'}
        </p>
      </div>

      <!-- Grand Alternating Timeline (Central Axis on Desktop, Left Axis on Mobile) -->
      <div class="relative w-full max-w-5xl mx-auto py-2">
        <!-- Central Spine Line -->
        <div class="absolute left-4 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-white/10"></div>

        <div class="space-y-12 sm:space-y-16">
          {#each timelineItems as item, i}
            <!-- Milestone Row -->
            <div class="relative flex flex-col md:flex-row items-center w-full">
              
              <!-- Mobile Spine Node -->
              <div class="md:hidden absolute left-1 sm:left-3 top-6 w-7 h-7 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center z-10 shadow-sm">
                <span class="material-symbols-rounded text-sm text-black dark:text-white">{item.icon}</span>
              </div>

              <!-- Desktop Center Spine Node -->
              <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 items-center justify-center z-10 w-12 h-12 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white shadow-sm">
                <span class="material-symbols-rounded text-xl text-black dark:text-white">{item.icon}</span>
              </div>

              {#if i % 2 === 0}
                <!-- LEFT CARD (Desktop Left Half) -->
                <div class="w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 md:pr-12 lg:pr-16 flex justify-end">
                  {#if item.type === 'academic'}
                    <!-- Academic Card -->
                    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
                    <div
                      class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between w-full
                        {item.hasDetails
                          ? 'interactable cursor-pointer hover:border-gray-400 dark:hover:border-white/30 hover:shadow-md'
                          : 'hover:border-gray-300 dark:hover:border-white/20'}"
                      data-type={item.hasDetails ? 'inspect' : undefined}
                      role={item.hasDetails ? 'button' : undefined}
                      tabindex={item.hasDetails ? 0 : undefined}
                      onclick={() => item.hasDetails && item.degreeId && openDegreeModal(item.degreeId)}
                      onkeydown={(e) => {
                        if (item.hasDetails && item.degreeId && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          openDegreeModal(item.degreeId);
                        }
                      }}
                    >
                      <div>
                        <!-- Header: Icon, Mobile Period, Tag -->
                        <div class="flex items-center justify-between gap-2 mb-3">
                          <div class="flex items-center gap-2.5">
                            <div class="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-sm">
                              <span class="material-symbols-rounded text-xl">{item.icon}</span>
                            </div>
                            <span class="md:hidden font-mono text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
                              {item.period}
                            </span>
                          </div>
                          <span class="px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold border {item.tagColor}">
                            {item.tag}
                          </span>
                        </div>

                        <h2 class="text-xl sm:text-2xl font-bold text-black dark:text-white leading-tight mb-1">
                          {item.title}
                        </h2>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                          {item.subtitle}
                        </p>

                        <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                          {item.summary}
                        </p>
                      </div>

                      {#if item.hasDetails}
                        <div class="mt-4 pt-2 flex items-center justify-between text-sm font-medium text-black dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                          <span class="inline-flex items-center gap-2">
                            <span class="material-symbols-rounded text-base">search</span>
                            <span>{locale === 'it' ? 'Vedi esami, voti e tesi' : 'View courses, grades & thesis'}</span>
                          </span>
                          <span class="material-symbols-rounded text-base transition-transform duration-200 group-hover:translate-x-1.5">arrow_forward</span>
                        </div>
                      {/if}
                    </div>

                  {:else}
                    <!-- Work Card -->
                    <div class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-gray-400 dark:hover:border-white/30 flex flex-col justify-between w-full">
                      <div>
                        <!-- Header: Icon, Mobile Period, Badge -->
                        <div class="flex items-center justify-between gap-2 mb-3">
                          <div class="flex items-center gap-2.5">
                            <div class="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-sm">
                              <span class="material-symbols-rounded text-xl">{item.icon}</span>
                            </div>
                            <span class="md:hidden font-mono text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
                              {item.period}
                            </span>
                          </div>
                          {#if item.badge}
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                              {item.badge}
                            </span>
                          {/if}
                        </div>

                        <h2 class="text-xl sm:text-2xl font-bold text-black dark:text-white leading-tight mb-1">
                          {item.role}
                        </h2>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                          {item.company} • {item.location}
                        </p>

                        <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <!-- Key Highlights -->
                        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light mb-5">
                          {#each item.keyPoints as point}
                            <li class="flex items-start gap-2.5">
                              <span class="w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40 shrink-0 mt-2"></span>
                              <span class="leading-relaxed">{point}</span>
                            </li>
                          {/each}
                        </ul>
                      </div>

                      <!-- Tech Badges -->
                      <div class="pt-2 flex flex-wrap gap-1.5">
                        {#each item.technologies as tech}
                          <span class="px-3 py-1 bg-white dark:bg-black text-xs font-mono font-medium rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                            {tech}
                          </span>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>

                <!-- Desktop Opposite Side: Period & Location Callout -->
                <div class="hidden md:flex md:w-1/2 md:pl-12 lg:pl-16 flex-col justify-center">
                  <span class="text-3xl lg:text-4xl font-mono font-bold text-black dark:text-white tracking-tight">{item.period}</span>
                  <span class="text-sm sm:text-base font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider mt-1">{item.metaSubtitle}</span>
                  <span class="text-xs font-mono text-gray-400 dark:text-zinc-500 mt-1">{item.category}</span>
                </div>

              {:else}
                <!-- RIGHT CARD (Desktop Right Half) -->
                <!-- Desktop Opposite Side: Period & Location Callout -->
                <div class="hidden md:flex md:w-1/2 md:pr-12 lg:pr-16 flex-col justify-center text-right">
                  <span class="text-3xl lg:text-4xl font-mono font-bold text-black dark:text-white tracking-tight">{item.period}</span>
                  <span class="text-sm sm:text-base font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider mt-1">{item.metaSubtitle}</span>
                  <span class="text-xs font-mono text-gray-400 dark:text-zinc-500 mt-1">{item.category}</span>
                </div>

                <div class="w-full md:w-1/2 pl-12 sm:pl-16 md:pl-12 lg:pl-16 md:pr-0 flex justify-start">
                  {#if item.type === 'academic'}
                    <!-- Academic Card -->
                    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
                    <div
                      class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between w-full
                        {item.hasDetails
                          ? 'interactable cursor-pointer hover:border-gray-400 dark:hover:border-white/30 hover:shadow-md'
                          : 'hover:border-gray-300 dark:hover:border-white/20'}"
                      data-type={item.hasDetails ? 'inspect' : undefined}
                      role={item.hasDetails ? 'button' : undefined}
                      tabindex={item.hasDetails ? 0 : undefined}
                      onclick={() => item.hasDetails && item.degreeId && openDegreeModal(item.degreeId)}
                      onkeydown={(e) => {
                        if (item.hasDetails && item.degreeId && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault();
                          openDegreeModal(item.degreeId);
                        }
                      }}
                    >
                      <div>
                        <!-- Header: Icon, Mobile Period, Tag -->
                        <div class="flex items-center justify-between gap-2 mb-3">
                          <div class="flex items-center gap-2.5">
                            <div class="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-sm">
                              <span class="material-symbols-rounded text-xl">{item.icon}</span>
                            </div>
                            <span class="md:hidden font-mono text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
                              {item.period}
                            </span>
                          </div>
                          <span class="px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold border {item.tagColor}">
                            {item.tag}
                          </span>
                        </div>

                        <h2 class="text-xl sm:text-2xl font-bold text-black dark:text-white leading-tight mb-1">
                          {item.title}
                        </h2>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                          {item.subtitle}
                        </p>

                        <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                          {item.summary}
                        </p>
                      </div>

                      {#if item.hasDetails}
                        <div class="mt-4 pt-2 flex items-center justify-between text-sm font-medium text-black dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                          <span class="inline-flex items-center gap-2">
                            <span class="material-symbols-rounded text-base">search</span>
                            <span>{locale === 'it' ? 'Vedi esami, voti e tesi' : 'View courses, grades & thesis'}</span>
                          </span>
                          <span class="material-symbols-rounded text-base transition-transform duration-200 group-hover:translate-x-1.5">arrow_forward</span>
                        </div>
                      {/if}
                    </div>

                  {:else}
                    <!-- Work Card -->
                    <div class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-gray-400 dark:hover:border-white/30 flex flex-col justify-between w-full">
                      <div>
                        <!-- Header: Icon, Mobile Period, Badge -->
                        <div class="flex items-center justify-between gap-2 mb-3">
                          <div class="flex items-center gap-2.5">
                            <div class="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-sm">
                              <span class="material-symbols-rounded text-xl">{item.icon}</span>
                            </div>
                            <span class="md:hidden font-mono text-xs sm:text-sm text-gray-500 dark:text-zinc-400">
                              {item.period}
                            </span>
                          </div>
                          {#if item.badge}
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                              {item.badge}
                            </span>
                          {/if}
                        </div>

                        <h2 class="text-xl sm:text-2xl font-bold text-black dark:text-white leading-tight mb-1">
                          {item.role}
                        </h2>
                        <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                          {item.company} • {item.location}
                        </p>

                        <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <!-- Key Highlights -->
                        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-light mb-5">
                          {#each item.keyPoints as point}
                            <li class="flex items-start gap-2.5">
                              <span class="w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40 shrink-0 mt-2"></span>
                              <span class="leading-relaxed">{point}</span>
                            </li>
                          {/each}
                        </ul>
                      </div>

                      <!-- Tech Badges -->
                      <div class="pt-2 flex flex-wrap gap-1.5">
                        {#each item.technologies as tech}
                          <span class="px-3 py-1 bg-white dark:bg-black text-xs font-mono font-medium rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                            {tech}
                          </span>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>

              {/if}
            </div>
          {/each}
        </div>
      </div>

    </div>
  </section>


  <!-- ================================================================= -->
  <!-- SECTION 2: INTERESSI PERSONALI & SETUP (Spacious, Generous Scale)  -->
  <!-- ================================================================= -->
  <section
    id="interests"
    class="relative w-full pt-12 sm:pt-16 pb-12 sm:pb-16 px-[5%] lg:px-[8rem] box-border bg-white dark:bg-black"
  >
    <div class="w-full max-w-[85rem] mx-auto flex flex-col">
      
      <!-- Section Header -->
      <div class="text-left mb-8 sm:mb-12">
        <p class="font-semibold text-xs sm:text-sm font-mono tracking-wider text-gray-500 dark:text-zinc-400 uppercase mb-2">
          {locale === 'it' ? '02 • Passioni & Setup' : '02 • Passions & Setup'}
        </p>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white tracking-tight leading-tight mb-3">
          {locale === 'it' ? 'Interessi Personali, Home Lab & Workflow' : 'Personal Interests, Home Lab & Workflow'}
        </h2>
        <p class="text-base sm:text-lg text-[var(--color-brand-gray)] dark:text-gray-300 font-light max-w-3xl leading-relaxed">
          {locale === 'it'
            ? 'Cosa faccio quando non studio o lavoro: i progetti hardware, l’home lab, il workflow su terminale e le passioni nel tempo libero.'
            : 'What I build outside work and university: self-hosted servers, terminal workflows, sim racing hardware, and competitive gaming.'}
        </p>
      </div>

      <!-- 4 Cards Grid (Airy, Generous Padding & Typography) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch mb-12 sm:mb-16">
        {#each personalInterests as item}
          <div class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-6 sm:p-7 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-gray-400 dark:hover:border-white/30">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <div class="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-sm">
                  <span class="material-symbols-rounded text-xl">{item.icon}</span>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                  {t(item.tag)}
                </span>
              </div>

              <h3 class="text-lg sm:text-xl font-bold text-black dark:text-white leading-tight mb-1">
                {t(item.title)}
              </h3>
              <p class="text-xs font-mono text-gray-500 dark:text-zinc-400 mb-3">
                {t(item.category)}
              </p>

              <p class="text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
                {t(item.summary)}
              </p>
            </div>

            <!-- Tech Pills -->
            <div class="mt-auto pt-3 flex flex-wrap gap-1.5">
              {#each item.pills as pill}
                <span class="px-2.5 py-0.5 bg-white dark:bg-black text-xs font-mono font-medium rounded-full text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                  {pill}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <!-- Bottom Call-to-Action Card -->
      <div class="p-6 sm:p-8 rounded-[calc(1.8rem*var(--brm))] corner-squircle bg-white dark:bg-black border border-gray-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h4 class="text-lg sm:text-xl font-bold text-black dark:text-white leading-snug mb-1">
            {locale === 'it' ? 'Vuoi esplorare tutti i progetti o metterti in contatto?' : 'Want to explore all projects or get in touch?'}
          </h4>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light">
            {locale === 'it'
              ? 'Consulta i progetti software con architetture dettagliate oppure scrivimi per nuove opportunità.'
              : 'Browse software projects with detailed architectures or reach out for new opportunities.'}
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <Button variant="filled" href="/projects" data-type="internal" padding="py-2 px-5" class="text-xs sm:text-sm font-semibold">
            {locale === 'it' ? 'I Miei Progetti' : 'Explore Projects'}
          </Button>
          <Button variant="outline" href="/#contact" data-type="internal" padding="py-2 px-5" class="text-xs sm:text-sm font-semibold">
            {locale === 'it' ? 'Contattami' : 'Get in Touch'}
          </Button>
        </div>
      </div>

      <!-- Standard Page Footer -->
      <Footer snap={false} />

    </div>
  </section>

</main>

<!-- Academic Modal (Inspect Course Transcript & Thesis) -->
<AcademicDetailModal
  degree={activeDegreeId ? academicDegrees[activeDegreeId] : null}
  onclose={closeDegreeModal}
/>
