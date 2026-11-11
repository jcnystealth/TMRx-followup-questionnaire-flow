/** Use textContent so dynamic copy is never interpreted as HTML. */
export function createInfoCard({ title, description }) {
  const card = document.createElement('article');
  card.className = 'rounded-xl border border-slate-200 bg-white p-6';

  const heading = document.createElement('h2');
  heading.className = 'text-lg font-semibold text-slate-900';
  heading.textContent = title;

  const body = document.createElement('p');
  body.className = 'mt-3 leading-relaxed text-slate-600';
  body.textContent = description;

  card.append(heading, body);
  return card;
}
