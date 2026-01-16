// You May Like Component
function loadYouMayLike() {
  const youMayLikeHTML = `
        <!-- Fixed heading hierarchy - changed h2 to h3 (h2 is already used in featured articles) -->
        <div class="you-may-like">
            <h3 style="border: none; padding: 0; margin: 0 0 var(--spacing-lg) 0; font-size: var(--font-size-xl);">YOU MAY LIKE</h3>
            <div class="you-may-like-items">
                <div class="you-may-like-item">
                    <h4>Understanding E-E-A-T</h4>
                    <p>How Google's Quality Rater Guidelines have evolved and what it means for your content strategy.</p>
                </div>
                <div class="you-may-like-item">
                    <h4>Link Building in 2024</h4>
                    <p>Modern approaches to acquiring high-quality backlinks without violating search guidelines.</p>
                </div>
                <div class="you-may-like-item">
                    <h4>Mobile-First Indexing</h4>
                    <p>Why mobile performance matters more than ever and how to optimize your site accordingly.</p>
                </div>
                <div class="you-may-like-item">
                    <h4>Voice Search Optimization</h4>
                    <p>Preparing your content for the rise of voice-activated search and featured snippets.</p>
                </div>
            </div>
        </div>
    `

  const youMayLikeContainer = document.getElementById("you-may-like-container")
  youMayLikeContainer.innerHTML = youMayLikeHTML

  // Add click interactions
  const items = document.querySelectorAll(".you-may-like-item")
  items.forEach((item) => {
    item.addEventListener("click", () => {
      alert("Article: " + item.querySelector("h4").textContent)
    })
  })
}

document.addEventListener("DOMContentLoaded", loadYouMayLike)
