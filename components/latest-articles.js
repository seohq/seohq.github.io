// components/latest-articles.js
const latestArticlesData = [
    {
        title: "Advanced Log File Analysis for SEO",
        category: "Technical SEO",
        readTime: "12 min read",
        link: "/advanced-log-file-analysis",
        date: "2026-01-17"
    },
    {
        title: "Optimizing for AI Agents and Autonomous Search in 2026",
        category: "AI in SEO",
        readTime: "11 min read",
        link: "/ai-agents-autonomous-search",
        date: "2026-01-20"
    }
];

function renderLatestArticles() {
    const container = document.getElementById('latest-articles-container');
    if (!container) return;

    let html = `
        <section class="latest-articles">
            <h2>LATEST INSIGHTS</h2>
            <div class="articles-list">
    `;

    latestArticlesData.forEach(article => {
        html += `
            <div class="latest-article-item" style="border-bottom: 1px solid var(--color-black); padding: var(--spacing-md) 0;">
                <p class="article-meta" style="margin-bottom: 4px;">${article.date} // ${article.category}</p>
                <h3 style="margin: 0 0 var(--spacing-sm) 0;"><a href="${article.link}">${article.title}</a></h3>
                <p class="read-more">${article.readTime} →</p>
            </div>
        `;
    });

    html += `</div></section>`;
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderLatestArticles);
