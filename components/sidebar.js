// Sidebar Component
function loadSidebar() {
  const sidebarHTML = `
        <div class="sidebar-content">
            <div class="sidebar-title">NAVIGATION</div>
            <a href="/#latest-articles-container" class="sidebar-item">Latest Articles</a>
            <a href="#" class="sidebar-item">Popular</a>
            <a href="#" class="sidebar-item">Archive</a>
            <a href="#" class="sidebar-item">Resources</a>
            
            <div class="sidebar-title" style="margin-top: var(--spacing-lg);">TAGS</div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span class="tag">#Core-Web-Vitals</span>
                <span class="tag">#Schema-Markup</span>
                <span class="tag">#NLP</span>
                <span class="tag">#Rankings</span>
                <span class="tag">#Keywords</span>
                <span class="tag">#Backlinks</span>
            </div>
        </div>
    `

  const style = `
        <style>
            .sidebar-content {
                font-size: var(--font-size-sm);
            }

            .tag {
                display: inline-block;
                border: 1px solid var(--color-black);
                padding: 4px 8px;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .tag:hover {
                background: var(--color-accent);
                color: var(--color-white);
                border-color: var(--color-accent);
            }

            @media (max-width: 768px) {
                aside {
                    border-bottom: 1px solid var(--color-black);
                    border-left: none;
                    margin-bottom: var(--spacing-lg);
                }
            }
        </style>
    `

  const sidebarContainer = document.getElementById("sidebar-container")
  sidebarContainer.innerHTML = style + sidebarHTML
}

document.addEventListener("DOMContentLoaded", loadSidebar)
