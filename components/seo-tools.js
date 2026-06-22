/**
 * SEO Tools Suite Component
 * seohq.github.io
 * 
 * Renders 4 interactive SEO tools into #seo-tools-container
 * Tools: Word Counter, Meta Tag Analyzer, Keyword Density, Readability Score
 */

(function () {
  'use strict';

  const TOOLS = [
    {
      id: 'word-counter',
      icon: '📝',
      title: 'Word Counter',
      description: 'Count words, characters, sentences, and reading time instantly.',
      cta: 'Analyze Text',
      href: 'tools/word-counter',
      stat: '500K+',
      statLabel: 'texts analyzed',
    },
    {
      id: 'meta-tag-analyzer',
      icon: '🔍',
      title: 'Meta Tag Analyzer',
      description: 'Audit your title, description, and OG tags for SEO best practices.',
      cta: 'Analyze URL',
      href: 'tools/meta-tag-analyzer',
      stat: '98%',
      statLabel: 'accuracy rate',
    },
    {
      id: 'keyword-density',
      icon: '📊',
      title: 'Keyword Density',
      description: 'Find your top keywords and their density ratios across any content.',
      cta: 'Check Density',
      href: 'tools/keyword-density',
      stat: '50+',
      statLabel: 'metrics tracked',
    },
    {
      id: 'readability-score',
      icon: '⚡',
      title: 'Readability Score',
      description: 'Score your content with Flesch-Kincaid and grade-level readability.',
      cta: 'Score Content',
      href: 'tools/readability-score',
      stat: '12',
      statLabel: 'scoring models',
    },
  ];

  function renderToolCard(tool) {
    return `
      <a href="${tool.href}" class="tool-card" aria-label="Open ${tool.title}" data-tool-id="${tool.id}">
        <div class="tool-icon" aria-hidden="true">${tool.icon}</div>
        <h3>${tool.title}</h3>
        <p>${tool.description}</p>
        <div class="tool-footer">
          <span class="tool-cta">
            ${tool.cta}
            <svg class="tool-cta-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.917 7h8.166M7.583 4L10.5 7l-2.917 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="tool-stat">
            <strong>${tool.stat}</strong> ${tool.statLabel}
          </span>
        </div>
      </a>
    `;
  }

  function renderSection() {
    const container = document.getElementById('seo-tools-container');
    if (!container) return;

    container.innerHTML = `
      <section class="seo-tools-section" aria-labelledby="seo-tools-heading">
        <div class="seo-tools-header">
          <span class="section-label">Free Tools</span>
          <h2 id="seo-tools-heading">SEO Tools Suite</h2>
          <p>Battle-tested tools to audit, analyze, and optimize your content — straight from the browser, no sign-up needed.</p>
        </div>
        <div class="seo-tools-grid" role="list">
          ${TOOLS.map(t => `<div role="listitem">${renderToolCard(t)}</div>`).join('')}
        </div>
      </section>
    `;

    // Lightweight stagger-in animation
    const cards = container.querySelectorAll('.tool-card');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              card.style.opacity = '0';
              card.style.transform = 'translateY(16px)';
              card.style.transition = `opacity 0.35s ease ${i * 70}ms, transform 0.35s ease ${i * 70}ms`;
              requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            });
            io.disconnect();
          }
        });
      }, { threshold: 0.15 });

      io.observe(container);
    }
  }

  // Mount when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSection);
  } else {
    renderSection();
  }
})();
