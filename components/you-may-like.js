/*
{
  "file": "you-may-like.js",
  "description": "Component script to render 'You May Like' articles and handle navigation logic.",
  "type": "JavaScript Component",
  "version": "1.2.0"
}
*/

// You May Like Component
function loadYouMayLike() {
  const youMayLikeHTML = `
        <div class="you-may-like">
            <div class="section-label">Recommended</div>
            <h2>You May Like</h2>
            <div class="you-may-like-items">
                <div class="you-may-like-item" data-url="/understanding-eeat">
                    <h4>Understanding E-E-A-T</h4>
                    <p>How Google's Quality Rater Guidelines have evolved and what it means for your content strategy.</p>
                </div>
                <div class="you-may-like-item" data-url="/link-building-2026">
                    <h4>Link Building in 2026</h4>
                    <p>Modern approaches to acquiring high-quality backlinks without violating search guidelines.</p>
                </div>
                <div class="you-may-like-item" data-url="/mobile-first-indexing-2026">
                    <h4>Mobile-First Indexing</h4>
                    <p>Why mobile performance matters more than ever and how to optimize your site accordingly.</p>
                </div>
                <div class="you-may-like-item" data-url="/traditional-crawlers-vs-llms">
                    <h4>Traditional Crawlers vs LLMs</h4>
                    <p>A comprehensive comparison for SEO professionals.</p>
                </div>
            </div>
        </div>
    `

  const youMayLikeContainer = document.getElementById("you-may-like-container")
  if (youMayLikeContainer) {
    youMayLikeContainer.innerHTML = youMayLikeHTML
  }

  // Click interactions for navigation
  const items = document.querySelectorAll(".you-may-like-item")
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const url = item.getAttribute("data-url")
      if (url) {
        window.location.href = url
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", loadYouMayLike)
