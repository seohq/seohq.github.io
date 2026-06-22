// components/popular-articles.js
const popularArticlesData = [
    {
        title: "Anthropic Launches Claude Computer Use Agent",
        category: "Tech News",
        views: "100+ reads",
        link: "anthropic-claude-computer-use-agent"
    },
    {
        title: "AI Agents and Autonomous Search",
        category: "Ai in SEO",
        views: "210+ reads",
        link: "ai-agents-autonomous-search"
    },
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
        link: "/from-0-to-100k-organic-traffic"
    }
];

function renderPopularArticles() {
    const container = document.getElementById('popular-articles-container');
    if (!container) return;

    let html = `
        <section class="popular-articles" style="background: var(--navy-900); border-radius: var(--radius-md); padding: var(--space-6); box-shadow: var(--shadow-sm);">
            <p class="sidebar-title">Popular Now</p>
            <div style="display: grid; gap: var(--space-5);">
    `;

    popularArticlesData.forEach((article, index) => {
        html += `
            <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                <span style="font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 700; color: var(--teal-500); line-height: 1; flex-shrink: 0; letter-spacing: -0.03em;">0${index + 1}</span>
                <div>
                    <h4 style="margin: 0 0 var(--space-1) 0; font-size: var(--text-sm); font-weight: 600; line-height: 1.35; letter-spacing: -0.01em;">
                        <a href="${article.link}" style="color: var(--text-on-dark); text-decoration: none; transition: var(--transition);"
                           onmouseover="this.style.color='var(--teal-400)'"
                           onmouseout="this.style.color='var(--text-on-dark)'">${article.title}</a>
                    </h4>
                    <p style="font-size: var(--text-xs); color: var(--text-on-dark-muted); text-transform: uppercase; letter-spacing: 0.06em; margin: 0; font-weight: 500;">${article.category} · ${article.views}</p>
                </div>
            </div>
        `;
    });

    html += `</div></section>`;
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderPopularArticles);
