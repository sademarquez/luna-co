
import React, { useState } from 'react';
import { MessageCircle, X, Send, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // REAL WhatsApp Business number - Update with actual number
  const whatsappNumber = "573001234567"; // Replace with real Luna Comunicaciones number
  
  const quickMessages = [
    {
      title: "🛒 Consulta de producto",
      message: "Hola! Me interesa conocer más sobre sus productos disponibles. ¿Podrían enviarme información sobre precios y disponibilidad?",
      icon: "🛒"
    },
    {
      title: "🔧 Servicios técnicos",
      message: "Hola! Necesito información sobre sus servicios de reparación. ¿Qué tipos de reparaciones realizan y cuáles son los tiempos de entrega?",
      icon: "🔧"
    },
    {
      title: "📦 Estado de pedido",
      message: "Hola! Quisiera consultar el estado de mi pedido. Mi número de orden es: [Escribir número de orden]",
      icon: "📦"
    },
    {
      title: "💬 Soporte general",
      message: "Hola! Necesito ayuda con una consulta. ¿Podrían ayudarme?",
      icon: "💬"
    },
    {
      title: "🏷️ Ofertas especiales",
      message: "Hola! Me gustaría conocer las ofertas y promociones disponibles actualmente.",
      icon: "🏷️"
    },
    {
      title: "🚚 Información de envío", 
      message: "Hola! Quisiera información sobre métodos de envío, costos y tiempos de entrega a mi ciudad.",
      icon: "🚚"
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Analytics tracking (optional - for ConvertPixel integration)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: message.split('!')[0] // First part of message as label
      });
    }
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const customMessage = () => {
    const message = "Hola! Tengo una consulta personalizada sobre sus productos y servicios.";
    sendWhatsAppMessage(message);
  };

  return (
    <>
      {/* WhatsApp Floating Button - Enhanced */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-pulse delay-75"></div>
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 glass-strong border-2 border-white/20"
            size="icon"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white transition-transform duration-300 rotate-90" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white animate-bounce-subtle" />
            )}
          </Button>
        </div>
      </div>

      {/* Quick Messages Panel - Enhanced */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] animate-slide-in-right">
          <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              <div className="relative flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Luna Comunicaciones</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-sm opacity-90">En línea - Respuesta rápida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg.message)}
                  className="w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 transition-all duration-300 border border-gray-100 hover:border-green-200 hover:shadow-lg group hover-lift"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-lg">{msg.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800 group-hover:text-green-700">{msg.title}</p>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{msg.message}</p>
                    </div>
                    <Send className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                  </div>
                </button>
              ))}
              
              {/* Custom Message Button */}
              <button
                onClick={customMessage}
                className="w-full p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="font-medium">Enviar mensaje personalizado</span>
                </div>
              </button>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-green-50 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">
                  <span className="font-medium text-green-600">⚡ Respuesta en pocos minutos</span>
                </p>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;
