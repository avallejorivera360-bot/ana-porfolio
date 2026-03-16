import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  const highlights = [
    {
      title: t('about.usability'),
      description: t('about.usabilityDesc')
    },
    {
      title: t('about.code'),
      description: t('about.codeDesc')
    },
    {
      title: t('about.problem'),
      description: t('about.problemDesc')
    },
    {
      title: t('about.continuous'),
      description: t('about.continuousDesc')
    }
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[#470d3b] dark:text-[#e48679] text-center">
            {t('about.section')}
          </h2>
        </motion.div>

        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('about.bio')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('about.technologies')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('about.interests')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('about.approach')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('about.learning')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl tracking-tight mb-6">
            {t('about.contributions')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="mb-2 text-[#c0576f] dark:text-[#e48679]">{highlight.title}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
