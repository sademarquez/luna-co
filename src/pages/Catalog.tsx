
import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/data/products';

const Catalog = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'Todos', icon: '📱' },
    { id: 'smartphones', name: 'Smartphones', icon: '📱' },
    { id: 'accessories', name: 'Accesorios', icon: '🔌' },
    { id: 'cases', name: 'Fundas', icon: '🛡️' },
    { id: 'chargers', name: 'Cargadores', icon: '🔋' },
    { id: 'headphones', name: 'Audio', icon: '🎧' },
    { id: 'tablets', name: 'Tablets', icon: '📲' },
    { id: 'smartwatch', name: 'Smartwatch', icon: '⌚' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' }
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

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.brand.toLowerCase().includes(searchTerm.toLowerCase())) &&
      product.inStock
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16 lg:py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
          
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl floating"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl floating-delayed"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-responsive-4xl">
                Catálogo <span className="text-gradient bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">Premium</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 text-responsive-lg">
                Tecnología de última generación al mejor precio
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="relative glass-strong rounded-2xl p-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                  <Input
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-20 z-40 glass-strong border-b backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="glass text-sm"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className={`${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block`}>
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`text-xs lg:text-sm glass hover-glow transition-all ${
                        selectedCategory === category.id ? 'luna-gradient shadow-lg' : ''
                      }`}
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                    </Button>
                  ))}
                </div>

                <div className="w-full lg:w-48">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="glass text-sm">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Destacados</SelectItem>
                      <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                      <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                      <SelectItem value="rating">Mejor Calificados</SelectItem>
                      <SelectItem value="newest">Más Nuevos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-gray-600 text-responsive-sm">
                Mostrando {sortedProducts.length} productos disponibles
              </p>
            </div>

            <div className={`tech-grid ${
              viewMode === 'grid' 
                ? 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5' 
                : 'grid-cols-1'
            } gap-4 lg:gap-6`}>
              {sortedProducts.map(product => (
                <Card key={product.id} className="group glass hover-lift hover-glow card-3d overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 gpu-accelerated"
                          loading="lazy"
                        />
                      </div>

                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.isNew && (
                          <Badge className="neon-green text-white text-xs px-2 py-1">✨ Nuevo</Badge>
                        )}
                        {product.discount > 0 && (
                          <Badge className="bg-red-500 text-white text-xs px-2 py-1 pulse-glow">-{product.discount}%</Badge>
                        )}
                      </div>

                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <Button size="icon" variant="secondary" className="w-8 h-8 glass mb-1">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="absolute inset-x-2 bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Button 
                          size="sm" 
                          className="w-full luna-gradient text-white text-xs lg:text-sm shadow-lg"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                          Agregar
                        </Button>
                      </div>
                    </div>

                    <div className="p-3 lg:p-4 space-y-2 lg:space-y-3">
                      <p className="text-xs lg:text-sm text-gray-500 font-medium">{product.brand}</p>
                      
                      <h3 className="font-semibold text-sm lg:text-base line-clamp-2 text-responsive-sm">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 lg:w-4 lg:h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs lg:text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg lg:text-xl font-bold luna-gradient-text text-responsive-lg">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                        {product.originalPrice > product.price && (
                          <div className="flex flex-col lg:flex-row lg:items-center gap-1">
                            <span className="text-xs lg:text-sm text-gray-500 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                            <span className="text-xs lg:text-sm text-green-600 font-medium">
                              Ahorras {formatPrice(product.originalPrice - product.price)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          onClick={() => handleAddToCart(product)}
                          className="flex-1 text-xs lg:text-sm luna-gradient text-white transition-all" 
                        >
                          <ShoppingCart className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                          Agregar al Carrito
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 floating">🔍</div>
                <h3 className="text-2xl font-semibold mb-4 text-responsive-xl">No se encontraron productos</h3>
                <p className="text-gray-600 mb-6 text-responsive-base">
                  Intenta ajustar tus filtros o buscar con otros términos
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }} className="luna-gradient">
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalog;
