
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
      emoji: "📱",
      badge: "🔥 Nuevos modelos",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Servicios técnicos",
      subtitle: "especializados y confiables",
      description: "Reparamos tu dispositivo con garantía y repuestos originales. Diagnóstico gratuito.",
      cta: "Ver Servicios",
      link: "/services",
      emoji: "🔧",
      badge: "🔧 Expertos certificados",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Accesorios premium",
      subtitle: "para proteger tu inversión",
      description: "Fundas, protectores, cargadores y más. Todo lo que necesitas en un solo lugar.",
      cta: "Ver Accesorios",
      link: "/catalog?category=accessories",
      emoji: "🛡️",
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
                {currentHero.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {currentHero.title}
                </span>
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
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                <Link to={currentHero.link}>
                  {currentHero.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-gray-300 hover:bg-gray-50">
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
            <div className="relative z-10">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-tr ${currentHero.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-9xl mb-4">{currentHero.emoji}</div>
                    <div className="text-2xl font-bold">{currentHero.title}</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl">📱</div>
                    <div className="text-xs font-semibold">Premium</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-24 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">-30%</div>
                    <div className="text-xs">Descuento</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20" />
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
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
