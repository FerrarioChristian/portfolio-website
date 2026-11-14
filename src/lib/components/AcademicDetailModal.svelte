<script lang="ts">
  import { onMount } from 'svelte';
  import { getLocale, t } from '$lib/i18n/locale.svelte';
  import type { DegreeDetails } from '$lib/data/academic';

  interface Props {
    degree: DegreeDetails | null;
    onclose: () => void;
  }

  let { degree, onclose }: Props = $props();

  let locale = $derived(getLocale());

  // Helper to parse grades for descending sort (30L -> 31, 30 -> 30, ...)
  function getGradeWeight(grade: string): number {
    if (grade.includes('30L') || grade.includes('30 e Lode') || grade.includes('30 L')) return 31;
    const num = parseInt(grade, 10);
    return isNaN(num) ? 0 : num;
  }

  // Sorted exams in descending order of grade
  let sortedExams = $derived(
    degree
      ? [...degree.exams].sort((a, b) => {
          const diff = getGradeWeight(b.grade) - getGradeWeight(a.grade);
          if (diff !== 0) return diff;
          if (b.cfu !== a.cfu) return b.cfu - a.cfu;
          return (b.date || '').localeCompare(a.date || '');
        })
      : []
  );

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onclose();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

{#if degree}
  <!-- Backdrop -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 transition-all duration-200 bg-black/70 backdrop-blur-md pointer-events-auto"
    onclick={(e) => {
      if (e.target === e.currentTarget) onclose();
    }}
  >
    <!-- Modal Dialog Window (Pure black in dark mode, matching site palette) -->
    <div
      class="relative w-full max-w-2xl bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle shadow-2xl overflow-hidden flex flex-col h-[88vh] sm:h-[84vh] max-h-[730px] text-left transition-all duration-200 pointer-events-auto"
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      onclick={(e) => e.stopPropagation()}
    >
      <!-- Modal Header (Pinned at top, no divider line) -->
      <div class="px-5 sm:px-6 pt-5 sm:pt-6 pb-2 flex items-start justify-between gap-4 shrink-0">
        <div class="flex items-center gap-3.5 min-w-0">
          <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 shadow-sm">
            <span class="material-symbols-rounded text-lg sm:text-xl">
              {degree.id === 'magistrale' ? 'workspace_premium' : 'school'}
            </span>
          </div>

          <div class="min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {t(degree.status)}
              </span>
              <span class="text-xs font-medium text-gray-500 dark:text-zinc-400">
                {degree.period}
              </span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight leading-snug truncate">
              {t(degree.title)}
            </h3>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 truncate">
              {degree.subtitle}
            </p>
          </div>
        </div>

        <!-- Close Button -->
        <button
          class="group pointer-events-auto interactable shrink-0 w-10 h-10 rounded-full corner-squircle flex items-center justify-center bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg text-black dark:text-white transition-all duration-300 hover:scale-110 active:scale-95"
          data-type="action"
          onclick={onclose}
          aria-label={locale === 'it' ? 'Chiudi finestra' : 'Close modal'}
        >
          <span class="material-symbols-rounded block pointer-events-none text-[1.4rem] transition-transform duration-300 ease-in-out group-hover:rotate-90">close</span>
        </button>
      </div>

      <!-- Stats Overview (Minimal typography, pure background, no cards) -->
      <div class="flex items-baseline gap-8 px-5 sm:px-6 pt-1 pb-3 shrink-0">
        <div>
          <span class="text-xs text-gray-500 dark:text-zinc-400 font-medium">
            {locale === 'it' ? 'Voto Finale' : 'Final Grade'}
          </span>
          <p class="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight mt-0.5">
            {degree.finalGrade}
          </p>
        </div>
        <div>
          <span class="text-xs text-gray-500 dark:text-zinc-400 font-medium">
            {locale === 'it' ? 'Media Ponderata' : 'GPA'}
          </span>
          <p class="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight mt-0.5">
            {degree.gpa}
          </p>
        </div>
      </div>

      <!-- Thesis Section (Pure white in light, pure black in dark, generous padding, cohesive buttons) -->
      {#if degree.thesis}
        <div class="mx-5 sm:mx-6 mb-3 p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black shrink-0">
          <div class="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
            <span class="material-symbols-rounded text-base">history_edu</span>
            <span>{locale === 'it' ? 'Tesi di Laurea' : 'Thesis Project'}</span>
          </div>

          <h4 class="text-sm sm:text-base font-bold text-black dark:text-white leading-snug">
            {t(degree.thesis.title)}
          </h4>

          <p class="text-xs text-gray-500 dark:text-zinc-400 mt-1">
            {locale === 'it' ? 'Relatori:' : 'Supervisors:'} {degree.thesis.supervisor}
          </p>

          <div class="mt-3.5 flex flex-wrap items-center gap-2.5">
            {#if degree.thesis.projectSlug}
              <a
                href={`/projects?scrollTo=${degree.thesis.projectSlug}`}
                data-type="internal"
                onclick={onclose}
                class="interactable inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-85 transition-all shadow-sm"
              >
                <span class="material-symbols-rounded text-base">code</span>
                <span>{locale === 'it' ? 'Progetto Omnideps' : 'Omnideps Project'}</span>
                <span class="material-symbols-rounded text-base">arrow_forward</span>
              </a>
            {/if}

            {#if degree.thesis.pdfUrl}
              <a
                href={degree.thesis.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-type="external"
                class="interactable inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full border border-gray-300 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              >
                <span class="material-symbols-rounded text-base">description</span>
                <span>{locale === 'it' ? 'Leggi la Tesi (PDF)' : 'Read Thesis (PDF)'}</span>
                <span class="material-symbols-rounded text-sm opacity-60">open_in_new</span>
              </a>
            {/if}
          </div>
        </div>
      {/if}

      <!-- Exams Section (The ONLY scrollable container!) -->
      <div class="flex-1 min-h-0 flex flex-col px-5 sm:px-6 pb-5 pt-1">
        <!-- Section Title (No divider line) -->
        <div class="flex items-center justify-between pb-2 px-1 shrink-0">
          <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400">
            {locale === 'it' ? 'Esami Sostenuti' : 'Passed Exams'}
          </span>
          <span class="text-xs text-gray-400 dark:text-zinc-500 font-medium">
            {sortedExams.length} {locale === 'it' ? 'insegnamenti' : 'courses'}
          </span>
        </div>

        <!-- Pure single scrollable area for exams -->
        <div class="flex-1 min-h-0 overflow-y-auto space-y-1 pr-1.5 custom-scrollbar">
          {#each sortedExams as exam}
            <div class="py-2.5 px-3 rounded-xl flex items-center justify-between gap-3 hover:bg-black/[0.04] dark:hover:bg-white/[0.05] transition-colors">
              <div class="min-w-0 flex-1">
                <h5 class="text-sm font-medium text-black dark:text-white truncate">
                  {t(exam.name)}
                </h5>
                {#if exam.area || exam.date}
                  <div class="flex items-center gap-1.5 mt-0.5 text-xs text-gray-500 dark:text-zinc-400">
                    {#if exam.area}
                      <span class="truncate">{t(exam.area)}</span>
                    {/if}
                    {#if exam.area && exam.date}
                      <span>•</span>
                    {/if}
                    {#if exam.date}
                      <span class="shrink-0">{exam.date}</span>
                    {/if}
                  </div>
                {/if}
              </div>

              <div class="shrink-0">
                <span class="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full inline-block min-w-[36px] text-center
                  {exam.grade === '30L' || exam.grade === '30 e Lode'
                    ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    : exam.grade === '30'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'text-black dark:text-white border border-gray-200 dark:border-white/10'}">
                  {exam.grade}
                </span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Refined, unobtrusive scrollbar for the exams container */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(150, 150, 150, 0.25) transparent;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(150, 150, 150, 0.2);
    border-radius: 9999px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(150, 150, 150, 0.4);
  }
</style>
