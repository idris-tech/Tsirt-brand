const products = [
    {
        id: 1,
        name: "Essential Heavyweight Cotton Tee",
        price: 375.00,
        description: "Premium 240GSM 100% combed cotton. Ultra-soft feel with a modern relaxed fit. Perfect for high-end boutique branding.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
        category: "Basic",
        colors: ["White", "Black", "Grey", "Navy"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 120,
        featured: true,
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Classic Over-sized Fit T-Shirt",
        price: 450.00,
        description: "A trendy drop-shoulder silhouette made from premium breathable fabrics. Designed for maximum comfort and style.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
        category: "Premium",
        colors: ["Black", "Charcoal", "Cream", "Olive"],
        sizes: ["M", "L", "XL", "XXL"],
        stock: 85,
        featured: true,
        badge: "New Arrival"
    },
    {
        id: 3,
        name: "Eco-Friendly Organic Cotton Tee",
        price: 420.00,
        description: "100% GOTS certified organic cotton. Sustainable, durable, and extremely soft on the skin. Natural dye process.",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
        category: "Organic",
        colors: ["Earthy Green", "White", "Sand"],
        sizes: ["S", "M", "L", "XL"],
        stock: 45,
        featured: true,
        badge: "Eco-Conscious"
    },
    {
        id: 4,
        name: "Signature Streetwear Tee",
        price: 525.00,
        description: "Heavyweight 280GSM fabric with a structured fit. Pre-shrunk and double-stitched for longevity. Elite quality.",
        image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&q=80&w=800",
        category: "Premium",
        colors: ["Midnight Black", "Electric Blue", "Grey"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 60,
        featured: true,
        badge: "Limited Edition"
    },
    {
        id: 5,
        name: "Minimalist Crew Neck",
        price: 330.00,
        description: "Lightweight 180GSM cotton. Perfect for layering or as a clean standalone piece. Everyday essentials.",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800",
        category: "Basic",
        colors: ["White", "Black", "Grey"],
        sizes: ["S", "M", "L", "XL"],
        stock: 200,
        featured: false,
        badge: null
    },
    {
        id: 6,
        name: "Vintage Wash Relaxed Tee",
        price: 480.00,
        description: "Acid-washed for a unique vintage aesthetic. Soft, broken-in feel from the first wear.",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800",
        category: "Style",
        colors: ["Acid Wash Grey", "Slate", "Mustard"],
        sizes: ["S", "M", "L", "XL"],
        stock: 30,
        featured: false,
        badge: "Trending"
    }
];

const wholesaleBundles = [
    {
        id: "bundle-1",
        name: "Start-Up Bundle",
        count: 20,
        price: 5250.00,
        perPiece: 262.50,
        features: ["Assorted sizes included", "Choose up to 3 colors", "Premium poly-bags", "Free nationwide delivery"],
        featured: false
    },
    {
        id: "bundle-2",
        name: "Entrepreneur Pack",
        count: 50,
        price: 11250.00,
        perPiece: 225.00,
        features: ["Full size range (S-XXL)", "Choose up to 6 colors", "Custom neck labels (Optional)", "Marketing guide included"],
        featured: true
    },
    {
        id: "bundle-3",
        name: "Wholesale Partner",
        count: 100,
        price: 19500.00,
        perPiece: 195.00,
        features: ["Priority production", "Any color mix", "Custom packaging", "Dedicated account manager"],
        featured: false
    }
];
