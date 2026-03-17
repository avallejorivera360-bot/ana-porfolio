import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { highlightText } from '../utils/highlightText';

export function About() {
  const { t, i18n } = useTranslation();
  
  // Palabras clave a resaltar en cada párrafo - según idioma
  const isSpanish = i18n.language.startsWith('es');
  
  const bioHighlights = isSpanish 
    ? ['diseñadora y desarrolladora web autodidacta']
    : ['self-taught web designer and developer'];
  
  const techHighlights = isSpanish 
    ? ['HTML, CSS y JavaScript', 'WordPress y comercio electrónico', 'Desarrollo de Aplicaciones Web (DAW)', 'DAW']
    : ['HTML, CSS, and JavaScript', 'WordPress and e-commerce', 'Web Application Development (DAW)', 'DAW'];
  
  const interestHighlights = isSpanish 
    ? ['interfaces claras, funcionales y fáciles de usar']
    : ['clear, functional, and easy-to-use interfaces'];
  
  const approachHighlights = isSpanish 
    ? ['diseño y desarrollo']
    : ['design and development'];
  
  const learningHighlights = isSpanish 
    ? ['desarrollando proyectos']
    : ['develop projects'];
  
  const highlights = [
    {
      title: t('about.usability'),
      description: t('about.usabilityDesc'),
      highlightTerms: isSpanish 
        ? ['interfaces claras', 'fáciles de usar']
        : ['clear', 'easy-to-use interfaces']
    },
    {
      title: t('about.code'),
      description: t('about.codeDesc'),
      highlightTerms: isSpanish 
        ? ['código limpio', 'buenas prácticas']
        : ['clean', 'best practices']
    },
    {
      title: t('about.problem'),
      description: t('about.problemDesc'),
      highlightTerms: isSpanish 
        ? ['problema técnico', 'diferentes soluciones']
        : ['technical problem', 'different solutions']
    },
    {
      title: t('about.continuous'),
      description: t('about.continuousDesc'),
      highlightTerms: isSpanish 
        ? ['nuevas herramientas', 'nuevas tecnologías']
        : ['new tools', 'new technologies']
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
            {highlightText({ text: t('about.bio'), highlightTerms: bioHighlights })}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {highlightText({ text: t('about.technologies'), highlightTerms: techHighlights })}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {highlightText({ text: t('about.interests'), highlightTerms: interestHighlights })}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {highlightText({ text: t('about.approach'), highlightTerms: approachHighlights })}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {highlightText({ text: t('about.learning'), highlightTerms: learningHighlights })}
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
                  {highlightText({ text: highlight.description, highlightTerms: highlight.highlightTerms })}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
