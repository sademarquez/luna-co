
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-luna-tech-gray text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              🌙 Mantente conectado con las mejores ofertas
            </h3>
            <p className="text-gray-300 mb-6">
              Suscríbete a nuestro newsletter y recibe descuentos exclusivos, novedades y tips tecnológicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Tu email aquí..."
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="luna-gradient hover:opacity-90 transition-opacity">
                Suscribirme
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 luna-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Luna</h3>
                <p className="text-sm text-gray-300 -mt-1">Comunicaciones</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu aliado tecnológico de confianza. Especialistas en celulares, accesorios y servicios técnicos 
              con más de 10 años de experiencia en el mercado.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors text-sm">
                Catálogo Completo
              </Link>
              <Link to="/offers" className="text-gray-300 hover:text-white transition-colors text-sm">
                Ofertas Especiales
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                Servicios Técnicos
              </Link>
              <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors text-sm">
                Garantías
              </Link>
              <Link to="/financing" className="text-gray-300 hover:text-white transition-colors text-sm">
                Financiamiento
              </Link>
              <Link to="/support" className="text-gray-300 hover:text-white transition-colors text-sm">
                Soporte
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Categorías</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/catalog?category=smartphones" className="text-gray-300 hover:text-white transition-colors text-sm">
                📱 Smartphones
              </Link>
              <Link to="/catalog?category=accessories" className="text-gray-300 hover:text-white transition-colors text-sm">
                🔌 Accesorios
              </Link>
              <Link to="/catalog?category=cases" className="text-gray-300 hover:text-white transition-colors text-sm">
                🛡️ Fundas y Protectores
              </Link>
              <Link to="/catalog?category=chargers" className="text-gray-300 hover:text-white transition-colors text-sm">
                🔋 Cargadores
              </Link>
              <Link to="/catalog?category=headphones" className="text-gray-300 hover:text-white transition-colors text-sm">
                🎧 Audífonos
              </Link>
              <Link to="/catalog?category=tablets" className="text-gray-300 hover:text-white transition-colors text-sm">
                📲 Tablets
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Calle 123 #45-67</p>
                  <p className="text-gray-300">Centro, Bogotá</p>
                  <p className="text-gray-300">Colombia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+57 300 123 4567</p>
                  <p>+57 1 234 5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-300">info@lunacomunicaciones.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Lun - Vie: 8:00 AM - 7:00 PM</p>
                  <p>Sáb: 9:00 AM - 6:00 PM</p>
                  <p>Dom: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Luna Comunicaciones. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/returns" className="text-gray-400 hover:text-white transition-colors">
                Devoluciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
