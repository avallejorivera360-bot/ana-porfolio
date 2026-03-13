import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-40 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Hero Image Circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              <motion.img
                src="/images/me-cartoon.webp"
                alt="Ana Vallejo - Desarrolladora Web"
                className="w-full h-full rounded-full object-cover shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c0576f] to-transparent opacity-20 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-400 mb-4"
          >
            Disponible para trabajos freelance
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#470d3b] dark:text-white"
          >
            Ana Vallejo Rivera
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#c0576f] via-[#e48679] to-[#7e2f56] bg-clip-text text-transparent tracking-tight"
          >
            Diseñadora & Desarrolladora Web
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Construyo sitios web modernos y experiencias digitales que son hermosas, funcionales y ayudan a los negocios a crecer en línea.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px -10px rgba(200, 111, 70, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#c0576f] text-white rounded-lg hover:bg-[#7e2f56] transition-all"
            >
              Ver Proyectos
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
