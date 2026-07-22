import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductOptions from './components/ProductOptions';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Features from './components/Features';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

// Estas rutas no son necesarias para la primera pintura de la página de
// inicio, así que se cargan bajo demanda: reduce el JS que el navegador
// tiene que descargar y ejecutar antes de que "/" quede interactivo.
const BatteryDetail = lazy(() => import('./components/BatteryDetail'));
const ScreenDetail = lazy(() => import('./components/ScreenDetail'));
const ProcessTimeline = lazy(() => import('./components/ProcessTimeline'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const ScreensPage = lazy(() => import('./components/ScreensPage'));
const NotFound = lazy(() => import('./components/NotFound'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProductOptions />
      <Catalog />
      <Services />
      <Features />
      <FAQ />
      <Location />
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Esperamos un momento para asegurarnos de que el contenido de la nueva
      // ruta ya esté montado en el DOM antes de hacer scroll hacia él.
      const timeoutId = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => window.clearTimeout(timeoutId);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // El fallback no tiene contenido visible (hereda el fondo del layout),
    // así que no se percibe como una pantalla en blanco mientras carga el
    // pequeño chunk de la ruta.
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pantallas" element={<ScreensPage />} />
        <Route path="/bateria/:id" element={<BatteryDetail />} />
        <Route path="/pantalla/:id" element={<ScreenDetail />} />
        <Route path="/proceso" element={<ProcessTimeline />} />
        <Route path="/consejos" element={<BlogList />} />
        <Route path="/consejos/:slug" element={<BlogPost />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-y-condiciones" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 bg-apple-gray dark:bg-black">
          <Navbar />
          <main className="flex-grow">
            <ScrollToTop />
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppFAB />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
