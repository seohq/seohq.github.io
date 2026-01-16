// Footer Component
function loadFooter() {
  const footerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>ABOUT</h4>
                    <p>SEO HQ is a brutalist blog dedicated to raw insights on search engine optimization, AI integration, and content strategy.</p>
                </div>
                <!-- Added PAGES section before CATEGORIES -->
                <div class="footer-section">
                    <h4>PAGES</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Use</a></li>
                        <li><a href="disclaimer.html">Disclaimer</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>CATEGORIES</h4>
                    <ul class="footer-links">
                        <li><a href="technical-seo.html">Technical SEO</a></li>
                        <li><a href="ai-in-seo.html">AI in SEO</a></li>
                        <li><a href="semantic-seo.html">Semantic SEO</a></li>
                        <li><a href="content-optimization.html">Content Optimization</a></li>
                        <li><a href="case-studies.html">Case Studies</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>CONNECT</h4>
                    <ul class="footer-links">
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 SEO HQ. All rights reserved.</p>
                <p>Built with HTML, CSS, and JavaScript. No frameworks.</p>
            </div>
        </div>
    `

  const style = `
        <style>
            footer {
                border-top: 3px solid var(--color-black);
                background: var(--color-white);
                margin-top: var(--spacing-xl);
            }

            .footer-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: var(--spacing-xl) var(--spacing-lg);
            }

            .footer-content {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: var(--spacing-lg);
                margin-bottom: var(--spacing-lg);
                padding-bottom: var(--spacing-lg);
                border-bottom: 1px solid var(--color-black);
            }

            .footer-section h4 {
                font-size: var(--font-size-sm);
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: var(--spacing-md);
                color: var(--color-accent);
            }

            .footer-section p {
                font-size: var(--font-size-sm);
                color: var(--color-gray-700);
                line-height: 1.8;
            }

            .footer-links {
                list-style: none;
            }

            .footer-links li {
                margin-bottom: var(--spacing-sm);
            }

            .footer-links a {
                font-size: var(--font-size-sm);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border: none;
                color: var(--color-black);
                transition: all 0.2s ease;
            }

            .footer-links a:hover {
                color: var(--color-accent);
                border-left: 2px solid var(--color-accent);
                padding-left: 8px;
            }

            .footer-bottom {
                text-align: center;
                font-size: var(--font-size-xs);
                color: var(--color-gray-500);
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .footer-bottom p {
                margin: 4px 0;
            }

            @media (max-width: 768px) {
                .footer-container {
                    padding: var(--spacing-lg) var(--spacing-md);
                }

                .footer-content {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `

  const footerContainer = document.getElementById("footer-container")
  footerContainer.innerHTML = style + footerHTML
}

document.addEventListener("DOMContentLoaded", loadFooter)
