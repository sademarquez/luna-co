
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew: boolean;
  features: string[];
  description: string;
}

export const products: Product[] = [
  // Smartphones
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 4500000,
    originalPrice: 4999000,
    discount: 10,
    rating: 4.9,
    reviews: 234,
    image: "📱",
    category: "smartphones",
    inStock: true,
    isNew: true,
    features: ["256GB", "Titanio Natural", "A17 Pro"],
    description: "El iPhone más avanzado con chip A17 Pro y sistema de cámaras profesional"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 4200000,
    originalPrice: 4699000,
    discount: 11,
    rating: 4.8,
    reviews: 189,
    image: "📱",
    category: "smartphones",
    inStock: true,
    isNew: true,
    features: ["512GB", "Titanium Black", "S Pen"],
    description: "Smartphone Galaxy con S Pen integrado y cámara de 200MP"
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 3800000,
    originalPrice: 4200000,
    discount: 10,
    rating: 4.7,
    reviews: 156,
    image: "📱",
    category: "smartphones",
    inStock: true,
    isNew: false,
    features: ["128GB", "Obsidian", "Magic Eraser"],
    description: "El mejor smartphone de Google con IA avanzada y cámara computational"
  },
  {
    id: 4,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 2999000,
    originalPrice: 3299000,
    discount: 9,
    rating: 4.6,
    reviews: 98,
    image: "📱",
    category: "smartphones",
    inStock: true,
    isNew: true,
    features: ["256GB", "Black", "Leica Camera"],
    description: "Flagship Xiaomi con sistema de cámaras Leica profesional"
  },

  // Accesorios
  {
    id: 5,
    name: "AirPods Pro (3ra Gen)",
    brand: "Apple",
    price: 850000,
    originalPrice: 999000,
    discount: 15,
    rating: 4.8,
    reviews: 345,
    image: "🎧",
    category: "headphones",
    inStock: true,
    isNew: true,
    features: ["Cancelación de ruido", "USB-C", "Batería 6h"],
    description: "Auriculares inalámbricos con cancelación activa de ruido"
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 1200000,
    originalPrice: 1399000,
    discount: 14,
    rating: 4.9,
    reviews: 276,
    image: "🎧",
    category: "headphones",
    inStock: true,
    isNew: false,
    features: ["30h batería", "Noise Cancelling", "Hi-Res Audio"],
    description: "Auriculares premium con la mejor cancelación de ruido del mercado"
  },

  // Fundas y Protección
  {
    id: 7,
    name: "Funda MagSafe iPhone 15",
    brand: "Apple",
    price: 120000,
    originalPrice: 149000,
    discount: 19,
    rating: 4.5,
    reviews: 89,
    image: "🛡️",
    category: "cases",
    inStock: true,
    isNew: false,
    features: ["MagSafe", "Cuero genuino", "Protección premium"],
    description: "Funda oficial Apple con soporte MagSafe y cuero premium"
  },
  {
    id: 8,
    name: "Protector Pantalla iPhone 15",
    brand: "Belkin",
    price: 89000,
    originalPrice: 109000,
    discount: 18,
    rating: 4.6,
    reviews: 156,
    image: "🛡️",
    category: "cases",
    inStock: true,
    isNew: false,
    features: ["Vidrio templado", "Borde a borde", "Fácil instalación"],
    description: "Protector de pantalla de vidrio templado con instalación perfecta"
  },

  // Cargadores
  {
    id: 9,
    name: "Cargador Inalámbrico 15W",
    brand: "Anker",
    price: 180000,
    originalPrice: 220000,
    discount: 18,
    rating: 4.7,
    reviews: 234,
    image: "🔋",
    category: "chargers",
    inStock: true,
    isNew: false,
    features: ["15W Fast Charge", "LED indicador", "Base antideslizante"],
    description: "Cargador inalámbrico rápido compatible con iPhone y Android"
  },
  {
    id: 10,
    name: "Cable USB-C a Lightning",
    brand: "Apple",
    price: 89000,
    originalPrice: 109000,
    discount: 18,
    rating: 4.8,
    reviews: 189,
    image: "🔌",
    category: "chargers",
    inStock: true,
    isNew: false,
    features: ["2m longitud", "Carga rápida", "Certificado MFi"],
    description: "Cable original Apple para carga rápida y transferencia de datos"
  },

  // Tablets
  {
    id: 11,
    name: "iPad Air 5ta Gen",
    brand: "Apple",
    price: 2800000,
    originalPrice: 3199000,
    discount: 12,
    rating: 4.8,
    reviews: 167,
    image: "📲",
    category: "tablets",
    inStock: true,
    isNew: false,
    features: ["M1 chip", "10.9 pulgadas", "256GB"],
    description: "iPad Air con chip M1 y pantalla Liquid Retina de 10.9 pulgadas"
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S9",
    brand: "Samsung",
    price: 2400000,
    originalPrice: 2699000,
    discount: 11,
    rating: 4.7,
    reviews: 134,
    image: "📲",
    category: "tablets",
    inStock: true,
    isNew: true,
    features: ["11 pulgadas", "S Pen incluido", "128GB"],
    description: "Tablet Android premium con S Pen y pantalla AMOLED"
  },

  // Smartwatch
  {
    id: 13,
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 1599000,
    originalPrice: 1799000,
    discount: 11,
    rating: 4.9,
    reviews: 298,
    image: "⌚",
    category: "smartwatch",
    inStock: true,
    isNew: true,
    features: ["45mm", "GPS + Cellular", "Titanium"],
    description: "Apple Watch más avanzado con seguimiento de salud completo"
  },
  {
    id: 14,
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    price: 1200000,
    originalPrice: 1399000,
    discount: 14,
    rating: 4.6,
    reviews: 167,
    image: "⌚",
    category: "smartwatch",
    inStock: true,
    isNew: false,
    features: ["44mm", "Bluetooth", "Silver"],
    description: "Smartwatch Samsung con monitoreo avanzado de salud y fitness"
  },

  // Gaming
  {
    id: 15,
    name: "PlayStation 5",
    brand: "Sony",
    price: 2499000,
    originalPrice: 2799000,
    discount: 11,
    rating: 4.9,
    reviews: 445,
    image: "🎮",
    category: "gaming",
    inStock: true,
    isNew: false,
    features: ["825GB SSD", "4K Gaming", "Ray Tracing"],
    description: "Consola de videojuegos de nueva generación con gráficos 4K"
  },
  {
    id: 16,
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    price: 1599000,
    originalPrice: 1799000,
    discount: 11,
    rating: 4.8,
    reviews: 356,
    image: "🎮",
    category: "gaming",
    inStock: true,
    isNew: false,
    features: ["7 pulgadas OLED", "64GB", "Dock incluido"],
    description: "Consola híbrida con pantalla OLED mejorada y mayor almacenamiento"
  }
];
