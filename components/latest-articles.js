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
            <div class="section-label">Fresh Off the Press</div>
            <h2 style="font-size: var(--text-2xl); color: var(--text-primary); margin: 0 0 var(--space-6) 0; border: none; padding: 0;">Latest Insights</h2>
            <div class="articles-list">
    `;

    latestArticlesData.forEach(article => {
        html += `
            <div class="latest-article-item" style="border-bottom: 1px solid var(--slate-100); padding: var(--space-5) 0; transition: var(--transition);">
                <p class="article-meta">${article.date} &nbsp;·&nbsp; ${article.category}</p>
                <h3 style="margin: 0 0 var(--space-3) 0; font-size: var(--text-lg); font-weight: 600; letter-spacing: -0.01em; line-height: 1.3;">
                    <a href="${article.link}" style="color: var(--text-primary); text-decoration: none; transition: var(--transition);"
                       onmouseover="this.style.color='var(--teal-500)'"
                       onmouseout="this.style.color='var(--text-primary)'">${article.title}</a>
                </h3>
                <a href="${article.link}" class="read-more">${article.readTime} →</a>
            </div>
        `;
    });

    html += `</div></section>`;
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderLatestArticles);
