/**
 * WaltersWorks Vanilla JS
 *
 * Shared components are defined as templates below and injected into the
 * <ww-nav> / <ww-footer> placeholders on every page. No fetch() involved,
 * so pages work over http:// and file:// alike.
 */

const NAV_HTML = `
<header>
    <div class="container nav-container">
        <a href="index.html" class="brand">
            <img src="assets/waltersworks-logo-new.png" alt="WaltersWorks logo">
            <span class="brand-name"><strong>WALTERS</strong><em>WORKS</em></span>
        </a>

        <nav class="nav-links" aria-label="Primary">
            <a href="index.html" class="nav-link">Home</a>
            <a href="execworks.html" class="nav-link">ExecWorks</a>
            <a href="dataworks.html" class="nav-link">DataWorks</a>
            <a href="webworks.html" class="nav-link">WebWorks</a>
            <a href="triage.html" class="nav-link">Showcase</a>
        </nav>

        <a href="#contact" class="comic-button bg-secondary nav-cta">Get Started</a>

        <button id="mobile-menu-toggle" class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-menu">
            <i data-lucide="menu" class="icon-menu"></i>
            <i data-lucide="x" class="icon-close"></i>
        </button>
    </div>

    <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile">
        <a href="index.html" class="nav-link">Home</a>
        <a href="execworks.html" class="nav-link">ExecWorks</a>
        <a href="dataworks.html" class="nav-link">DataWorks</a>
        <a href="webworks.html" class="nav-link">WebWorks</a>
        <a href="triage.html" class="nav-link">Showcase</a>
        <a href="#contact" class="comic-button bg-secondary">Get Started</a>
    </nav>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <div class="footer-brand">
                    <img src="assets/waltersworks-logo.png" alt="WaltersWorks logo">
                    <span class="brand-name"><strong>WALTERS</strong><em>WORKS</em></span>
                </div>
                <p class="text-muted text-sm max-w-prose">
                    Strategic leadership and technology enablement for modern businesses.
                    Accelerating growth through executive, data, and web excellence.
                </p>
            </div>

            <div>
                <div class="footer-heading">Services</div>
                <ul class="footer-links">
                    <li><a href="execworks.html">ExecWorks</a></li>
                    <li><a href="dataworks.html">DataWorks</a></li>
                    <li><a href="webworks.html">WebWorks</a></li>
                    <li><a href="triage.html">Triage Showcase</a></li>
                </ul>
            </div>

            <div>
                <div class="footer-heading">Contact</div>
                <ul class="footer-links">
                    <li><a href="mailto:doug@waltersworks.com">doug@waltersworks.com</a></li>
                    <li><a href="#contact">Schedule a meeting</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            © <span id="footer-year">2026</span> WaltersWorks • Strategic Leadership &amp; Technology Enablement
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject shared components, then render icons
    injectComponent('ww-nav', NAV_HTML);
    injectComponent('ww-footer', FOOTER_HTML);

    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Dynamic footer year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 3. Mobile menu toggle
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('#mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        if (!menu) return;

        if (toggle) {
            const isOpen = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
            return;
        }

        // Close the menu when a link inside it is clicked
        if (e.target.closest('#mobile-menu a')) {
            closeMobileMenu();
        }
    });

    // Close the menu when resizing up to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) {
            closeMobileMenu();
        }
    });

    // 4. Smooth scrolling for same-page anchors
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;

        const element = document.getElementById(target.getAttribute('href').slice(1));
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('mobile-menu-toggle');
    if (menu) menu.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

/**
 * Injects component markup into a placeholder element and marks
 * the nav link for the current page as active.
 */
function injectComponent(selector, html) {
    const element = document.querySelector(selector);
    if (!element) return;

    element.innerHTML = html;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    element.querySelectorAll('a.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}
