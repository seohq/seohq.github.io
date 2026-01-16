// Categories Component
function loadCategories() {
  const categories = ["Technical SEO", "AI in SEO", "Semantic SEO", "Content Optimization", "Case Studies"]

  const categoriesHTML = categories
    .map(
      (category) => `
        <div class="category-card" data-category="${category}">
            ${category}
        </div>
    `,
    )
    .join("")

  const style = `
        <style>
            .categories-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: var(--spacing-md);
                margin-top: var(--spacing-lg);
            }

            .category-card {
                border: 1px solid var(--color-black);
                padding: var(--spacing-md);
                text-align: center;
                cursor: pointer;
                transition: all 0.2s ease;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 11px;
                letter-spacing: 1px;
                user-select: none;
            }

            .category-card:hover {
                background: var(--color-black);
                color: var(--color-white);
                border-color: var(--color-accent);
            }

            .category-card.active {
                background: var(--color-accent);
                color: var(--color-white);
                border-color: var(--color-accent);
            }
        </style>
    `

  const categoriesContainer = document.getElementById("categories-container")
  categoriesContainer.innerHTML = style + '<div class="categories-grid">' + categoriesHTML + "</div>"

  // Add filter functionality
  const categoryCards = document.querySelectorAll(".category-card")
  const articleCards = document.querySelectorAll(".article-card")

  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category

      categoryCards.forEach((c) => c.classList.remove("active"))
      card.classList.add("active")

      articleCards.forEach((article) => {
        if (category === "All" || article.dataset.category === category) {
          article.style.display = "flex"
        } else {
          article.style.display = "none"
        }
      })
    })
  })
}

document.addEventListener("DOMContentLoaded", loadCategories)
