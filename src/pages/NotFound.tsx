
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-luna-deep-black via-luna-tech-black to-blue-900 text-white">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="text-9xl font-bold text-blue-500 opacity-20">404</div>
        <h1 className="text-4xl font-bold mb-4">Página No Encontrada</h1>
        <p className="text-xl text-gray-300 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="cta-button">
              <Home className="w-4 h-4 mr-2" />
              Ir al Inicio
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver Atrás
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
