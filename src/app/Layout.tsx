import { Outlet } from 'react-router';
import { Navigation } from './components/Navigation';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeProvider } from './context/ThemeContext';

export function Layout() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <Navigation />
      <Outlet />
    </ThemeProvider>
  );
}