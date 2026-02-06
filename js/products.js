/**
 * Products Module
 * Mengelola data produk dan operasi terkait
 */

const ProductsModule = (() => {
    // Private variables
    const allProducts = [
    {
        id: 1,
        name: "Indeljens Azzule Mini",
        description: "Grinder kopi elektrik compact dengan desain minimalis dan burr presisi. Cocok untuk home barista yang butuh konsistensi gilingan tanpa makan tempat.",
        price: "Rp 2.900.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Indeljens+Azzule+Mini&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Warna: Hitam / Putih",
            "Hasil Gilingan: Halus – Kasar",
            "Cocok: Home Use"
        ]
    },
    {
        id: 2,
        name: "Indeljens Azzule",
        description: "Grinder elektrik kelas menengah dengan performa stabil dan burr presisi untuk kebutuhan espresso hingga manual brew.",
        price: "Rp 6.550.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Indeljens+Azzule&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Burr: Flat Burr",
            "Hasil: Espresso – Manual Brew",
            "Cocok: Home Pro & Cafe Kecil"
        ]
    },
    {
        id: 3,
        name: "Indeljens Veloce Alto",
        description: "Grinder elektrik bertenaga dengan burr presisi untuk kebutuhan kafe kecil hingga menengah.",
        price: "Rp 7.000.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Indeljens+Veloce+Alto&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Kinerja Stabil",
            "Cocok: Cafe"
        ]
    },
    {
        id: 4,
        name: "Indeljens Veloce",
        description: "Grinder elektrik profesional dengan motor bertenaga dan konsistensi tinggi untuk penggunaan harian di kafe.",
        price: "Rp 7.990.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Indeljens+Veloce&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Stabil untuk Penggunaan Intens",
            "Cocok: Cafe"
        ]
    },
    {
        id: 5,
        name: "Mazzer Jolly V Up",
        description: "Grinder espresso profesional dengan reputasi legendaris, dikenal akan daya tahan dan konsistensi hasil gilingannya.",
        price: "Rp 19.800.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Mazzer+Jolly+V+Up&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Burr Grinder",
            "Burr: Flat Burr Baja",
            "RPM Stabil",
            "Cocok: Cafe & Coffee Shop"
        ]
    },
    {
        id: 6,
        name: "Mazzer Jolly V Pro",
        description: "Grinder profesional Mazzer dengan presisi tinggi dan durabilitas kelas kafe.",
        price: "Rp 21.800.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Mazzer+Jolly+V+Pro&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Burr Grinder",
            "Burr: Flat Burr Baja",
            "Presisi Tinggi",
            "Cocok: Cafe & Commercial Use"
        ]
    },
    {
        id: 7,
        name: "Mazzer Philos Silver",
        description: "Single dose grinder premium dari Mazzer dengan fokus presisi dan minim retention.",
        price: "Rp 19.700.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Mazzer+Philos+Silver&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Single Dose Grinder",
            "Burr: Flat Burr Presisi",
            "Low Retention",
            "Cocok: Home Pro & Specialty Cafe"
        ]
    },
    {
        id: 8,
        name: "Manusso Evo Pro",
        description: "Grinder elektrik modern dengan performa stabil dan harga kompetitif.",
        price: "Rp 4.699.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Manusso+Evo+Pro&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Pengaturan Gilingan: Multi-level",
            "Desain: Modern",
            "Cocok: Home & Cafe Kecil"
        ]
    },
    {
        id: 9,
        name: "Manusso Evo Black",
        description: "Grinder elektrik ekonomis dengan desain minimalis.",
        price: "Rp 3.499.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Manusso+Evo+Black&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Minimalis",
            "Hasil: Stabil",
            "Cocok: Home Use"
        ]
    },
    {
        id: 10,
        name: "Kuis 021 Black",
        description: "Grinder elektrik ringkas dengan burr presisi untuk pemula.",
        price: "Rp 2.090.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Kuis+021+Black&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Ukuran: Compact",
            "Hasil: Halus – Kasar",
            "Cocok: Home Use"
        ]
    },
    {
        id: 11,
        name: "Kuis 019 Black",
        description: "Grinder elektrik entry level dengan pengoperasian sederhana.",
        price: "Rp 1.400.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Kuis+019+Black&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Ukuran: Compact",
            "Penggunaan: Mudah",
            "Cocok: Pemula"
        ]
    },
    {
        id: 12,
        name: "Kuis 500N",
        description: "Grinder elektrik populer untuk kafe kecil.",
        price: "Rp 1.200.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Kuis+500N&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Motor: Tahan Lama",
            "Cocok: Cafe Kecil",
            "Value for Money"
        ]
    },
    {
        id: 13,
        name: "Kuis X016",
        description: "Grinder elektrik modern untuk home dan UMKM.",
        price: "Rp 2.300.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Kuis+X016&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Desain: Modern",
            "Hasil: Konsisten",
            "Cocok: Home & UMKM"
        ]
    },
    {
        id: 14,
        name: "One Two Cup 600N",
        description: "Grinder elektrik ekonomis untuk espresso dan kafe kecil.",
        price: "Rp 531.200",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=One+Two+Cup+600N&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Model: 600N",
            "Ukuran: Compact",
            "Cocok: Cafe Kecil"
        ]
    },
    {
        id: 15,
        name: "One Two Cup Trieste Electric Grinder",
        description: "Grinder elektrik ringkas dengan kapasitas kecil.",
        price: "Rp 2.414.280",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=One+Two+Cup+Trieste&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Kapasitas: 30g",
            "Desain: Ringkas",
            "Cocok: Home Use"
        ]
    },
    {
        id: 16,
        name: "Ferratti Ferro 3605",
        description: "Grinder elektrik ekonomis dengan desain profesional.",
        price: "Rp 2.650.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Ferratti+Ferro+3605&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Desain: Profesional",
            "Hasil: Konsisten",
            "Cocok: Cafe Kecil"
        ]
    },
    {
        id: 17,
        name: "Ferratti Ferro 3006",
        description: "Grinder elektrik mid-range dengan build kokoh.",
        price: "Rp 5.600.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Ferratti+Ferro+3006&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Material: Metal Body",
            "Hasil: Stabil",
            "Cocok: Cafe"
        ]
    },
    {
        id: 18,
        name: "Ferratti Ferro 3145",
        description: "Grinder elektrik premium untuk kafe menengah.",
        price: "Rp 10.850.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Ferratti+Ferro+3145&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Desain: Premium",
            "Cocok: Cafe Menengah"
        ]
    },
    {
        id: 19,
        name: "Ferratti Ferro 3030",
        description: "Grinder elektrik compact untuk ruang terbatas.",
        price: "Rp 3.050.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Ferratti+Ferro+3030&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Ukuran: Compact",
            "Hasil: Konsisten",
            "Cocok: Home & Cafe Kecil"
        ]
    },
    {
        id: 20,
        name: "Maquinos E75T",
        description: "Grinder elektrik performa tinggi untuk espresso bar.",
        price: "Rp 9.390.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Maquinos+E75T&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Kapasitas Tinggi",
            "Cocok: Cafe"
        ]
    },
    {
        id: 21,
        name: "Maquinos E65T",
        description: "Grinder elektrik serbaguna dengan ukuran ringkas.",
        price: "Rp 7.375.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Maquinos+E65T&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Desain: Compact",
            "Hasil: Espresso – Filter",
            "Cocok: Home Pro & Cafe"
        ]
    },
    {
        id: 22,
        name: "Hario EVCG 8B",
        description: "Grinder elektrik Hario dengan desain minimalis Jepang.",
        price: "Rp 3.990.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Hario+EVCG+8B&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Minimalis",
            "Kapasitas: Kecil",
            "Cocok: Home Brewing"
        ]
    },
    {
        id: 23,
        name: "Romola Blando 1680W",
        description: "Grinder bertenaga besar untuk kebutuhan komersial.",
        price: "Rp 4.300.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Romola+Blando+1680W&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Daya: 1680W",
            "Motor: Heavy Duty",
            "Cocok: Cafe"
        ]
    },
    {
        id: 24,
        name: "Romola G9022",
        description: "Grinder elektrik profesional Romola.",
        price: "Rp 7.000.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Romola+G9022&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Build: Kokoh",
            "Cocok: Cafe"
        ]
    },
    {
        id: 25,
        name: "Romola G9012",
        description: "Grinder elektrik ekonomis untuk UMKM.",
        price: "Rp 4.300.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Romola+G9012&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Simple",
            "Hasil: Konsisten",
            "Cocok: Home & UMKM"
        ]
    },
    {
        id: 26,
        name: "Romola Amalfi M70",
        description: "Grinder elektrik kelas menengah untuk espresso.",
        price: "Rp 6.600.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Romola+Amalfi+M70&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Burr: Large Burr",
            "Stabil untuk Espresso",
            "Cocok: Cafe"
        ]
    },
    {
        id: 27,
        name: "Romola GI74",
        description: "Grinder elektrik performa tinggi untuk kafe profesional.",
        price: "Rp 8.900.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Romola+GI74&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Kinerja Tinggi",
            "Cocok: Cafe"
        ]
    },
    {
        id: 28,
        name: "Latina Vega OX60-E",
        description: "Grinder elektrik kompak dengan desain modern.",
        price: "Rp 3.290.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Latina+Vega+OX60-E&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Modern",
            "Pengaturan Gilingan: Multi Level",
            "Cocok: Home"
        ]
    },
    {
        id: 29,
        name: "Latina DX60-M2 Elefante",
        description: "Grinder elektrik ekonomis dengan body kokoh.",
        price: "Rp 2.350.000",
        category: "Electric",
        image: "https://via.placeholder.com/500x500?text=Latina+DX60-M2+Elefante&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Grinder",
            "Body: Kokoh",
            "Hasil: Stabil",
            "Cocok: Home & Cafe Kecil"
        ]
    },
    {
        id: 30,
        name: "Mahlkönig X54",
        description: "Grinder all-rounder premium dari Mahlkönig.",
        price: "Rp 11.500.000",
        category: "Professional",
        image: "https://via.placeholder.com/500x500?text=Mahlkonig+X54&bg=1a1f2e&fg=eba832",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Burr: Flat Burr Presisi",
            "Range: Espresso – Filter",
            "Cocok: Home Pro & Cafe"
        ]
    }
];

    // Public methods
    return {
        getAll: () => [...allProducts],
        
        getById: (id) => allProducts.find(product => product.id === id),
        
        filterByCategory: (category) => allProducts.filter(p => p.category === category),
        
        search: (query) => {
            const lowerQuery = query.toLowerCase();
            return allProducts.filter(product =>
                product.name.toLowerCase().includes(lowerQuery) ||
                product.description.toLowerCase().includes(lowerQuery) ||
                product.specs.some(spec => spec.toLowerCase().includes(lowerQuery))
            );
        },
        
        getCategories: () => [...new Set(allProducts.map(p => p.category))]
    };
})();
