import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOptions from './components/ProductOptions';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Features from './components/Features';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import { ThemeProvider } from './components/ThemeProvider';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ProductOptions />
          <Services />
          <Catalog />
          <Features />
          <Location />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </ThemeProvider>
  );
}

