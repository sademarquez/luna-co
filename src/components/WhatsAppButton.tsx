
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "573001234567"; // Replace with actual WhatsApp number
  
  const quickMessages = [
    {
      title: "🛒 Consulta de producto",
      message: "Hola! Me interesa conocer más sobre sus productos disponibles."
    },
    {
      title: "🔧 Servicios técnicos",
      message: "Hola! Necesito información sobre sus servicios de reparación."
    },
    {
      title: "📦 Estado de pedido",
      message: "Hola! Quisiera consultar el estado de mi pedido."
    },
    {
      title: "💬 Soporte general",
      message: "Hola! Necesito ayuda con una consulta."
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white animate-bounce-subtle" />
          )}
        </Button>
      </div>

      {/* Quick Messages Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Luna Comunicaciones</h3>
                  <p className="text-sm opacity-90">¿En qué te podemos ayudar?</p>
                </div>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-2">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg.message)}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-green-200"
                >
                  <p className="font-medium text-sm text-gray-800">{msg.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{msg.message}</p>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-xs text-gray-600 text-center">
                Normalmente respondemos en pocos minutos
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppButton;
