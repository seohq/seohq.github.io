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

  const categoriesContainer = document.getElementById("categories-container")
  categoriesContainer.innerHTML = '<div class="categories-grid">' + categoriesHTML + "</div>"

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
