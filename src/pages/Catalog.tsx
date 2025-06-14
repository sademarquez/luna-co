
import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Catalog = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 2000000]);

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 4500000,
      originalPrice: 5000000,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 124,
      category: 'smartphones',
      brand: 'Apple',
      inStock: true,
      isNew: true,
      discount: 10
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 4200000,
      originalPrice: 4500000,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 89,
      category: 'smartphones',
      brand: 'Samsung',
      inStock: true,
      isNew: false,
      discount: 7
    },
    {
      id: 3,
      name: 'AirPods Pro 2da Gen',
      price: 850000,
      originalPrice: 950000,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 256,
      category: 'headphones',
      brand: 'Apple',
      inStock: true,
      isNew: false,
      discount: 11
    },
    {
      id: 4,
      name: 'Funda MagSafe iPhone 15',
      price: 120000,
      originalPrice: 150000,
      image: '/api/placeholder/300/300',
      rating: 4.5,
      reviews: 45,
      category: 'cases',
      brand: 'Apple',
      inStock: true,
      isNew: false,
      discount: 20
    },
    {
      id: 5,
      name: 'Cargador Inalámbrico 15W',
      price: 180000,
      originalPrice: 220000,
      image: '/api/placeholder/300/300',
      rating: 4.3,
      reviews: 67,
      category: 'chargers',
      brand: 'Anker',
      inStock: false,
      isNew: false,
      discount: 18
    },
    {
      id: 6,
      name: 'iPad Air 5ta Gen',
      price: 2800000,
      originalPrice: 3200000,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 78,
      category: 'tablets',
      brand: 'Apple',
      inStock: true,
      isNew: true,
      discount: 12
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los productos', icon: '📱' },
    { id: 'smartphones', name: 'Smartphones', icon: '📱' },
    { id: 'accessories', name: 'Accesorios', icon: '🔌' },
    { id: 'cases', name: 'Fundas', icon: '🛡️' },
    { id: 'chargers', name: 'Cargadores', icon: '🔋' },
    { id: 'headphones', name: 'Audífonos', icon: '🎧' },
    { id: 'tablets', name: 'Tablets', icon: '📲' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (product.price >= priceRange[0] && product.price <= priceRange[1])
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Catálogo Completo
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Encuentra los mejores productos tecnológicos al mejor precio
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="bg-white border-b sticky top-20 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-sm"
                  >
                    {category.icon} {category.name}
                  </Button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
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

                <div className="flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-gray-600">
                Mostrando {filteredProducts.length} de {products.length} productos
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      {/* Product Image */}
                      <div className="aspect-square bg-gray-100 flex items-center justify-center">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-4xl">📱</span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.isNew && (
                          <Badge className="bg-green-500 text-white">Nuevo</Badge>
                        )}
                        {product.discount > 0 && (
                          <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
                        )}
                        {!product.inStock && (
                          <Badge variant="secondary">Agotado</Badge>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="secondary" className="w-8 h-8">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Quick Add to Cart */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" disabled={!product.inStock}>
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Agregar
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      {/* Brand */}
                      <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                      
                      {/* Product Name */}
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button 
                          className="flex-1" 
                          disabled={!product.inStock}
                          variant={product.inStock ? "default" : "secondary"}
                        >
                          {product.inStock ? "Ver Detalles" : "Notificar Stock"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Cargar más productos
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold mb-4">No se encontraron productos</h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar tus filtros o buscar con otros términos
                </p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}>
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
