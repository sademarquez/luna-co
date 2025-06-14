
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, Shield, Truck, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Wrench,
      title: "Reparación de pantallas",
      description: "Cambio de pantallas con repuestos originales y garantía de 6 meses",
      price: "Desde $80.000",
      time: "1-2 horas",
      rating: 4.9,
      features: ["Repuestos originales", "Garantía 6 meses", "Servicio express"],
      badge: "🔧 Más solicitado"
    },
    {
      id: 2,
      icon: Shield,
      title: "Liberación de equipos",
      description: "Liberamos tu celular para cualquier operador de forma segura",
      price: "Desde $30.000",
      time: "30 min",
      rating: 4.8,
      features: ["100% seguro", "Todos los operadores", "Sin perder garantía"],
      badge: "🔓 Rápido y seguro"
    },
    {
      id: 3,
      icon: Clock,
      title: "Diagnóstico gratuito",
      description: "Evaluamos tu equipo sin costo para determinar la falla exacta",
      price: "Gratis",
      time: "15 min",
      rating: 5.0,
      features: ["Sin compromiso", "Expertos certificados", "Reporte detallado"],
      badge: "✅ 100% gratis"
    },
    {
      id: 4,
      icon: Truck,
      title: "Servicio a domicilio",
      description: "Recogemos y entregamos tu equipo reparado en tu casa u oficina",
      price: "Desde $15.000",
      time: "Mismo día",
      rating: 4.7,
      features: ["Recogida gratis", "Entrega segura", "Cobertura ciudad"],
      badge: "🏠 A domicilio"
    }
  ];

  const whyChooseUs = [
    {
      icon: "🏆",
      title: "10+ años de experiencia",
      description: "Más de una década reparando dispositivos móviles"
    },
    {
      icon: "⚡",
      title: "Servicio express",
      description: "La mayoría de reparaciones en menos de 2 horas"
    },
    {
      icon: "🛡️",
      title: "Garantía extendida",
      description: "Hasta 6 meses de garantía en todas las reparaciones"
    },
    {
      icon: "👨‍🔧",
      title: "Técnicos certificados",
      description: "Personal capacitado y certificado por las marcas"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            🔧 Servicios técnicos
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Expertos en <span className="text-gradient">reparaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Devolvemos la vida a tu dispositivo con el mejor servicio técnico especializado, 
            repuestos originales y garantía extendida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group overflow-hidden border-0 shadow-lg hover-lift luna-shadow">
                <div className="p-6 space-y-4">
                  {/* Badge */}
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                    {service.badge}
                  </Badge>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & Time */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="font-bold text-primary">{service.price}</p>
                      <p className="text-xs text-gray-500">⏱️ {service.time}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{service.rating}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full mt-4 luna-gradient hover:opacity-90 transition-opacity" size="sm">
                    Solicitar servicio
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos el centro de servicios técnicos más confiable de la ciudad, 
              con miles de clientes satisfechos y la mejor tecnología.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">¿Tu dispositivo necesita reparación?</h4>
              <p className="text-gray-600 mb-6">
                Agenda tu cita online o visítanos en nuestra tienda. 
                Diagnóstico gratuito y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="luna-gradient hover:opacity-90 transition-opacity" asChild>
                  <Link to="/services">
                    Ver todos los servicios
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Agendar cita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
