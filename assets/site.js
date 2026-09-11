/* Optional decoration only. All copy, example answers and navigation are static HTML. */
(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const progress = document.querySelector('.progress');
  const count = document.querySelector('[data-leaf-count]');
  let scheduled = false;
  const updateProgress = () => {
    scheduled = false;
    if (!progress || motion.matches) return;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${available > 0 ? Math.min(100, Math.max(0, window.scrollY / available * 100)) : 0}%`;
  };
  const onScroll = () => {
    if (motion.matches || scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateProgress);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  let observer;
  const configure = () => {
    observer?.disconnect();
    if (progress) progress.style.width = '0%';
    if (count) count.textContent = '1,459';
    if (motion.matches) return;
    updateProgress();
    if (!count || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) count.textContent = entry.target.dataset.leafStep;
      }
    }, { rootMargin: '-30% 0px -35% 0px' });
    document.querySelectorAll('[data-leaf-step]').forEach(step => observer.observe(step));
  };
  motion.addEventListener('change', configure);
  configure();
})();
