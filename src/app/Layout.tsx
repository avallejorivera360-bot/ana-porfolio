import { Outlet, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect, useRef } from 'react';

export function Layout() {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      // Si es la primera visita en esta sesión y hay hash, limpiar para empezar en Hero
      const hasVisited = sessionStorage.getItem('visited_ana_portfolio');
      if (!hasVisited && location.hash) {
        sessionStorage.setItem('visited_ana_portfolio', 'true');
        window.history.replaceState({}, '', window.location.pathname);
        return;
      }
      
      // Marcar como visitado para futuras navegaciones
      sessionStorage.setItem('visited_ana_portfolio', 'true');
      return;
    }

    // Hacer scroll a la sección cuando el hash cambia después del initial mount
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <ThemeProvider>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="absolute top-0 left-0 z-[9999] px-3 py-2 bg-[#c0576f] text-white rounded -translate-y-full focus:translate-y-0 transition-transform"
      >
        Saltar al contenido principal
      </a>

      <AnimatedBackground />
      <Navigation />
      <main id="main-content">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}