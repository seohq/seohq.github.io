/*
{
  "file": "you-may-like.js",
  "description": "Component script to render 'You May Like' articles and handle navigation logic.",
  "type": "JavaScript Component",
  "version": "1.1.0"
}
*/

// You May Like Component
function loadYouMayLike() {
  // We add 'data-url' attributes to each item to store the destination link
  const youMayLikeHTML = `
        <div class="you-may-like">
            <h3 style="border: none; padding: 0; margin: 0 0 var(--spacing-lg) 0; font-size: var(--font-size-xl);">YOU MAY LIKE</h3>
            <div class="you-may-like-items">
                <div class="you-may-like-item" data-url="/understanding-eeat">
                    <h4>Understanding E-E-A-T</h4>
                    <p>How Google's Quality Rater Guidelines have evolved and what it means for your content strategy.</p>
                </div>
                <div class="you-may-like-item" data-url="/link-building-2026">
                    <h4>Link Building in 2025</h4>
                    <p>Modern approaches to acquiring high-quality backlinks without violating search guidelines.</p>
                </div>
                <div class="you-may-like-item" data-url="/mobile-first-indexing-2026">
                    <h4>Mobile-First Indexing</h4>
                    <p>Why mobile performance matters more than ever and how to optimize your site accordingly.</p>
                </div>
                <div class="you-may-like-item" data-url="/voice-search-optimization">
                    <h4>Voice Search Optimization</h4>
                    <p>Preparing your content for the rise of voice-activated search and featured snippets.</p>
                </div>
            </div>
        </div>
    `

  const youMayLikeContainer = document.getElementById("you-may-like-container")
  if (youMayLikeContainer) {
    youMayLikeContainer.innerHTML = youMayLikeHTML
  }

  // Updated click interactions to handle navigation
  const items = document.querySelectorAll(".you-may-like-item")
  items.forEach((item) => {
    // Add pointer cursor via JS if not in CSS
    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
      const url = item.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", loadYouMayLike)
