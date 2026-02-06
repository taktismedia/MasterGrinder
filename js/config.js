/**
 * Configuration & Constants
 * Centralized configuration untuk aplikasi
 */

const Config = {
    // Pagination
    pagination: {
        itemsPerPage: 6,
        maxPagesDisplay: 5
    },

    // Debounce & Throttle
    timing: {
        searchDebounce: 300,
        scrollThrottle: 300,
        animationDuration: 300
    },

    // API Endpoints (untuk future use)
    api: {
        baseUrl: 'http://localhost:3000/api',
        endpoints: {
            products: '/products',
            search: '/products/search',
            categories: '/categories'
        }
    },

    // Messages
    messages: {
        noResults: 'Produk Tidak Ditemukan',
        searchPlaceholder: 'Cari grinder kopi...',
        shareSuccess: '✓ Produk disalin ke clipboard!',
        shareFallback: 'Bagikan produk ini:'
    },

    // Storage Keys
    localStorage: {
        darkMode: 'darkMode',
        userPreferences: 'userPreferences'
    },

    // CSS Classes
    classes: {
        darkMode: 'dark-mode',
        active: 'active',
        disabled: 'disabled',
        loading: 'loading'
    },

    // Selectors
    selectors: {
        searchInput: '#searchInput',
        productsContainer: '#productsContainer',
        paginationContainer: '#paginationContainer',
        productModal: '#productModal',
        darkModeToggle: '#darkModeToggle'
    }
};

// Freeze config untuk prevent accidental modification
Object.freeze(Config);
Object.freeze(Config.pagination);
Object.freeze(Config.timing);
Object.freeze(Config.api);
Object.freeze(Config.messages);
Object.freeze(Config.localStorage);
Object.freeze(Config.classes);
Object.freeze(Config.selectors);
