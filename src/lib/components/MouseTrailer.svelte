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

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isVisible) {
        cursor.style.opacity = '1';
        cursorX = mouseX;
        cursorY = mouseY;
        isVisible = true;
      }

      const interactable = (e.target as Element).closest('.interactable');
      const interacting = interactable !== null;

      if (interactable instanceof HTMLElement && interacting) {
        cursor.dataset.type = interactable.dataset.type || 'link';
      } else {
        delete cursor.dataset.type;
      }
    };

    const handleMouseDown = () => cursor.classList.add('expand');
    const handleMouseUp = () => cursor.classList.remove('expand');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

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
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<div bind:this={cursor} class="cursor hidden sm:flex">
  <span class="material-symbols-rounded cursor-icon">north_east</span>
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
    transition: width 0.2s, height 0.2s, opacity 0.3s;
    opacity: 0;
    left: 50%;
    top: 50%;
    justify-content: center;
    align-items: center;
  }

  :global(.cursor.expand) {
    width: 30px !important;
    height: 30px !important;
  }
  
  :global(.cursor[data-type]) {
    width: 35px !important;
    height: 35px !important;
  }
  
  :global(.cursor[data-type].expand) {
    width: 30px !important;
    height: 30px !important;
  }
  
  .cursor-icon {
    color: #000;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 400;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  :global(.cursor[data-type] .cursor-icon) {
    opacity: 1 !important;
  }
</style>
