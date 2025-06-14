
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      price: 2899000,
      originalPrice: 3199000,
      discount: 10,
      rating: 4.9,
      reviews: 234,
      image: "📱",
      features: ["256GB", "Titanio Natural", "A17 Pro"],
      badge: "🔥 Más vendido",
      category: "smartphones",
      inStock: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      price: 2699000,
      originalPrice: 2999000,
      discount: 10,
      rating: 4.8,
      reviews: 189,
      image: "📱",
      features: ["512GB", "Titanium Black", "S Pen"],
      badge: "✨ Nuevo",
      category: "smartphones",
      inStock: true
    },
    {
      id: 3,
      name: "AirPods Pro (3ra Gen)",
      brand: "Apple",
      price: 699000,
      originalPrice: 799000,
      discount: 13,
      rating: 4.7,
      reviews: 156,
      image: "🎧",
      features: ["Cancelación de ruido", "USB-C", "Batería 6h"],
      badge: "🎧 Audio premium",
      category: "headphones",
      inStock: true
    },
    {
      id: 4,
      name: "Funda MagSafe iPhone 15",
      brand: "Apple",
      price: 129000,
      originalPrice: 159000,
      discount: 19,
      rating: 4.6,
      reviews: 89,
      image: "🛡️",
      features: ["MagSafe", "Cuero genuino", "Protección premium"],
      badge: "🛡️ Protección",
      category: "cases",
      inStock: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category
    });
    
    toast({
      title: "¡Producto agregado!",
      description: `${product.name} se agregó a tu carrito`,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            🌟 Productos destacados
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Los <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">más populares</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre los productos favoritos de nuestros clientes, seleccionados por su calidad, 
            funcionalidad y las mejores reseñas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-8xl">{product.image}</div>
                </div>

                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                    {product.badge}
                  </Badge>
                </div>

                {product.discount > 0 && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-red-500 text-white text-xs">
                      -{product.discount}%
                    </Badge>
                  </div>
                )}

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="icon" className="rounded-full bg-white text-gray-800 hover:bg-gray-100 shadow-lg">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.features.map((feature, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        Ahorras {formatPrice(product.originalPrice - product.price)}
                      </span>
                    </div>
                  )}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="border-gray-300 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300">
            <Link to="/catalog">
              Ver todo el catálogo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
