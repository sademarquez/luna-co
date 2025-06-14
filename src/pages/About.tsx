
import React from 'react';
import { Users, Award, Clock, Heart, Shield, Star } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10,000+', label: 'Clientes Satisfechos' },
    { icon: <Award className="w-8 h-8" />, number: '10+', label: 'Años de Experiencia' },
    { icon: <Clock className="w-8 h-8" />, number: '24/7', label: 'Soporte Técnico' },
    { icon: <Heart className="w-8 h-8" />, number: '99%', label: 'Satisfacción del Cliente' }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la honestidad y transparencia en cada transacción.'
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: 'Calidad',
      description: 'Solo ofrecemos productos originales y servicios técnicos de la más alta calidad.'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Servicio al Cliente',
      description: 'Nuestro equipo está comprometido con brindar una experiencia excepcional en cada interacción.'
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: 'Innovación',
      description: 'Nos mantenemos a la vanguardia de la tecnología para ofrecer las mejores soluciones.'
    }
  ];

  const team = [
    {
      name: 'Carlos Luna',
      role: 'Fundador y CEO',
      experience: '15 años en tecnología móvil',
      image: '/api/placeholder/200/200',
      description: 'Visionario tecnológico con pasión por brindar las mejores soluciones móviles.'
    },
    {
      name: 'María González',
      role: 'Directora de Servicios Técnicos',
      experience: '12 años en reparaciones',
      image: '/api/placeholder/200/200',
      description: 'Experta en diagnóstico y reparación de dispositivos móviles de todas las marcas.'
    },
    {
      name: 'Andrés Rodríguez',
      role: 'Gerente de Ventas',
      experience: '8 años en retail tecnológico',
      image: '/api/placeholder/200/200',
      description: 'Especialista en asesoramiento personalizado y soluciones a medida.'
    },
    {
      name: 'Sofía Martínez',
      role: 'Atención al Cliente',
      experience: '6 años en servicio al cliente',
      image: '/api/placeholder/200/200',
      description: 'Comprometida con brindar una experiencia excepcional a cada cliente.'
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
                Sobre Luna Comunicaciones
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Más de 10 años siendo el aliado tecnológico de confianza para miles de familias colombianas
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Luna Comunicaciones nació en 2014 con una visión clara: democratizar el acceso a la tecnología móvil 
                      en Colombia. Lo que comenzó como una pequeña tienda en el centro de Bogotá, hoy se ha convertido en 
                      una empresa reconocida por su calidad, confianza y excelente servicio al cliente.
                    </p>
                    <p>
                      Nuestro fundador, Carlos Luna, identificó la necesidad de un servicio integral que no solo vendiera 
                      dispositivos, sino que también ofreciera soporte técnico especializado y asesoramiento personalizado. 
                      Esta filosofía nos ha llevado a ser la primera opción de miles de clientes.
                    </p>
                    <p>
                      A lo largo de estos años, hemos evolucionado constantemente, incorporando las últimas tecnologías 
                      y ampliando nuestros servicios para satisfacer las crecientes necesidades de nuestros clientes. 
                      Desde reparaciones especializadas hasta la venta de los dispositivos más innovadores del mercado.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <div className="text-8xl">🏪</div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2014
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Números que nos Respaldan</h2>
              <p className="text-xl text-gray-600">
                La confianza de nuestros clientes es nuestro mayor logro
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada decisión y acción en Luna Comunicaciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
              <p className="text-xl text-gray-600">
                Profesionales apasionados por la tecnología y el servicio al cliente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-3xl">👨‍💼</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <Card className="luna-gradient text-white">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Democratizar el acceso a la tecnología móvil ofreciendo productos de calidad, 
                    servicios técnicos especializados y asesoramiento personalizado, contribuyendo 
                    al desarrollo tecnológico de nuestras comunidades.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">🔮</div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Ser la empresa líder en tecnología móvil en Colombia, reconocida por nuestra 
                    innovación, calidad de servicio y compromiso con la satisfacción del cliente, 
                    expandiendo nuestro alcance a nivel nacional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
              <p className="text-xl text-gray-600">
                Razones que nos convierten en tu mejor opción tecnológica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: '🛡️',
                  title: 'Productos Originales',
                  description: 'Garantizamos la autenticidad de todos nuestros productos con certificados de originalidad.'
                },
                {
                  icon: '🔧',
                  title: 'Servicio Técnico Especializado',
                  description: 'Técnicos certificados con más de 10 años de experiencia en reparación de dispositivos móviles.'
                },
                {
                  icon: '💰',
                  title: 'Precios Competitivos',
                  description: 'Ofrecemos los mejores precios del mercado sin comprometer la calidad del producto o servicio.'
                },
                {
                  icon: '🚚',
                  title: 'Envío Gratuito',
                  description: 'Envío gratis en compras superiores a $100.000 en Bogotá y ciudades principales.'
                },
                {
                  icon: '🛠️',
                  title: 'Garantía Extendida',
                  description: 'Hasta 12 meses de garantía en reparaciones y productos, respaldada por nuestro compromiso.'
                },
                {
                  icon: '📞',
                  title: 'Soporte 24/7',
                  description: 'Atención al cliente disponible todos los días para resolver tus dudas y consultas.'
                }
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes Alguna Pregunta?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está listo para ayudarte. Contáctanos y descubre por qué 
              somos la mejor opción en tecnología móvil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contáctanos
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver Ubicación
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
