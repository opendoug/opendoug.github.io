/**
 * WaltersWorks Vanilla JS
 */

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Inject shared components, then render icons once they exist in the DOM
    await Promise.all([
        loadComponent('ww-nav', 'components/navigation.html'),
        loadComponent('ww-footer', 'components/footer.html')
    ]);

    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Dynamic footer year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 3. Mobile menu toggle (delegated since nav is injected)
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
 * Loads an external HTML file into a placeholder element
 */
async function loadComponent(selector, path) {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
        const response = await fetch(path);
        if (response.ok) {
            element.innerHTML = await response.text();

            // Mark the active nav link for the current page
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            element.querySelectorAll('a.nav-link').forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                }
            });
        }
    } catch (err) {
        console.error(`Error loading component ${path}:`, err);
    }
}
