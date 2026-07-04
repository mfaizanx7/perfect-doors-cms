/*
|--------------------------------------------------------------------------
| Language Switcher for Perfect Doors
| Handles language selection and persistence across pages
|--------------------------------------------------------------------------
*/

(function () {
    'use strict';

    // Language configuration
    const LANG_KEY = 'perfectdoors_language';
    const DEFAULT_LANG = 'en';

    // Page mapping between English and Arabic versions
    const pageMapping = {
        'en': {
            'index': 'index.html',
            'about': 'about.html',
            'services': 'services.html',
            'contact-us': 'contact-us.html',
            'portfolio': 'portfolio.html'
        },
        'ar': {
            'index': 'index-ar.html',
            'about': 'about-ar.html',
            'services': 'services-ar.html',
            'contact-us': 'contact-us-ar.html',
            'portfolio': 'portfolio-ar.html'
        }
    };

    // Get current page name from URL
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';

        // Remove .html and -ar suffix to get base page name
        let pageName = filename.replace('.html', '').replace('-ar', '');

        // Handle root/empty path
        if (!pageName || pageName === '') {
            pageName = 'index';
        }

        return pageName;
    }

    // Get current language from page
    function getCurrentLanguage() {
        const htmlLang = document.documentElement.lang;
        return htmlLang === 'ar' ? 'ar' : 'en';
    }

    // Get stored language preference
    function getStoredLanguage() {
        return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
    }

    // Store language preference
    function setStoredLanguage(lang) {
        localStorage.setItem(LANG_KEY, lang);
    }

    // Navigate to the correct language version
    function switchLanguage(targetLang) {
        const currentPage = getCurrentPage();
        const currentLang = getCurrentLanguage();

        // If already on target language, just close dropdown
        if (currentLang === targetLang) {
            closeDropdown();
            return;
        }

        // Store the preference
        setStoredLanguage(targetLang);

        // Get the target page URL
        const targetPage = pageMapping[targetLang][currentPage];

        if (targetPage) {
            window.location.href = targetPage;
        }
    }

    // Toggle dropdown visibility
    function toggleDropdown() {
        const switcher = document.querySelector('.language-switcher');
        if (switcher) {
            switcher.classList.toggle('open');
        }
    }

    // Close dropdown
    function closeDropdown() {
        const switcher = document.querySelector('.language-switcher');
        if (switcher) {
            switcher.classList.remove('open');
        }
    }

    // Check and redirect if needed on page load
    function checkLanguageRedirect() {
        const storedLang = getStoredLanguage();
        const currentLang = getCurrentLanguage();
        const currentPage = getCurrentPage();

        // If stored preference differs from current page language, redirect
        if (storedLang !== currentLang) {
            const targetPage = pageMapping[storedLang][currentPage];
            if (targetPage) {
                window.location.href = targetPage;
            }
        }
    }

    // Initialize language switcher
    function init() {
        // Check for language redirect on page load
        checkLanguageRedirect();

        // Setup toggle button click handler
        const toggleBtn = document.querySelector('.language-switcher .lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                toggleDropdown();
            });
        }

        // Setup language option click handlers
        const langOptions = document.querySelectorAll('.language-switcher .lang-dropdown a');
        langOptions.forEach(function (option) {
            option.addEventListener('click', function (e) {
                e.preventDefault();
                const targetLang = this.getAttribute('data-lang');
                if (targetLang) {
                    switchLanguage(targetLang);
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            const switcher = document.querySelector('.language-switcher');
            if (switcher && !switcher.contains(e.target)) {
                closeDropdown();
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeDropdown();
            }
        });
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose functions globally for debugging
    window.LanguageSwitcher = {
        switchLanguage: switchLanguage,
        getCurrentLanguage: getCurrentLanguage,
        getStoredLanguage: getStoredLanguage
    };

})();
