
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, Tag, ShoppingCart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

const BottomNavigation = () => {
  const location = useLocation();
  const { getItemCount } = useCart();
  const cartCount = getItemCount();

  const navItems = [
    {
      path: '/',
      icon: Home,
      label: 'Inicio',
      active: location.pathname === '/'
    },
    {
      path: '/catalog',
      icon: Grid3X3,
      label: 'Catálogo',
      active: location.pathname === '/catalog'
    },
    {
      path: '/offers',
      icon: Tag,
      label: 'Ofertas',
      active: location.pathname === '/offers'
    },
    {
      path: '/cart',
      icon: ShoppingCart,
      label: 'Carrito',
      active: location.pathname === '/cart',
      badge: cartCount
    },
    {
      path: '/about',
      icon: User,
      label: 'Nosotros',
      active: location.pathname === '/about'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-strong border-t border-white/20 px-4 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300 min-w-[60px] ${
                  item.active
                    ? 'text-blue-400 bg-blue-500/20 transform scale-105'
                    : 'text-gray-500 hover:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${item.active ? 'animate-pulse' : ''}`} />
                  {item.badge && item.badge > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-4 h-4 text-xs p-0 flex items-center justify-center luna-gradient animate-bounce">
                      {item.badge > 99 ? '99+' : item.badge}
                    </Badge>
                  )}
                  {item.active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                  )}
                </div>
                <span className={`text-xs mt-1 font-medium ${
                  item.active ? 'text-blue-400' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
