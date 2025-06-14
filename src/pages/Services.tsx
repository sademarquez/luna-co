
import React from 'react';
import { Wrench, Shield, Clock, Star, CheckCircle, Phone } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Reparación de Pantallas',
      description: 'Cambio de pantallas LCD y OLED para smartphones y tablets',
      price: 'Desde $150.000',
      duration: '30-60 min',
      warranty: '6 meses',
      icon: '📱',
      features: ['Pantallas originales', 'Instalación profesional', 'Prueba de calidad', 'Garantía extendida']
    },
    {
      id: 2,
      title: 'Cambio de Batería',
      description: 'Reemplazo de baterías originales y compatibles',
      price: 'Desde $80.000',
      duration: '20-30 min',
      warranty: '12 meses',
      icon: '🔋',
      features: ['Baterías certificadas', 'Calibración incluida', 'Diagnóstico gratuito', 'Instalación rápida']
    },
    {
      id: 3,
      title: 'Reparación de Conectores',
      description: 'Reparación de puertos de carga, audio y conectores',
      price: 'Desde $120.000',
      duration: '45-90 min',
      warranty: '6 meses',
      icon: '🔌',
      features: ['Soldadura profesional', 'Conectores originales', 'Prueba exhaustiva', 'Limpieza incluida']
    },
    {
      id: 4,
      title: 'Liberación de Equipos',
      description: 'Liberación por IMEI para todas las operadoras',
      price: 'Desde $50.000',
      duration: '24-48 horas',
      warranty: 'Permanente',
      icon: '🔓',
      features: ['Todas las marcas', 'Proceso seguro', 'Verificación IMEI', 'Soporte técnico']
    },
    {
      id: 5,
      title: 'Actualización de Software',
      description: 'Instalación de ROMs, actualizaciones y optimización',
      price: 'Desde $40.000',
      duration: '60-120 min',
      warranty: '3 meses',
      icon: '⚙️',
      features: ['Software original', 'Backup de datos', 'Optimización', 'Configuración']
    },
    {
      id: 6,
      title: 'Diagnóstico Completo',
      description: 'Evaluación técnica completa del dispositivo',
      price: 'Gratuito*',
      duration: '15-30 min',
      warranty: 'N/A',
      icon: '🔍',
      features: ['Análisis hardware', 'Prueba de software', 'Reporte detallado', 'Recomendaciones']
    }
  ];

  const whyChooseUs = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: 'Técnicos Certificados',
      description: 'Más de 10 años de experiencia en reparación de dispositivos móviles'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Garantía Extendida',
      description: 'Hasta 12 meses de garantía en repuestos y mano de obra'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: 'Servicio Rápido',
      description: 'La mayoría de reparaciones se completan el mismo día'
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: 'Repuestos Originales',
      description: 'Solo utilizamos repuestos originales y de la más alta calidad'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios Técnicos Profesionales
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Reparación especializada para smartphones, tablets y dispositivos móviles
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Diagnóstico
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Ver Garantías
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos una amplia gama de servicios técnicos con la mejor calidad y garantía del mercado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Pricing and Info */}
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Shield className="w-4 h-4" />
                            <span>{service.warranty}</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Button className="w-full luna-gradient hover:opacity-90 transition-opacity">
                        Solicitar Servicio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
              <p className="text-xl text-gray-600">
                La confianza de miles de clientes nos respalda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso</h2>
              <p className="text-xl text-gray-600">
                Proceso transparente y eficiente en 4 simples pasos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico',
                  description: 'Evaluación gratuita y detallada del dispositivo',
                  icon: '🔍'
                },
                {
                  step: '02',
                  title: 'Cotización',
                  description: 'Presupuesto transparente sin costos ocultos',
                  icon: '💰'
                },
                {
                  step: '03',
                  title: 'Reparación',
                  description: 'Servicio técnico profesional con repuestos originales',
                  icon: '🔧'
                },
                {
                  step: '04',
                  title: 'Entrega',
                  description: 'Pruebas de calidad y garantía extendida',
                  icon: '✅'
                }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full">
                      <div className="flex justify-center">
                        <div className="w-12 h-px bg-primary"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas Reparar tu Dispositivo?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contáctanos ahora y recibe un diagnóstico gratuito. 
              Nuestros técnicos están listos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                WhatsApp
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

export default Services;
