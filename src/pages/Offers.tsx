
import React, { useState, useEffect } from 'react';
import { Timer, Star, ShoppingCart, Heart, Tag } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45
  });

  // Mock offers data
  const featuredOffers = [
    {
      id: 1,
      title: 'Flash Sale - iPhone 15',
      originalPrice: 4500000,
      offerPrice: 3600000,
      discount: 20,
      image: '/api/placeholder/400/400',
      rating: 4.8,
      reviews: 124,
      timeLeft: '2 días',
      stock: 5,
      isLimited: true,
      features: ['128GB', 'Color Azul', 'Garantía 1 año']
    },
    {
      id: 2,
      title: 'Combo Samsung Galaxy',
      originalPrice: 3200000,
      offerPrice: 2400000,
      discount: 25,
      image: '/api/placeholder/400/400',
      rating: 4.7,
      reviews: 89,
      timeLeft: '1 día',
      stock: 8,
      isLimited: true,
      features: ['Galaxy S23', 'AirBuds incluidos', 'Funda gratis']
    }
  ];

  const dailyDeals = [
    {
      id: 3,
      name: 'AirPods Pro 2da Gen',
      originalPrice: 950000,
      offerPrice: 760000,
      discount: 20,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 256,
      timeLeft: '14h 30m',
      category: 'Audífonos'
    },
    {
      id: 4,
      name: 'Cargador Inalámbrico MagSafe',
      originalPrice: 280000,
      offerPrice: 196000,
      discount: 30,
      image: '/api/placeholder/300/300',
      rating: 4.5,
      reviews: 67,
      timeLeft: '8h 15m',
      category: 'Accesorios'
    },
    {
      id: 5,
      name: 'Funda iPhone 15 Pro',
      originalPrice: 150000,
      offerPrice: 90000,
      discount: 40,
      image: '/api/placeholder/300/300',
      rating: 4.3,
      reviews: 45,
      timeLeft: '6h 45m',
      category: 'Fundas'
    },
    {
      id: 6,
      name: 'Power Bank 20000mAh',
      originalPrice: 180000,
      offerPrice: 126000,
      discount: 30,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 78,
      timeLeft: '12h 20m',
      category: 'Accesorios'
    }
  ];

  const bundleOffers = [
    {
      id: 7,
      title: 'Bundle Completo iPhone',
      description: 'iPhone 15 + AirPods + Funda + Cargador',
      originalPrice: 5500000,
      bundlePrice: 4400000,
      savings: 1100000,
      items: [
        { name: 'iPhone 15 128GB', price: 4500000 },
        { name: 'AirPods Pro', price: 950000 },
        { name: 'Funda MagSafe', price: 150000 },
        { name: 'Cargador Inalámbrico', price: 280000 }
      ]
    },
    {
      id: 8,
      title: 'Pack Gamer Samsung',
      description: 'Galaxy S24 + Buds + Game Controller',
      originalPrice: 4800000,
      bundlePrice: 3600000,
      savings: 1200000,
      items: [
        { name: 'Galaxy S24 Ultra', price: 4200000 },
        { name: 'Galaxy Buds Pro', price: 450000 },
        { name: 'Game Controller', price: 150000 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔥 Ofertas Especiales
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Descuentos increíbles por tiempo limitado. ¡No te los pierdas!
              </p>
              
              {/* Countdown Timer */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-lg mb-4">⏰ Oferta termina en:</p>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="text-3xl font-bold">{value}</div>
                      <div className="text-sm opacity-75 capitalize">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Offers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ofertas Destacadas</h2>
              <p className="text-xl text-gray-600">
                Las mejores ofertas con descuentos de hasta 30%
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredOffers.map(offer => (
                <Card key={offer.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-1/2 relative">
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-6xl">📱</span>
                        </div>
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg px-3 py-1">
                          -{offer.discount}%
                        </Badge>
                        {offer.isLimited && (
                          <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                            Stock Limitado
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                          
                          {/* Features */}
                          <div className="space-y-2 mb-4">
                            {offer.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(offer.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {offer.rating} ({offer.reviews} reseñas)
                            </span>
                          </div>

                          {/* Stock */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Stock disponible</span>
                              <span className="font-semibold">{offer.stock} unidades</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-red-500 h-2 rounded-full" 
                                style={{ width: `${(offer.stock / 10) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-3xl font-bold text-red-600">
                                {formatPrice(offer.offerPrice)}
                              </span>
                              <span className="text-lg text-gray-500 line-through">
                                {formatPrice(offer.originalPrice)}
                              </span>
                            </div>
                            <p className="text-green-600 font-semibold">
                              Ahorras {formatPrice(offer.originalPrice - offer.offerPrice)}
                            </p>
                          </div>

                          {/* Time Left */}
                          <div className="flex items-center gap-2 text-orange-600">
                            <Timer className="w-4 h-4" />
                            <span className="font-semibold">Termina en {offer.timeLeft}</span>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <Button className="flex-1 bg-red-600 hover:bg-red-700">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Comprar Ahora
                            </Button>
                            <Button variant="outline" size="icon">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Deals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">⚡ Ofertas del Día</h2>
              <p className="text-xl text-gray-600">
                Nuevas ofertas cada día. ¡Descuentos que no puedes perder!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailyDeals.map(deal => (
                <Card key={deal.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-4xl">📱</span>
                      </div>
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                        -{deal.discount}%
                      </Badge>
                      <Badge className="absolute top-2 right-2 bg-blue-500 text-white text-xs">
                        {deal.category}
                      </Badge>
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm">
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Agregar
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {deal.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(deal.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          ({deal.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-red-600">
                            {formatPrice(deal.offerPrice)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(deal.originalPrice)}
                          </span>
                        </div>
                        <p className="text-green-600 text-sm font-semibold">
                          Ahorras {formatPrice(deal.originalPrice - deal.offerPrice)}
                        </p>
                      </div>

                      {/* Time Left */}
                      <div className="flex items-center gap-1 text-orange-600 mb-4">
                        <Timer className="w-4 h-4" />
                        <span className="text-sm font-semibold">{deal.timeLeft}</span>
                      </div>

                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Comprar Ahora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🎁 Ofertas Bundle</h2>
              <p className="text-xl text-gray-600">
                Compra más y ahorra más. Paquetes especiales con grandes descuentos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {bundleOffers.map(bundle => (
                <Card key={bundle.id} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{bundle.title}</h3>
                      <p className="text-gray-600">{bundle.description}</p>
                    </div>

                    {/* Bundle Items */}
                    <div className="space-y-3 mb-6">
                      {bundle.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm">{item.name}</span>
                          <span className="text-sm font-semibold">{formatPrice(item.price)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing Summary */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Precio individual:</span>
                        <span className="line-through text-gray-500">{formatPrice(bundle.originalPrice)}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Precio bundle:</span>
                        <span className="text-2xl font-bold text-green-600">{formatPrice(bundle.bundlePrice)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-green-600">Tu ahorro:</span>
                        <span className="text-xl font-bold text-green-600">{formatPrice(bundle.savings)}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 transition-opacity text-lg py-3">
                      <Tag className="w-5 h-5 mr-2" />
                      Comprar Bundle Completo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔔 No te pierdas nuestras ofertas
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe alertas de ofertas exclusivas, 
              descuentos especiales y lanzamientos de productos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email aquí..."
                className="flex-1 px-4 py-3 rounded-lg text-gray-800"
              />
              <Button variant="secondary" size="lg">
                Suscribirme
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Offers;
