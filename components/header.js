/**
 * @schema
 * {
 * "fileName": "header.js",
 * "description": "Header component with optimized WhatsApp-style Free Audit button sizing and colors",
 * "components": ["loadHeader", "createMobileNavSection"],
 * "dependencies": ["var(--color-black)", "var(--color-white)", "var(--color-accent)"]
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
                    <li><a href="/services" class="nav-link active">Services</a></li>
                    <li><a href="/contact" class="nav-link">Contact</a></li>
                    <li><a href="/about" class="nav-link">About</a></li>
                </ul>
                <div class="header-actions">
                    <a href="https://wa.me/923402324446?text=I%20would%20like%20a%20Free%20Audit" class="audit-btn">
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
                border-bottom: 1px solid var(--color-black);
                background: var(--color-white);
                position: sticky;
                top: 0;
                z-index: 100;
            }

            .header-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: var(--spacing-md) var(--spacing-lg);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-actions {
                display: flex;
                align-items: center;
                gap: var(--spacing-md);
            }

            .audit-btn {
                background-color: #25D366;
                color: #ffffff !important;
                padding: 12px 24px;
                border-radius: 50px;
                text-decoration: none;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
                border: none;
                white-space: nowrap;
            }

            .audit-btn:hover {
                background-color: #1ebe57;
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(37, 211, 102, 0.4);
            }

            .logo-section {
                display: flex;
                align-items: center;
            }

            .logo {
                font-size: var(--font-size-2xl);
                font-weight: 700;
                letter-spacing: 2px;
                display: flex;
                gap: 4px;
            }

            .logo-text {
                border-bottom: 3px solid var(--color-black);
                padding-bottom: 2px;
            }

            .logo-accent {
                color: var(--color-accent);
                border-bottom: 3px solid var(--color-accent);
                padding-bottom: 2px;
            }

            .nav-list {
                display: flex;
                list-style: none;
                gap: var(--spacing-lg);
            }

            .nav-link {
                font-size: var(--font-size-sm);
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
                border: none;
                transition: all 0.2s ease;
                position: relative;
                color: var(--color-black);
            }

            .nav-link::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--color-accent);
                transition: width 0.3s ease;
            }

            .nav-link:hover::after,
            .nav-link.active::after {
                width: 100%;
            }

            .menu-toggle {
                display: none;
                background: none;
                border: 1px solid var(--color-black);
                padding: 8px 16px;
                font-size: var(--font-size-xs);
                text-transform: uppercase;
                letter-spacing: 1px;
                cursor: pointer;
                font-family: var(--font-sans);
                transition: all 0.2s ease;
                color: var(--color-black);
            }

            .menu-toggle:hover {
                background: var(--color-black);
                color: var(--color-white);
            }

            @media (max-width: 992px) {
                .nav-list {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    flex-direction: column;
                    background: var(--color-white);
                    border-bottom: 1px solid var(--color-black);
                    padding: var(--spacing-md);
                    gap: var(--spacing-md);
                }

                .nav-list.active {
                    display: flex;
                }

                .menu-toggle {
                    display: block;
                }

                .audit-btn {
                    padding: 8px 16px;
                    font-size: 11px;
                }
                
                .audit-btn svg {
                    width: 16px;
                    height: 16px;
                }
            }
        </style>
    `

  const headerContainer = document.getElementById("header-container")
  if (headerContainer) {
    headerContainer.innerHTML = style + headerHTML
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

function createMobileNavSection() {
  const mobileNavHTML = `
    <div class="mobile-nav-wrapper" style="display: flex; gap: var(--spacing-md); flex-wrap: wrap;">
      <a href="/" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">Home</a>
      <a href="/#latest-articles-container" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">Articles</a>
      <a href="/services" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">Services</a>
      <a href="/about" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">About</a>
    </div>
  `
  const mobileNavSection = document.getElementById("mobile-nav-section")
  if (mobileNavSection) {
    mobileNavSection.innerHTML = mobileNavHTML

    const mobileLinks = document.querySelectorAll(".nav-link-mobile")
    mobileLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        this.style.background = "var(--color-black)"
        this.style.color = "var(--color-white)"
      })
      link.addEventListener("mouseout", function () {
        this.style.background = ""
        this.style.color = "var(--color-black)"
      })
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader()
  createMobileNavSection()
})
