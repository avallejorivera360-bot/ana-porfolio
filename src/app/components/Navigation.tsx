import { Link, useLocation } from 'react-router';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-xl tracking-tight font-normal hover:text-[#c0576f] dark:hover:text-[#febd84] dark:text-white transition-colors">
            Ana Vallejo Rivera
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('projects')}
              className="font-normal hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
            >
              Proyectos
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('skills')}
              className="font-normal hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
            >
              Skills
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection('about')}
              className="font-normal hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
            >
              Acerca de
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#c0576f] dark:bg-[#febd84] text-white rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors"
            >
              Contacto
            </motion.button>

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 font-normal hover:text-[#c0576f] dark:hover:text-[#e48679] transition-colors dark:text-gray-300">
                  Proyectos
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-left py-2 font-normal hover:text-[#c0576f] dark:hover:text-[#e48679] transition-colors dark:text-gray-300">
                  Habilidades
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 font-normal hover:text-[#c0576f] dark:hover:text-[#e48679] transition-colors dark:text-gray-300">
                  Acerca de
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2.5 bg-[#c0576f] dark:bg-[#e48679] text-white rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors text-center"
                >
                  Contacto
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}