/** Framework-independent page data. Keep business rules out of DOM components. */
export function getFoundationContent() {
  return {
    title: 'Ready for the next step.',
    description: 'A working frontend foundation for the TMRx follow-up questionnaire. Product screens and the Figma design will be added in a future iteration.',
    cards: [
      { title: 'Reusable structure', description: 'Shared components and page modules keep the interface easy to extend.' },
      { title: 'Responsive layout', description: 'A flexible page shell supports both mobile and desktop screens.' },
      { title: 'Integration ready', description: 'Application logic stays separate from presentation. No backend is connected.' },
    ],
  };
}
