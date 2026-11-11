import { createInfoCard } from '../components/info-card.js';
import { getFoundationContent } from '../logic/foundation.js';

export function createHomePage() {
  const content = getFoundationContent();
  const page = document.createElement('section');
  page.setAttribute('aria-labelledby', 'page-title');
  page.innerHTML = `
    <p class="text-sm font-semibold uppercase tracking-widest text-slate-600">Project foundation</p>
    <h1 id="page-title" class="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl"></h1>
    <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"></p>
    <div class="mt-10 grid gap-4 md:grid-cols-3"></div>
  `;
  page.querySelector('h1').textContent = content.title;
  page.querySelector('h1 + p').textContent = content.description;
  page.querySelector('.grid').append(...content.cards.map(createInfoCard));
  return page;
}
