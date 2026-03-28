// components/latest-articles.js
const latestArticlesData = [
    {
        title: "Case Study: Mobile Viewer Ranked in Google in 7 Days",
        category: "AI In SEO",
        readTime: "12 min read",
        link: "/seo-case-study-mobile-viewer-2026",
        date: "2026-03-28"
    },
    {
        title: "AI Overviews Optimization 2026",
        category: "Content Optimization",
        readTime: "14 min read",
        link: "/ai-overviews-optimization-2026",
        date: "2026-03-26"
    }, 
    {
        title: "From SERP's to AERP's",
        category: "Ai in SEO",
        readTime: "16 min read",
        link: "/from-serps-to-aerps",
        date: "2026-03-07"
    },
    {
        title: "Human Content vs AI Content",
        category: "Ai in SEO",
        readTime: "18 min read",
        link: "/human-content-vs-ai-content",
        date: "2026-03-06"
    },
    {
        title: "Introducing Free SEO Tools",
        category: "Technical SEO",
        readTime: "10 min read",
        link: "/essential-seo-tools",
        date: "2026-03-04"
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
