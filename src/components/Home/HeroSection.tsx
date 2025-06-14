
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Zap, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Los últimos smartphones",
      subtitle: "con la tecnología más avanzada",
      description: "Descubre nuestra colección premium de celulares con las mejores marcas y precios increíbles",
      cta: "Ver Catálogo",
      link: "/catalog",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      badge: "🔥 Nuevos modelos",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Servicios técnicos",
      subtitle: "especializados y confiables",
      description: "Reparamos tu dispositivo con garantía y repuestos originales. Diagnóstico gratuito.",
      cta: "Ver Servicios",
      link: "/services",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop",
      badge: "🔧 Expertos certificados",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Accesorios premium",
      subtitle: "para proteger tu inversión",
      description: "Fundas, protectores, cargadores y más. Todo lo que necesitas en un solo lugar.",
      cta: "Ver Accesorios",
      link: "/catalog?category=accessories",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop",
      badge: "✨ Calidad garantizada",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                {currentHero.badge}
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">{currentHero.title}</span>
                <br />
                <span className="text-gray-700">{currentHero.subtitle}</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {currentHero.description}
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">Garantía oficial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium">Envío gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="text-sm font-medium">Soporte 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="luna-gradient hover:opacity-90 transition-opacity group">
                <Link to={currentHero.link}>
                  {currentHero.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contactar asesor
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">4.9/5 (2,341 reseñas)</span>
              </div>
              <div className="text-sm text-gray-600">
                +10,000 clientes satisfechos
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="relative z-10 animate-fade-in">
              <div className="relative">
                <img
                  src={currentHero.image}
                  alt={currentHero.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl hover-lift"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${currentHero.gradient} opacity-20 rounded-3xl`} />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center floating-animation">
                  <div className="text-center">
                    <div className="text-2xl">📱</div>
                    <div className="text-xs font-semibold">Premium</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-24 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center floating-animation" style={{ animationDelay: '1s' }}>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">-30%</div>
                    <div className="text-xs">Descuento</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
