
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      details: ['Calle 123 #45-67', 'Centro, Bogotá', 'Colombia'],
      action: 'Ver en Google Maps'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfonos',
      details: ['+57 300 123 4567', '+57 1 234 5678', 'Línea WhatsApp'],
      action: 'Llamar ahora'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@lunacomunicaciones.com', 'ventas@lunacomunicaciones.com', 'soporte@lunacomunicaciones.com'],
      action: 'Enviar email'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horarios',
      details: ['Lun - Vie: 8:00 AM - 7:00 PM', 'Sáb: 9:00 AM - 6:00 PM', 'Dom: 10:00 AM - 4:00 PM'],
      action: 'Ver todos los horarios'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contáctanos
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros y resolveremos todas tus dudas
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 text-primary">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                    <p className="text-gray-600">
                      Completa el formulario y te contactaremos en menos de 24 horas
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Teléfono *</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+57 300 123 4567"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Asunto *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        >
                          <option value="">Selecciona un tema</option>
                          <option value="consulta-producto">Consulta sobre productos</option>
                          <option value="servicio-tecnico">Servicio técnico</option>
                          <option value="garantia">Garantías</option>
                          <option value="ventas">Ventas corporativas</option>
                          <option value="sugerencia">Sugerencias</option>
                          <option value="reclamo">Reclamos</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Mensaje *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe tu consulta o comentario..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full luna-gradient hover:opacity-90 transition-opacity">
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-6">
                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Nuestra Ubicación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Mapa interactivo</p>
                        <p className="text-sm text-gray-400">Calle 123 #45-67, Centro, Bogotá</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Abrir en Google Maps
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contacto Rápido</CardTitle>
                    <p className="text-gray-600">
                      ¿Necesitas ayuda inmediata? Usa estos canales directos
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat por WhatsApp
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar Ahora
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </Button>
                  </CardContent>
                </Card>

                {/* FAQ Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preguntas Frecuentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        '¿Cuáles son los tiempos de reparación?',
                        '¿Qué garantía tienen los productos?',
                        '¿Hacen envíos a todo el país?',
                        '¿Aceptan dispositivos en parte de pago?',
                        '¿Tienen servicio técnico a domicilio?'
                      ].map((question, index) => (
                        <button
                          key={index}
                          className="w-full text-left p-3 text-sm bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Horarios de Atención</h2>
                <p className="text-xl text-gray-600">
                  Estamos disponibles para atenderte en los siguientes horarios
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">🏪</div>
                    <h3 className="text-xl font-semibold mb-3">Tienda Física</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Lunes - Viernes:</strong> 8:00 AM - 7:00 PM</p>
                      <p><strong>Sábados:</strong> 9:00 AM - 6:00 PM</p>
                      <p><strong>Domingos:</strong> 10:00 AM - 4:00 PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">🔧</div>
                    <h3 className="text-xl font-semibold mb-3">Servicio Técnico</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Lunes - Viernes:</strong> 8:00 AM - 6:00 PM</p>
                      <p><strong>Sábados:</strong> 9:00 AM - 5:00 PM</p>
                      <p><strong>Domingos:</strong> Cerrado</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="text-xl font-semibold mb-3">Soporte Online</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>WhatsApp:</strong> 24/7</p>
                      <p><strong>Email:</strong> 24/7</p>
                      <p><strong>Chat Web:</strong> 8:00 AM - 10:00 PM</p>
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

export default Contact;
