'use client';

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.classList.contains('dark') ? 'light' : 'dark';

    root.classList.toggle('dark', nextTheme === 'dark');
    root.style.colorScheme = nextTheme;
    localStorage.setItem('sparkle-theme', nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle relative flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-[0_10px_24px_rgba(25,48,78,0.1)] transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#1f4f88] dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-slate-700 sm:h-11 sm:w-11"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <svg className="h-[18px] w-[18px] dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
      </svg>
      <svg className="hidden h-5 w-5 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
