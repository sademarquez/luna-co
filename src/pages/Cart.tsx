
import React from 'react';
import { Minus, Plus, Trash2, ShoppingCart, ArrowLeft } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotal, getItemCount } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    const orderDetails = items.map(item => 
      `• ${item.name} - Cantidad: ${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const totalAmount = formatPrice(getTotal());
    const message = `🛒 *PEDIDO DESDE LUNA COMUNICACIONES*\n\n${orderDetails}\n\n💰 *Total: ${totalAmount}*\n\n¿Podrían confirmar disponibilidad y tiempo de entrega?`;
    
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto text-center">
              <div className="text-6xl mb-6 floating">🛒</div>
              <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
              <p className="text-gray-600 mb-8">
                Agrega algunos productos increíbles para comenzar tu compra
              </p>
              <Button asChild className="luna-gradient">
                <Link to="/catalog">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Explorar Productos
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Tu Carrito de Compras
                </h1>
                <p className="text-blue-100">
                  {getItemCount()} productos seleccionados
                </p>
              </div>
              <Button variant="outline" asChild className="glass text-white border-white/30">
                <Link to="/catalog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Seguir Comprando
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="w-full sm:w-24 h-32 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.brand}</p>
                              {item.category && (
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {item.category}
                                </Badge>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="text-lg font-bold text-blue-600">
                              {formatPrice(item.price)}
                            </div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="w-8 h-8"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-sm text-gray-600">Subtotal: </span>
                            <span className="font-semibold text-lg">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold">Resumen del Pedido</h2>
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Productos ({getItemCount()})</span>
                        <span>{formatPrice(getTotal())}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Envío</span>
                        <span>Gratis</span>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">{formatPrice(getTotal())}</span>
                    </div>

                    <Button 
                      onClick={handleWhatsAppOrder}
                      className="w-full luna-gradient text-lg py-6"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Realizar Pedido por WhatsApp
                    </Button>

                    <div className="text-xs text-gray-500 text-center mt-4">
                      Al hacer clic, serás redirigido a WhatsApp para confirmar tu pedido
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cart;
