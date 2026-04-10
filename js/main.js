/**
 * WaltersWorks Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Shared Components
    loadComponent('ww-nav', 'components/navigation.html');
    loadComponent('ww-footer', 'components/footer.html');

    // 2. Smooth Scrolling for anchors
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a[href^="#"]');
        if (target) {
            e.preventDefault();
            const id = target.getAttribute('href').slice(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // 3. Mobile Menu Toggle (delegated since nav is injected)
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('#mobile-menu-toggle');
        if (toggle) {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
    });
});

/**
 * Loads an external HTML file into a placeholder element
 */
async function loadComponent(selector, path) {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
        const response = await fetch(path);
        if (response.ok) {
            const html = await response.text();
            element.innerHTML = html;
            
            // Mark active link
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const links = element.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath) {
                    link.classList.add('text-primary');
                }
            });
        }
    } catch (err) {
        console.error(`Error loading component ${path}:`, err);
    }
}
