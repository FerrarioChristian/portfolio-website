<script lang="ts">
  import { onMount } from 'svelte';

  let cursor: HTMLElement;
  let effectEnabled = true;

  onMount(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let animationFrameId: number;
    let isVisible = false;

    // Helper to determine the interaction category:
    // 'external': external links, github, linkedin, mailto, reports (displays oblique arrow)
    // 'internal': page navigations, anchor jumps, opening project dialogs (expands without arrow)
    // 'action': toggles (theme, lang), buttons, filters, sliders, controls (expands without arrow)
    // null: standard non-interactive area
    const getInteractionType = (target: Element | null): 'external' | 'internal' | 'action' | null => {
      if (!target) return null;

      const el = target.closest(
        '.interactable, a, button, [role="button"], [role="tab"], [role="switch"], input, select, textarea, summary, [data-type]'
      );
      if (!el || !(el instanceof HTMLElement)) return null;

      // 1. Explicit data-type attribute on the element or an ancestor
      const explicitType = (el.closest('[data-type]') as HTMLElement | null)?.dataset.type;
      if (explicitType === 'external') return 'external';
      if (explicitType === 'internal') return 'internal';
      if (explicitType === 'action') return 'action';

      // 2. Dialog triggers or modals
      if (
        el.closest('[data-modal], [data-dialog], [aria-haspopup="dialog"]') ||
        el.closest('[data-action="modal"], [data-action="dialog"]')
      ) {
        return 'internal';
      }

      // 3. Anchor tags or links
      const anchor = el.tagName === 'A' ? (el as HTMLAnchorElement) : el.closest('a');
      if (anchor) {
        const rawHref = anchor.getAttribute('href') || '';
        const targetAttr = anchor.getAttribute('target');
        const hasDownload = anchor.hasAttribute('download');
        const rel = anchor.getAttribute('rel') || '';

        const isExternalUrl = /^https?:\/\//i.test(rawHref) && !rawHref.startsWith(window.location.origin);
        const isMailOrTel = /^(mailto:|tel:)/i.test(rawHref);
        const isBlank = targetAttr === '_blank';
        const isExternalRel = rel.includes('external');
        const isDownloadDoc = hasDownload || /\.pdf($|\?)/i.test(rawHref);

        if (isExternalUrl || isMailOrTel || isBlank || isExternalRel || isDownloadDoc) {
          return 'external';
        }

        return 'internal';
      }

      // 4. Default for buttons, controls, toggles, inputs, etc.
      return 'action';
    };

    const updateCursorState = (target: Element | null) => {
      const type = getInteractionType(target);
      if (type) {
        cursor.dataset.type = type;
      } else {
        delete cursor.dataset.type;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) {
        cursor.style.opacity = '1';
        cursorX = mouseX;
        cursorY = mouseY;
        isVisible = true;
      }

      updateCursorState(e.target as Element | null);
    };

    const handleScroll = () => {
      if (isVisible) {
        const el = document.elementFromPoint(mouseX, mouseY);
        updateCursorState(el);
      }
    };

    const handleMouseDown = () => cursor.classList.add('expand');
    const handleMouseUp = () => cursor.classList.remove('expand');

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      isVisible = false;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      isVisible = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      if (effectEnabled && isVisible) {
        // Easing interpolation for smooth following
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<div bind:this={cursor} class="cursor hidden sm:flex">
  <span class="material-symbols-rounded cursor-icon select-none pointer-events-none">north_east</span>
</div>

<style>
  .cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 20px #fff, 0 0 40px #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 10000;
    transition: width 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                height 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                opacity 0.25s ease-out;
    opacity: 0;
    left: 50%;
    top: 50%;
    justify-content: center;
    align-items: center;
    will-change: left, top, width, height;
  }

  /* Default mousedown click */
  :global(.cursor.expand) {
    width: 26px !important;
    height: 26px !important;
  }
  
  /* Case 1: External Links (Arrow visible) */
  :global(.cursor[data-type="external"]) {
    width: 38px !important;
    height: 38px !important;
  }
  :global(.cursor[data-type="external"].expand) {
    width: 30px !important;
    height: 30px !important;
  }

  /* Case 2: Internal Links & Dialog open (No arrow, smooth expansion) */
  :global(.cursor[data-type="internal"]) {
    width: 34px !important;
    height: 34px !important;
  }
  :global(.cursor[data-type="internal"].expand) {
    width: 26px !important;
    height: 26px !important;
  }

  /* Case 3: Action Controls, Toggles, Buttons (No arrow, compact tactile expansion) */
  :global(.cursor[data-type="action"]) {
    width: 30px !important;
    height: 30px !important;
  }
  :global(.cursor[data-type="action"].expand) {
    width: 22px !important;
    height: 22px !important;
  }

  /* Legacy fallback if any data-type="link" remains */
  :global(.cursor[data-type="link"]) {
    width: 36px !important;
    height: 36px !important;
  }
  
  /* Oblique Arrow Icon - ONLY shown when hovering external links */
  .cursor-icon {
    color: #000;
    font-size: 1.35rem;
    line-height: 1.35rem;
    font-weight: 500;
    opacity: 0;
    transform: scale(0.3) rotate(-15deg);
    transition: opacity 0.18s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
    user-select: none;
  }
  
  :global(.cursor[data-type="external"] .cursor-icon) {
    opacity: 1 !important;
    transform: scale(1) rotate(0deg) !important;
  }
</style>