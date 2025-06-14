
# Luna Comunicaciones

## Aplicación web de comercio electrónico para productos móviles

### Características principales:
- ✅ PWA (Progressive Web App) lista para instalar
- ✅ Carrito de compras funcional con Zustand
- ✅ Integración con WhatsApp Business
- ✅ Diseño responsive y nativo
- ✅ Navegación inferior para móviles
- ✅ Catálogo de productos con filtros
- ✅ Sin dependencias de imágenes externas

### Tecnologías utilizadas:
- React 18 + TypeScript
- Vite para build y desarrollo
- Tailwind CSS para estilos
- Shadcn/UI para componentes
- Zustand para estado global
- React Router para navegación

### Deploy en Netlify:
1. Conecta tu repositorio de GitHub
2. Netlify detectará automáticamente la configuración
3. El build se ejecutará con `npm run build`
4. La aplicación estará disponible en tu dominio de Netlify

### Estructura del proyecto:
```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas principales
├── hooks/         # Hooks personalizados
├── data/          # Datos y tipos
└── lib/           # Utilidades
```

### Variables de entorno necesarias:
Ninguna - la aplicación funciona completamente del lado del cliente.

### Comandos:
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build
