
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      description: "Los últimos modelos de todas las marcas",
      icon: "📱",
      count: "150+ productos",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=300&fit=crop",
      link: "/catalog?category=smartphones",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Accesorios",
      description: "Fundas, cargadores, cables y más",
      icon: "🔌",
      count: "200+ productos",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=300&fit=crop",
      link: "/catalog?category=accessories",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Audio",
      description: "Audífonos, parlantes y audio premium",
      icon: "🎧",
      count: "80+ productos",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=300&fit=crop",
      link: "/catalog?category=audio",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "Protección",
      description: "Vidrios templados y protectores",
      icon: "🛡️",
      count: "120+ productos",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=300&fit=crop",
      link: "/catalog?category=protection",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "Smartwatches",
      description: "Relojes inteligentes y fitness",
      icon: "⌚",
      count: "45+ productos",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=300&fit=crop",
      link: "/catalog?category=smartwatches",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Tablets",
      description: "iPads, Samsung Galaxy Tab y más",
      icon: "📲",
      count: "30+ productos",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=300&fit=crop",
      link: "/catalog?category=tablets",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Explora por <span className="text-gradient">categorías</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra exactamente lo que buscas navegando por nuestras categorías especializadas
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-0 shadow-lg hover-lift luna-shadow">
              <Link to={category.link}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`} />
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-2xl">{category.icon}</span>
                  </div>

                  {/* Category Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 mb-2">{category.description}</p>
                    <p className="text-sm text-white/80">{category.count}</p>
                  </div>
                </div>

                {/* Hover Action */}
                <div className="p-6 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Explorar categoría</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos está listo para ayudarte a encontrar el producto perfecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="luna-gradient hover:opacity-90 transition-opacity" asChild>
                <Link to="/contact">
                  Contactar asesor
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/catalog">
                  Ver todo el catálogo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
