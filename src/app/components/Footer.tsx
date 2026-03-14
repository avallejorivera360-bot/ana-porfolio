import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Ana Vallejo Rivera. {t('footer.allRightsReserved')}
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            {t('footer.designedBuilt')}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {/* <Heart size={16} className="text-[#c0576f] fill-[#c0576f]" /> */}
            </motion.div>
            Figma | Tailwind | React
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
