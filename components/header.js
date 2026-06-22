/**
 * @schema
 * {
 * "fileName": "header.js",
 * "description": "Header component — Navy Intelligence Platform design system",
 * "components": ["loadHeader", "createMobileNavSection"],
 * "dependencies": ["styles.css"]
 * }
 */

// Header Component
function loadHeader() {
  const headerHTML = `
        <nav class="header-nav">
            <div class="header-container">
                <div class="logo-section">
                    <a href="/" class="logo">
                        <span class="logo-text">SEO</span>
                        <span class="logo-accent">HQ</span>
                    </a>
                </div>
                <ul class="nav-list">
                    <li><a href="/" class="nav-link active">Home</a></li>
                    <li><a href="/#latest-articles-container" class="nav-link">Articles</a></li>
                    <li class="dropdown">
                        <a href="/services" class="nav-link">Services</a>
                    </li>
                    <li class="dropdown">
                        <a href="/seo-tools" class="nav-link dropdown-toggle">SEO Tools <span class="dropdown-arrow">▼</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/meta-tags-generator" class="dropdown-item">Meta Tags Generator</a></li>
                            <li><a href="/keyword-density-analyzer" class="dropdown-item">Keyword Density Analyzer</a></li>
                            <li><a href="/xml-sitemap-generator" class="dropdown-item">XML Sitemap Generator</a></li>
                            <li><a href="/robots-txt-generator" class="dropdown-item">Robots.txt Generator</a></li>
                            <li><a href="/hreflang-tag-generator" class="dropdown-item">Hreflang Tag Generator</a></li>
                            <li><a href="/structured-data-validator" class="dropdown-item">Structured Data Validator</a></li>                            
                        </ul>
                    </li> 
                    <li><a href="/tech-news" class="nav-link">Tech News</a></li>
                    <li><a href="/about" class="nav-link">About</a></li>                    
                </ul>
                <div class="header-actions">
                    <a href="/contact" class="audit-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        <span>Free Audit</span>
                    </a>
                    <div class="header-toggle">
                        <button class="menu-toggle" id="menuToggle">MENU</button>
                    </div>
                </div>
            </div>
        </nav>
    `

  const style = `
        <style>
            .header-nav {
                border-bottom: 1px solid var(--slate-100);
                background: var(--surface-card);
                position: sticky;
                top: 0;
                z-index: 100;
                box-shadow: var(--shadow-sm);
            }

            .header-container {
                max-width: 1360px;
                margin: 0 auto;
                padding: var(--space-4) var(--space-8);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-actions {
                display: flex;
                align-items: center;
                gap: var(--space-4);
            }

            .audit-btn {
                background-color: #25D366;
                color: #ffffff !important;
                padding: var(--space-3) var(--space-6);
                border-radius: 100px;
                text-decoration: none;
                font-size: var(--text-sm);
                font-weight: 600;
                font-family: var(--font-body);
                display: flex;
                align-items: center;
                gap: var(--space-2);
                transition: var(--transition);
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
                border: none;
                white-space: nowrap;
                letter-spacing: 0.02em;
            }

            .audit-btn:hover {
                background-color: #1ebe57;
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
            }

            .logo-section {
                display: flex;
                align-items: center;
            }

            .logo {
                font-family: var(--font-display);
                font-size: var(--text-2xl);
                font-weight: 700;
                letter-spacing: -0.02em;
                display: flex;
                gap: var(--space-1);
                text-decoration: none;
            }

            .logo-text {
                color: var(--text-primary);
            }

            .logo-accent {
                color: var(--teal-500);
            }

            .nav-list {
                display: flex;
                list-style: none;
                gap: var(--space-8);
                align-items: center;
                margin: 0;
                padding: 0;
            }

            .nav-link {
                font-family: var(--font-body);
                font-size: var(--text-sm);
                font-weight: 500;
                color: var(--text-secondary);
                text-decoration: none;
                padding: var(--space-2) 0;
                position: relative;
                transition: var(--transition);
                letter-spacing: 0.01em;
            }

            .nav-link::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--teal-500);
                border-radius: 2px;
                transition: width 0.25s ease;
            }

            .nav-link:hover,
            .nav-link.active {
                color: var(--text-primary);
            }

            .nav-link:hover::after,
            .nav-link.active::after {
                width: 100%;
            }

            /* Dropdown Styles */
            .dropdown {
                position: relative;
            }

            .dropdown-toggle {
                display: flex;
                align-items: center;
                gap: var(--space-1);
            }

            .dropdown-arrow {
                font-size: 9px;
                transition: transform 0.25s ease;
                color: var(--text-muted);
            }

            .dropdown:hover .dropdown-arrow {
                transform: rotate(180deg);
            }

            .dropdown-menu {
                position: absolute;
                top: calc(100% + var(--space-3));
                left: 0;
                min-width: 240px;
                background: var(--surface-card);
                border: 1px solid var(--slate-100);
                border-top: 2px solid var(--teal-500);
                border-radius: 0 0 var(--radius-md) var(--radius-md);
                padding: var(--space-2) 0;
                margin: 0;
                list-style: none;
                opacity: 0;
                visibility: hidden;
                transform: translateY(8px);
                transition: var(--transition);
                box-shadow: var(--shadow-md);
                z-index: 1000;
            }

            .dropdown:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .dropdown-item {
                display: block;
                padding: var(--space-3) var(--space-5);
                font-size: var(--text-sm);
                font-family: var(--font-body);
                font-weight: 500;
                color: var(--text-secondary);
                text-decoration: none;
                transition: var(--transition);
                white-space: nowrap;
                letter-spacing: 0;
            }

            .dropdown-item:hover {
                background: var(--teal-glow);
                color: var(--teal-500);
                padding-left: var(--space-6);
            }

            .menu-toggle {
                display: none;
                background: none;
                border: 1.5px solid var(--slate-200);
                padding: var(--space-2) var(--space-4);
                font-size: var(--text-xs);
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                cursor: pointer;
                font-family: var(--font-body);
                transition: var(--transition);
                color: var(--text-secondary);
                border-radius: var(--radius-sm);
            }

            .menu-toggle:hover {
                background: var(--navy-800);
                color: var(--text-on-dark);
                border-color: var(--navy-800);
            }

            /* Mobile Styles */
            @media (max-width: 992px) {
                .header-container {
                    padding: var(--space-4) var(--space-5);
                }

                .nav-list {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    flex-direction: column;
                    background: var(--surface-card);
                    border-bottom: 1px solid var(--slate-100);
                    padding: var(--space-4) var(--space-5);
                    gap: var(--space-3);
                    align-items: flex-start;
                    box-shadow: var(--shadow-md);
                }

                .nav-list.active {
                    display: flex;
                }

                .dropdown {
                    width: 100%;
                }

                .dropdown-menu {
                    position: static;
                    opacity: 1;
                    visibility: visible;
                    transform: none;
                    border: none;
                    border-left: 2px solid var(--teal-500);
                    margin: var(--space-2) 0 var(--space-2) var(--space-5);
                    padding: var(--space-1) 0;
                    box-shadow: none;
                    min-width: auto;
                    display: none;
                    border-radius: 0;
                    border-top: none;
                }

                .dropdown.active .dropdown-menu {
                    display: block;
                }

                .dropdown-toggle {
                    width: 100%;
                    justify-content: space-between;
                }

                .dropdown-item {
                    white-space: normal;
                    padding: var(--space-2) var(--space-4);
                    font-size: var(--text-xs);
                }

                .menu-toggle {
                    display: block;
                }

                .audit-btn {
                    padding: var(--space-2) var(--space-4);
                    font-size: var(--text-xs);
                }

                .audit-btn svg {
                    width: 16px;
                    height: 16px;
                }

                .nav-link {
                    width: 100%;
                }
            }
        </style>
    `

  const headerContainer = document.getElementById("header-container")
  if (headerContainer) {
    headerContainer.innerHTML = style + headerHTML

    // Initialize mobile dropdown functionality
    initializeMobileDropdowns()
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const navList = document.querySelector(".nav-list")

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active")
    })
  }
}

function initializeMobileDropdowns() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle')

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault()
        const dropdown = toggle.closest('.dropdown')
        dropdown.classList.toggle('active')
      }
    })
  })

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown.active').forEach(dropdown => {
          dropdown.classList.remove('active')
        })
      }
    }
  })
}

function createMobileNavSection() {
  const mobileNavHTML = `
    <div class="mobile-nav-wrapper" style="display: flex; gap: var(--space-3); flex-wrap: wrap;">
      <a href="/" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--space-3) var(--space-4); border: 1.5px solid var(--slate-200); border-radius: var(--radius-sm); text-align: center; font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-secondary); transition: var(--transition); font-family: var(--font-body);">Home</a>
      <a href="/#latest-articles-container" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--space-3) var(--space-4); border: 1.5px solid var(--slate-200); border-radius: var(--radius-sm); text-align: center; font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-secondary); transition: var(--transition); font-family: var(--font-body);">Articles</a>
      <a href="/services" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--space-3) var(--space-4); border: 1.5px solid var(--slate-200); border-radius: var(--radius-sm); text-align: center; font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-secondary); transition: var(--transition); font-family: var(--font-body);">Services</a>
      <a href="/tools" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--space-3) var(--space-4); border: 1.5px solid var(--slate-200); border-radius: var(--radius-sm); text-align: center; font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-secondary); transition: var(--transition); font-family: var(--font-body);">Tools</a>
      <a href="/about" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--space-3) var(--space-4); border: 1.5px solid var(--slate-200); border-radius: var(--radius-sm); text-align: center; font-size: var(--text-xs); font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-secondary); transition: var(--transition); font-family: var(--font-body);">About</a>
    </div>
  `
  const mobileNavSection = document.getElementById("mobile-nav-section")
  if (mobileNavSection) {
    mobileNavSection.innerHTML = mobileNavHTML

    const mobileLinks = document.querySelectorAll(".nav-link-mobile")
    mobileLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        this.style.background = "var(--navy-800)"
        this.style.color = "var(--teal-500)"
        this.style.borderColor = "var(--navy-800)"
      })
      link.addEventListener("mouseout", function () {
        this.style.background = ""
        this.style.color = "var(--text-secondary)"
        this.style.borderColor = "var(--slate-200)"
      })
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader()
  createMobileNavSection()

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active')
      })
    }
  })
})
