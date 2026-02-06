/*
{
  "file": "you-may-like.html",
  "description": "HTML representation of the 'You May Like' component including embedded styles and navigation logic.",
  "type": "HTML Document",
  "version": "1.1.0"
}
*/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You May Like Component</title>
    <style>
        :root {
            --spacing-lg: 20px;
            --font-size-xl: 24px;
            --font-size-lg: 18px;
            --text-color: #333;
            --bg-hover: #f4f4f4;
        }

        body {
            font-family: sans-serif;
            padding: 20px;
            color: var(--text-color);
        }

        .you-may-like-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .you-may-like-item {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            transition: background-color 0.3s ease;
            cursor: pointer;
        }

        .you-may-like-item:hover {
            background-color: var(--bg-hover);
        }

        .you-may-like-item h4 {
            margin: 0 0 10px 0;
            color: #007bff;
        }

        .you-may-like-item p {
            font-size: 14px;
            margin: 0;
            line-height: 1.4;
        }
    </style>
</head>
<body>

    <div id="you-may-like-container"></div>

    <script>
        function loadYouMayLike() {
            const youMayLikeHTML = `
                <div class="you-may-like">
                    <h3 style="border: none; padding: 0; margin: 0 0 var(--spacing-lg) 0; font-size: var(--font-size-xl);">YOU MAY LIKE</h3>
                    <div class="you-may-like-items">
                        <div class="you-may-like-item" data-url="/understanding-eeat">
                            <h4>Understanding E-E-A-T</h4>
                            <p>How Google's Quality Rater Guidelines have evolved and what it means for your content strategy.</p>
                        </div>
                        <div class="you-may-like-item" data-url="/link-building-2026">
                            <h4>Link Building in 2026</h4>
                            <p>Modern approaches to acquiring high-quality backlinks without violating search guidelines.</p>
                        </div>
                        <div class="you-may-like-item" data-url="/mobile-first-indexing-2026">
                            <h4>Mobile-First Indexing</h4>
                            <p>Why mobile performance matters more than ever and how to optimize your site accordingly.</p>
                        </div>
                        <div class="you-may-like-item" data-url="/ai-built-seo-blog">
                            <h4>AI-Built SEO Blogs</h4>
                            <p>Key Achievements of SEO HQ Blog.</p>
                        </div>
                    </div>
                </div>
            `;

            const youMayLikeContainer = document.getElementById("you-may-like-container");
            if (youMayLikeContainer) {
                youMayLikeContainer.innerHTML = youMayLikeHTML;
            }

            const items = document.querySelectorAll(".you-may-like-item");
            items.forEach((item) => {
                item.addEventListener("click", () => {
                    const url = item.getAttribute("data-url");
                    if (url) {
                        // In a live environment, this would navigate to the URL
                        console.log("Navigating to:", url);
                        window.location.href = url;
                    }
                });
            });
        }

        document.addEventListener("DOMContentLoaded", loadYouMayLike);
    </script>
</body>
</html>
