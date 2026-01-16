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
                    <li><a href="#" class="nav-link active">Home</a></li>
                    <li><a href="#" class="nav-link">Articles</a></li>
                    <li><a href="#" class="nav-link">Categories</a></li>
                    <li><a href="#" class="nav-link">About</a></li>
                </ul>
                <div class="header-toggle">
                    <button class="menu-toggle" id="menuToggle">MENU</button>
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

            @media (max-width: 768px) {
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

                .header-container {
                    flex-direction: column;
                    gap: var(--spacing-md);
                }

                .nav-link::after {
                    display: none;
                }
            }
        </style>
    `

  const headerContainer = document.getElementById("header-container")
  headerContainer.innerHTML = style + headerHTML

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const navList = document.querySelector(".nav-list")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active")
    })
  }
}

function createMobileNavSection() {
  const mobileNavHTML = `
    <div class="mobile-nav-wrapper" style="display: flex; gap: var(--spacing-md); flex-wrap: wrap;">
      <a href="#" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">Home</a>
      <a href="#" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">Articles</a>
      <a href="#" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">Categories</a>
      <a href="#" class="nav-link-mobile" style="flex: 1; min-width: 120px; padding: var(--spacing-sm) var(--spacing-md); border: 1px solid var(--color-black); text-align: center; text-transform: uppercase; font-size: var(--font-size-xs); letter-spacing: 1px; color: var(--color-black); transition: all 0.2s ease;">About</a>
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
