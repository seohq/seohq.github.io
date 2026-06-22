// Footer Component
function loadFooter() {
  const footerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>ABOUT</h4>
                    <p>SEO HQ is a blog dedicated to raw insights on search engine optimization, AI integration, and content strategy.</p>
                </div>
                <div class="footer-section">
                    <h4>PAGES</h4>
                    <ul class="footer-links">
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="terms">Terms of Use</a></li>
                        <li><a href="disclaimer">Disclaimer</a></li>
                        <li><a href="services">Services</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>CATEGORIES</h4>
                    <ul class="footer-links">
                        <li><a href="technical-seo">Technical SEO</a></li>
                        <li><a href="ai-in-seo">AI in SEO</a></li>
                        <li><a href="semantic-seo">Semantic SEO</a></li>
                        <li><a href="content-optimization">Content Optimization</a></li>
                        <li><a href="case-studies">Case Studies</a></li>
                        <li><a href="tech-news">Tech News</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>CONNECT</h4>
                    <ul class="footer-links">
                        <li><a href="#">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/waqas-bukhari-6a5912389/">LinkedIn</a></li>
                        <li><a href="https://github.com/seohq/seohq.github.io">GitHub</a></li>
                        <li><a href="https://www.facebook.com/share/14cpQCUVncU/">Facebook</a></li>
                        <li><a href="https://wa.me/923402324446">Whatsapp</a></li>
                        <li><a href="/author">Author</a></li>
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
                border-top: 1px solid var(--slate-100);
                background: var(--navy-900);
                margin-top: var(--space-20);
            }

            .footer-container {
                max-width: 1360px;
                margin: 0 auto;
                padding: var(--space-16) var(--space-8);
            }

            .footer-content {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--space-10);
                margin-bottom: var(--space-10);
                padding-bottom: var(--space-10);
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }

            .footer-section h4 {
                font-family: var(--font-body);
                font-size: var(--text-xs);
                text-transform: uppercase;
                letter-spacing: 0.12em;
                margin-bottom: var(--space-5);
                color: var(--teal-500);
                font-weight: 600;
            }

            .footer-section p {
                font-size: var(--text-sm);
                color: var(--text-on-dark-muted);
                line-height: 1.75;
                margin: 0;
            }

            .footer-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .footer-links li {
                margin-bottom: var(--space-3);
            }

            .footer-links a {
                font-size: var(--text-sm);
                font-weight: 500;
                color: var(--text-on-dark-muted);
                text-decoration: none;
                transition: var(--transition);
                display: inline-flex;
                align-items: center;
                gap: var(--space-2);
            }

            .footer-links a:hover {
                color: var(--teal-500);
                gap: var(--space-3);
            }

            .footer-bottom {
                text-align: center;
                font-size: var(--text-xs);
                color: var(--text-on-dark-muted);
                text-transform: uppercase;
                letter-spacing: 0.08em;
                opacity: 0.6;
            }

            .footer-bottom p {
                margin: var(--space-1) 0;
            }

            @media (max-width: 768px) {
                .footer-container {
                    padding: var(--space-12) var(--space-5);
                }

                .footer-content {
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-8);
                }
            }

            @media (max-width: 480px) {
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
