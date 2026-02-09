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
        image: "../assets/img/IndeljensAzzuleMini.png",
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
        image: "../assets/img/IndeljensAzzule.png",
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
        image: "../assets/img/IndeljensAlto.png",
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
        image: "../assets/img/IndeljensVeloce.png",
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
        image: "../assets/img/JollyVUp.png",
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
        image: "../assets/img/JollyVPro.png",
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
        image: "../assets/img/philos.png",
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
        description: "Grinder modern dengan performa stabil dan harga kompetitif.",
        price: "Rp 4.699.000",
        category: "Electric",
        image: "../assets/img/manussoEvo.png",
        specs: [
            "Tipe: Manual Grinder",
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
        image: "../assets/img/manussoEvo.png",
        specs: [
            "Tipe: Manual Grinder",
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
        image: "../assets/img/k021.png",
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
        image: "../assets/img/k019.png",
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
        image: "../assets/img/k500n.png",
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
        image: "../assets/img/KX016.png",
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
        image: "../assets/img/600n.png",
        specs: [
            "Tipe: Electric Grinder",
            "Model: 600N",
            "Ukuran: Compact",
            "Cocok: Cafe Kecil"
        ]
    },
    {
        id: 15,
        name: "Maquinos E75T",
        description: "Grinder elektrik performa tinggi untuk espresso bar.",
        price: "Rp 9.390.000",
        category: "Professional",
        image: "../assets/img/E75T.png",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Kapasitas Tinggi",
            "Cocok: Cafe"
        ]
    },
    {
        id: 16,
        name: "Maquinos E65T",
        description: "Grinder elektrik serbaguna dengan ukuran ringkas.",
        price: "Rp 7.375.000",
        category: "Electric",
        image: "../assets/img/E65T.png",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Desain: Compact",
            "Hasil: Espresso – Filter",
            "Cocok: Home Pro & Cafe"
        ]
    },
    {
        id: 17,
        name: "Hario EVCG 8B",
        description: "Grinder elektrik Hario dengan desain minimalis Jepang.",
        price: "Rp 3.990.000",
        category: "Electric",
        image: "../assets/img/Hario8B.png",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Minimalis",
            "Kapasitas: Kecil",
            "Cocok: Home Brewing"
        ]
    },
    {
        id: 18,
        name: "Romola G9022",
        description: "Grinder elektrik profesional Romola.",
        price: "Rp 7.000.000",
        category: "Professional",
        image: "../assets/img/G9002.png",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Build: Kokoh",
            "Cocok: Cafe"
        ]
    },
    {
        id: 19,
        name: "Romola G9012",
        description: "Grinder elektrik ekonomis untuk UMKM.",
        price: "Rp 4.300.000",
        category: "Electric",
        image: "../assets/img/G9012.png",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Simple",
            "Hasil: Konsisten",
            "Cocok: Home & UMKM"
        ]
    },
    {
        id: 20,
        name: "Romola Amalfi M70",
        description: "Grinder elektrik kelas menengah untuk espresso.",
        price: "Rp 6.600.000",
        category: "Electric",
        image: "../assets/img/M70.png",
        specs: [
            "Tipe: Electric Burr Grinder",
            "Burr: Large Burr",
            "Stabil untuk Espresso",
            "Cocok: Cafe"
        ]
    },
    {
        id: 21,
        name: "Romola GI74",
        description: "Grinder elektrik performa tinggi untuk kafe profesional.",
        price: "Rp 8.900.000",
        category: "Professional",
        image: "../assets/img/G174.png",
        specs: [
            "Tipe: Commercial Grinder",
            "Burr: Flat Burr",
            "Kinerja Tinggi",
            "Cocok: Cafe"
        ]
    },
    {
        id: 22,
        name: "Latina Vega OX60-E",
        description: "Grinder elektrik kompak dengan desain modern.",
        price: "Rp 3.290.000",
        category: "Electric",
        image: "../assets/img/OX60.png",
        specs: [
            "Tipe: Electric Grinder",
            "Desain: Modern",
            "Pengaturan Gilingan: Multi Level",
            "Cocok: Home"
        ]
    },
    {
        id: 23,
        name: "Latina DX60-M2 Elefante",
        description: "Grinder elektrik ekonomis dengan body kokoh.",
        price: "Rp 2.350.000",
        category: "Electric",
        image: "../assets/img/DX60.png",
        specs: [
            "Tipe: Electric Grinder",
            "Body: Kokoh",
            "Hasil: Stabil",
            "Cocok: Home & Cafe Kecil"
        ]
    },
    {
        id: 24,
        name: "Mahlkönig X54",
        description: "Grinder all-rounder premium dari Mahlkönig.",
        price: "Rp 11.500.000",
        category: "Professional",
        image: "../assets/img/X54.png",
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
