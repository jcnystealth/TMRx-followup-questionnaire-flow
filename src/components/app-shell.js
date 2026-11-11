/** Shared presentation shell; pages supply their own content. */
export function createAppShell(page) {
  const shell = document.createElement('div');
  shell.className = 'min-h-screen flex flex-col';
  shell.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        <a class="font-semibold tracking-tight text-slate-900" href="/">TMRx Prototype</a>
      </div>
    </header>
    <main id="main-content" tabindex="-1" class="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-16 lg:px-8"></main>
    <footer class="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-600">
      Frontend prototype · Development foundation
    </footer>
  `;
  shell.querySelector('main').append(page);
  return shell;
}
