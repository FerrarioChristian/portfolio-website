<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import AcademicDetailModal from '$lib/components/AcademicDetailModal.svelte';
  import { academicDegrees } from '$lib/data/academic';
  import { educationMilestones } from '$lib/data/about';
  import { getLocale, t } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const milestones = $derived(
    educationMilestones.map((m) => ({
      id: m.id,
      period: typeof m.period === 'string' ? m.period : t(m.period),
      title: t(m.title),
      subtitle: t(m.institution),
      tag: typeof m.tag === 'string' ? m.tag : t(m.tag),
      tagColor: m.tagColor,
      icon: m.icon,
      hasDetails: m.hasDetails
    }))
  );

  let activeDegreeId = $state<'magistrale' | 'triennale' | null>(null);

  function openDegreeModal(id: 'magistrale' | 'triennale') {
    activeDegreeId = id;
  }

  function closeDegreeModal() {
    activeDegreeId = null;
  }
</script>

<section
  id="about"
  class="lg:snap-start relative py-6 lg:py-8 min-h-[85vh] lg:min-h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
>
  <div class="w-full max-w-[90rem] mx-auto flex flex-col justify-between">
    <!-- Header aligned with site typography style -->
    <div class="text-center mb-4 lg:mb-5">
      <p class="font-semibold text-sm sm:text-base text-[var(--color-brand-gray)] dark:text-gray-300 text-center mb-1">
        {locale === 'it' ? 'Percorso & Formazione' : 'Background & Journey'}
      </p>
      <h2 class="text-[2rem] sm:text-[2.4rem] lg:text-[2.85rem] font-bold text-center text-black dark:text-white tracking-tight">
        {locale === 'it' ? 'Chi Sono' : 'About Me'}
      </h2>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      <!-- Left: Profile Summary Card (5 cols) -->
      <div class="lg:col-span-5 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-5 sm:p-6 shadow-sm flex flex-col justify-between text-left">
        <div>
          <div class="flex items-center gap-3.5 mb-3.5">
            <div class="w-12 h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              CF
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight leading-tight">
                Christian Ferrario
              </h3>
              <p class="text-xs sm:text-sm uppercase font-mono tracking-wider text-gray-500 dark:text-zinc-400">
                Software Engineer • M.Sc.
              </p>
            </div>
          </div>

          <p class="text-sm sm:text-[0.95rem] text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-4">
            {locale === 'it'
              ? 'Focalizzato sullo sviluppo di sistemi ad alte prestazioni, architetture backend scalabili e interfacce web reattive. Mi appassiona trasformare sfide algoritmiche complesse in codice efficiente, verificabile e manutenibile.'
              : 'Focused on high-performance systems engineering, scalable backend architectures, and refined web interfaces. Passionate about translating complex algorithmic challenges into clean, maintainable software.'}
          </p>

          <div class="p-3 sm:p-3.5 rounded-[calc(1.1rem*var(--brm))] corner-squircle border border-gray-200 dark:border-white/10 bg-white dark:bg-black space-y-2 text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-400 mb-5">
            <div class="flex justify-between items-center">
              <span>{locale === 'it' ? 'Ateneo:' : 'University:'}</span>
              <span class="text-black dark:text-white font-medium">Milano-Bicocca</span>
            </div>
            <div class="flex justify-between items-center">
              <span>{locale === 'it' ? 'Focus:' : 'Focus:'}</span>
              <span class="text-black dark:text-white font-medium">Systems, Full-Stack, IoT</span>
            </div>
            <div class="flex justify-between items-center">
              <span>{locale === 'it' ? 'Località:' : 'Location:'}</span>
              <span class="text-black dark:text-white font-medium">{locale === 'it' ? 'Milano / Lecco' : 'Milan / Lecco'}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <!-- Button for experiences: white in dark mode, black in light mode, with icon, proper font size and squircle stondatura -->
          <a
            href="/experience"
            data-sveltekit-preload-data="hover"
            data-type="internal"
            class="group interactable box-border flex items-center justify-between w-full px-5 py-3 rounded-[calc(2rem*var(--brm))] corner-squircle bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-300 hover:scale-[1.01] active:scale-95"
          >
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-rounded text-xl">work</span>
              <span>{locale === 'it' ? 'Esperienze Lavorative' : 'Work Experience'}</span>
            </div>
            <span class="material-symbols-rounded text-xl transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span>
          </a>

          <div class="flex gap-2.5">
            <Button
              variant="outline"
              padding="py-2 px-3"
              href="/assets/CV Christian Ferrario.pdf"
              target="_blank"
              class="text-xs sm:text-sm font-medium flex-1 text-center"
            >
              {locale === 'it' ? 'Scarica CV' : 'Download CV'}
            </Button>
            <Button
              variant="outline"
              padding="py-2 px-3"
              href="#contact"
              class="text-xs sm:text-sm font-medium flex-1 text-center"
            >
              {locale === 'it' ? 'Contattami' : 'Get in Touch'}
            </Button>
          </div>
        </div>
      </div>

      <!-- Right: Geometric Vertical Timeline (7 cols) -->
      <div class="lg:col-span-7 relative flex flex-col justify-between">
        <!-- Continuous Spine Line (Mathematically Centered at x=20px mobile, x=22px desktop) -->
        <div class="absolute left-[19px] sm:left-[21px] top-3.5 bottom-3.5 w-[2px] bg-gray-200 dark:bg-white/10"></div>

        <!-- Timeline Items -->
        <div class="space-y-2.5 sm:space-y-3">
          {#each milestones as m}
            <div class="flex items-start gap-3 sm:gap-4 group">
              <!-- Geometric Node Column -->
              <div class="relative z-10 w-10 sm:w-11 flex justify-center shrink-0 pt-1.5 sm:pt-2">
                <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center shadow-sm">
                  <span class="material-symbols-rounded text-sm sm:text-base text-black dark:text-white">
                    {m.icon}
                  </span>
                </div>
              </div>

              <!-- Content Card (Interactive inspect modal on click for university degrees) -->
              <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
              <div
                class="flex-1 min-w-0 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.2rem*var(--brm))] corner-squircle p-3 sm:p-3.5 shadow-sm transition-all duration-200
                  {m.hasDetails
                    ? 'interactable cursor-pointer hover:border-gray-400 dark:hover:border-white/30 hover:shadow-md'
                    : 'hover:border-gray-300 dark:hover:border-white/20'}"
                data-type={m.hasDetails ? 'inspect' : undefined}
                role={m.hasDetails ? 'button' : undefined}
                tabindex={m.hasDetails ? 0 : undefined}
                onclick={() => m.hasDetails && openDegreeModal(m.id as 'magistrale' | 'triennale')}
                onkeydown={(e) => {
                  if (m.hasDetails && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openDegreeModal(m.id as 'magistrale' | 'triennale');
                  }
                }}
              >
                <div class="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                  <span class="font-mono text-xs sm:text-sm font-medium text-gray-500 dark:text-zinc-400 tracking-wider">
                    {m.period}
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border {m.tagColor}">
                    {m.tag}
                  </span>
                </div>

                <h4 class="text-base sm:text-lg font-bold text-black dark:text-white leading-snug">
                  {m.title}
                </h4>

                <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {m.subtitle}
                </p>
              </div>
            </div>
          {/each}
        </div>

        <!-- Prominent Experience Referral Callout Card -->
        <div class="mt-4 sm:mt-5 ml-10 sm:ml-12 p-3.5 sm:p-4 rounded-[calc(1.3rem*var(--brm))] corner-squircle bg-white dark:bg-black border border-gray-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all duration-300 hover:border-gray-400 dark:hover:border-white/30">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center shrink-0">
              <span class="material-symbols-rounded text-xl text-black dark:text-white">work_history</span>
            </div>
            <div class="min-w-0">
              <h4 class="text-xs sm:text-sm font-bold text-black dark:text-white leading-tight">
                {locale === 'it' ? 'Esperienze in Azienda & Progetti Personali' : 'Industry Experience & Personal Setups'}
              </h4>
              <p class="text-[0.75rem] sm:text-xs text-gray-500 dark:text-gray-400 font-light truncate">
                {locale === 'it' ? 'Efebia, Elemaster, ASST Lecco, Home Lab e setup' : 'Efebia, Elemaster, ASST Lecco, Home Lab & setup'}
              </p>
            </div>
          </div>
          <Button
            variant="filled"
            href="/experience"
            data-type="internal"
            padding="py-1.5 px-4"
            class="text-xs font-semibold shrink-0"
          >
            {locale === 'it' ? 'Approfondisci →' : 'Explore Journey →'}
          </Button>
        </div>
      </div>
    </div>
  </div>

  <!-- Academic Career Detail Modal (Inspect & Transcript) -->
  <AcademicDetailModal
    degree={activeDegreeId ? academicDegrees[activeDegreeId] : null}
    onclose={closeDegreeModal}
  />

  <!-- Scroll down arrow to experience -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
    data-type="internal"
    onclick={() => {
      const el = document.getElementById('experience') || document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
  />
</section>
