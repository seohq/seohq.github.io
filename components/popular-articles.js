// components/popular-articles.js
const popularArticlesData = [
    {
        title: "Core Web Vitals: The Technical Foundation",
        category: "Technical SEO",
        views: "15k+ reads",
        link: "core-web-vitals"
    },
    {
        title: "From 0 to 100k Monthly Organic Traffic",
        category: "Case Studies",
        views: "12k+ reads",
        link: "case-studies/from-0-to-100k-organic-traffic"
    }
];

function renderPopularArticles() {
    const container = document.getElementById('popular-articles-container');
    if (!container) return;

    let html = `
        <section class="popular-articles" style="background: var(--color-black); color: var(--color-white); padding: var(--spacing-lg);">
            <h2 style="color: var(--color-white); border-left-color: var(--color-accent);">POPULAR NOW</h2>
            <div class="popular-grid" style="display: grid; gap: var(--spacing-md);">
    `;

    popularArticlesData.forEach((article, index) => {
        html += `
            <div class="popular-item" style="display: flex; gap: var(--spacing-md); align-items: flex-start;">
                <span style="font-size: var(--font-size-2xl); font-weight: 700; color: var(--color-accent);">0${index + 1}</span>
                <div>
                    <h4 style="margin: 0;"><a href="${article.link}" style="color: var(--color-white); border-bottom: none;">${article.title}</a></h4>
                    <p style="font-size: var(--font-size-xs); color: var(--color-gray-300); text-transform: uppercase;">${article.category} • ${article.views}</p>
                </div>
            </div>
        `;
    });

    html += `</div></section>`;
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderPopularArticles);
