
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-strong shadow-2xl' : 'glass'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-white/10">
          <div className="flex items-center space-x-4">
            <span className="text-blue-400">📞 +57 300 123 4567</span>
            <span className="text-blue-400">📧 info@lunacomunicaciones.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400">🚚 Envío gratis en compras +$100.000</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-glow">
            <div className="w-10 h-10 luna-gradient rounded-xl flex items-center justify-center neon-blue">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl luna-gradient-text">Luna</h1>
              <p className="text-xs text-muted-foreground -mt-1">Comunicaciones</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-primary transition-all duration-300 font-medium hover-glow px-3 py-2 rounded-lg">
              Inicio
            </Link>
            <Link to="/catalog" className="hover:text-primary transition-all duration-300 font-medium hover-glow px-3 py-2 rounded-lg">
              Catálogo
            </Link>
            <Link to="/services" className="hover:text-primary transition-all duration-300 font-medium hover-glow px-3 py-2 rounded-lg">
              Servicios
            </Link>
            <Link to="/offers" className="hover:text-primary transition-all duration-300 font-medium hover-glow px-3 py-2 rounded-lg">
              Ofertas
            </Link>
            <Link to="/about" className="hover:text-primary transition-all duration-300 font-medium hover-glow px-3 py-2 rounded-lg">
              Nosotros
            </Link>
            <Link to="/contact" className="cta-button text-sm px-6 py-2 animate-cta-pulse">
              Contacto
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 pr-4 glass border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            {/* Mobile search toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 hover-glow">
              <Heart className="w-5 h-5" />
            </Button>

            {/* User */}
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 hover-glow">
              <User className="w-5 h-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 hover-glow" asChild>
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 text-xs p-0 flex items-center justify-center luna-gradient animate-pulse">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
              <Input
                placeholder="Buscar productos..."
                className="pl-10 pr-4 glass border-blue-500/30 focus:border-blue-400"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in glass-strong rounded-2xl mt-4 p-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="py-3 px-4 hover:text-primary transition-all duration-300 font-medium hover:bg-blue-500/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/catalog" 
                className="py-3 px-4 hover:text-primary transition-all duration-300 font-medium hover:bg-blue-500/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link 
                to="/services" 
                className="py-3 px-4 hover:text-primary transition-all duration-300 font-medium hover:bg-blue-500/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/offers" 
                className="py-3 px-4 hover:text-primary transition-all duration-300 font-medium hover:bg-blue-500/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Ofertas
              </Link>
              <Link 
                to="/about" 
                className="py-3 px-4 hover:text-primary transition-all duration-300 font-medium hover:bg-blue-500/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                to="/contact" 
                className="cta-button text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="border-t border-white/10 pt-4 flex items-center space-x-4 sm:hidden">
                <Button variant="ghost" size="sm" className="hover:bg-blue-500/20 hover:text-blue-400">
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritos
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-blue-500/20 hover:text-blue-400">
                  <User className="w-4 h-4 mr-2" />
                  Mi Cuenta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
