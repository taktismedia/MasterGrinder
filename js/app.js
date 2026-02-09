/**
 * App Module
 * Main application logic dan event handling
 */

const AppModule = (() => {
    // State
    const state = {
        currentPage: 1,
        itemsPerPage: Config.pagination.itemsPerPage,
        allProducts: [],
        filteredProducts: [],
        currentProductForShare: null,
        isDarkMode: localStorage.getItem(Config.localStorage.darkMode) === 'enabled'
    };

    // Private methods
    const initializeProducts = () => {
        state.allProducts = ProductsModule.getAll();
        state.filteredProducts = [...state.allProducts];
    };

    const displayProducts = (scrollToProducts = false) => {
        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        const productsToDisplay = state.filteredProducts.slice(startIndex, endIndex);

        UIModule.renderProducts(productsToDisplay);
        updatePagination();
        attachProductEventListeners();
        if (scrollToProducts) {
            UIModule.scrollToSection('products');
        }
    };

    const updatePagination = () => {
        const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
        UIModule.renderPagination(totalPages, state.currentPage);
        attachPaginationListeners();
    };

    const attachProductEventListeners = () => {
        document.querySelectorAll('.btn-detail').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = parseInt(btn.dataset.productId);
                const product = ProductsModule.getById(productId);
                if (product) {
                    state.currentProductForShare = product;
                    UIModule.showProductModal(product);
                }
            });
        });

        document.querySelectorAll('.btn-share').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productId = parseInt(btn.dataset.productId);
                const product = ProductsModule.getById(productId);
                if (product) {
                    shareProduct(product);
                }
            });
        });
    };

    const attachPaginationListeners = () => {
        document.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(link.dataset.page);
                const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);

                if (page >= 1 && page <= totalPages) {
                    state.currentPage = page;
                    displayProducts(true);
                }
            });
        });
    };

    const setupSearch = () => {
        const searchInput = document.querySelector(Config.selectors.searchInput);
        if (!searchInput) return;

        const handleSearch = Utils.debounce(() => {
            const query = searchInput.value.trim();
            state.filteredProducts = query === '' 
                ? ProductsModule.getAll()
                : ProductsModule.search(query);

            state.currentPage = 1;
            displayProducts(true);
        }, Config.timing.searchDebounce);

        searchInput.addEventListener('keyup', handleSearch);
    };

    const setupDarkMode = () => {
        const darkModeToggle = document.querySelector(Config.selectors.darkModeToggle);
        if (!darkModeToggle) return;

        // Set initial state
        if (state.isDarkMode) {
            document.body.classList.add(Config.classes.darkMode);
            updateDarkModeIcon();
        }

        darkModeToggle.addEventListener('click', toggleDarkMode);
    };

    const toggleDarkMode = () => {
        document.body.classList.toggle(Config.classes.darkMode);
        state.isDarkMode = document.body.classList.contains(Config.classes.darkMode);
        localStorage.setItem(Config.localStorage.darkMode, state.isDarkMode ? 'enabled' : 'disabled');
        updateDarkModeIcon();
    };

    const updateDarkModeIcon = () => {
        const darkModeToggle = document.querySelector(Config.selectors.darkModeToggle);
        const icon = darkModeToggle.querySelector('i');

        if (state.isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    const shareProduct = (product) => {
        const shareText = `Saya menemukan ${product.name} dengan harga ${product.price}. Cek sekarang: Coffee Grinder Store`;

        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: shareText,
                url: window.location.href
            }).catch(err => console.log('Share dibatalkan'));
        } else {
            const text = `Produk: ${product.name}\nHarga: ${product.price}\nDeskripsi: ${product.description}`;

            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    alert('✓ Produk disalin ke clipboard! Silakan bagikan ke teman Anda.');
                });
            } else {
                alert(`Bagikan produk ini:\n\n${product.name}\n${product.price}\n${product.description}`);
            }
        }
    };

    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                UIModule.scrollToSection(href.substring(1));
            });
        });
    };

    const setupNavbarActiveState = () => {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    };

    const setupModalShare = () => {
        const shareFromModal = document.querySelector('#shareFromModal');
        if (!shareFromModal) return;

        shareFromModal.addEventListener('click', () => {
            if (state.currentProductForShare) {
                shareProduct(state.currentProductForShare);
            }
        });
    };

    const setupFilters = () => {
        const filterButtons = document.querySelectorAll('.filter-buttons .btn');
        if (!filterButtons.length) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                // Get the filter category
                const filterType = button.getAttribute('class');
                let category = null;

                if (filterType.includes('filter-electric')) {
                    category = 'Electric';
                } else if (filterType.includes('filter-professional')) {
                    category = 'Professional';
                } else {
                    // Semua - show all products
                    state.filteredProducts = [...state.allProducts];
                    state.currentPage = 1;
                    displayProducts(true);
                    return;
                }

                // Filter by category
                if (category) {
                    state.filteredProducts = ProductsModule.filterByCategory(category);
                    state.currentPage = 1;
                    displayProducts(true);
                }
            });
        });
    };

    // Public initialization
    return {
        init: () => {
            console.log('🚀 App initializing...');

            initializeProducts();
            displayProducts();
            setupSearch();
            setupDarkMode();
            setupSmoothScroll();
            setupNavbarActiveState();
            setupModalShare();
            setupFilters();

            console.log('✅ App initialized successfully');
        }
    };
})();

// Initialize app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    AppModule.init();
});
