
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import BottomNavigation from '@/components/Layout/BottomNavigation';
import Index from '@/pages/Index';
import Catalog from '@/pages/Catalog';
import Services from '@/pages/Services';
import Offers from '@/pages/Offers';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Cart from '@/pages/Cart';
import NotFound from '@/pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavigation />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
