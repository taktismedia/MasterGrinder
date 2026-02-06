/**
 * UI Module
 * Mengelola rendering dan interaksi UI
 */

const UIModule = (() => {
    // Private helper functions
    const createProductCard = (product) => {
        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 col-sm-12';
        col.innerHTML = `
            <div class="card product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-body">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="product-description">${product.description}</p>
                    <ul class="product-specs">
                        ${product.specs.map(spec => `
                            <li><i class="fas fa-check"></i> ${spec}</li>
                        `).join('')}
                    </ul>
                    <div class="product-price">${product.price}</div>
                    <div class="product-footer">
                        <button class="btn btn-outline-gold btn-sm flex-grow-1 btn-detail" data-product-id="${product.id}">
                            <i class="fas fa-eye"></i> Lihat Detail
                        </button>
                        <button class="btn btn-outline-gold btn-sm flex-grow-1 btn-share" data-product-id="${product.id}">
                            <i class="fas fa-share-alt"></i> Bagikan
                        </button>
                    </div>
                </div>
            </div>
        `;
        return col;
    };

    const createPaginationButton = (pageNum, isActive = false) => {
        const li = document.createElement('li');
        li.className = `page-item ${isActive ? 'active' : ''}`;
        const btn = document.createElement('a');
        btn.className = 'page-link';
        btn.href = '#';
        btn.textContent = pageNum;
        btn.dataset.page = pageNum;
        li.appendChild(btn);
        return li;
    };

    // Public methods
    return {
        renderProducts: (products) => {
            const container = document.querySelector(Config.selectors.productsContainer);
            container.innerHTML = '';

            if (products.length === 0) {
                container.innerHTML = `
                    <div class="col-12">
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <h5>${Config.messages.noResults}</h5>
                            <p>Coba dengan kata kunci pencarian yang berbeda</p>
                        </div>
                    </div>
                `;
                return;
            }

            products.forEach(product => {
                container.appendChild(createProductCard(product));
            });
        },

        renderPagination: (totalPages, currentPage) => {
            const container = document.querySelector(Config.selectors.paginationContainer);
            container.innerHTML = '';

            // Previous button
            const prevLi = document.createElement('li');
            prevLi.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
            const prevBtn = document.createElement('a');
            prevBtn.className = 'page-link';
            prevBtn.href = '#';
            prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Sebelumnya';
            prevBtn.dataset.page = currentPage - 1;
            prevLi.appendChild(prevBtn);
            container.appendChild(prevLi);

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                container.appendChild(createPaginationButton(i, i === currentPage));
            }

            // Next button
            const nextLi = document.createElement('li');
            nextLi.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
            const nextBtn = document.createElement('a');
            nextBtn.className = 'page-link';
            nextBtn.href = '#';
            nextBtn.innerHTML = 'Selanjutnya <i class="fas fa-chevron-right"></i>';
            nextBtn.dataset.page = currentPage + 1;
            nextLi.appendChild(nextBtn);
            container.appendChild(nextLi);
        },

        showProductModal: (product) => {
            document.getElementById('productModalLabel').textContent = product.name;
            document.getElementById('productDescription').textContent = product.description;
            document.getElementById('productPrice').textContent = product.price;

            // Update gambar di modal
            const productImage = document.querySelector('.product-modal-image img');
            if (productImage) {
                productImage.src = product.image;
                productImage.alt = product.name;
            } else {
                // Jika belum ada img, buat baru
                const imageContainer = document.querySelector('.product-modal-image');
                imageContainer.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto;">`;
            }

            const specsList = document.getElementById('productSpecsList');
            specsList.innerHTML = '';

            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${spec}`;
                specsList.appendChild(li);
            });

            const modal = new bootstrap.Modal(document.querySelector(Config.selectors.productModal));
            modal.show();
        },

        scrollToSection: (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };
})();
