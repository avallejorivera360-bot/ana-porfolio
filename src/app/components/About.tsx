import { motion } from 'motion/react';

export function About() {
  const highlights = [
    {
      title: 'Enfoque en la usabilidad',
      description: 'Diseñar interfaces claras y fáciles de usar, prestando atención a la estructura del contenido y a que la navegación sea sencilla para el usuario.'
    },
    {
      title: 'Código claro y organizado',
      description: 'Escribir código limpio y comprensible, siguiendo buenas prácticas básicas para que los proyectos sean fáciles de mantener y mejorar.'
    },
    {
      title: 'Mentalidad práctica para resolver problemas',
      description: 'Cuando surge un problema técnico, me gusta analizarlo, investigar diferentes soluciones y probar hasta encontrar la que mejor funciona en cada caso.'
    },
    {
      title: 'Aprendizaje continuo',
      description: 'Sigo ampliando mis conocimientos en desarrollo web y diseño, explorando nuevas herramientas, tecnologías y formas de mejorar mis proyectos.'
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
            Acerca de Mí
          </h2>
        </motion.div>

        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soy una diseñadora y desarrolladora web autodidacta con formación en administración de sistemas informáticos en red. Mi interés por el desarrollo web comenzó por curiosidad sobre cómo funcionan los sitios web y, con el tiempo, se convirtió en una motivación real por aprender a diseñar y construir productos digitales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Durante este proceso he estado estudiando tecnologías como HTML, CSS y JavaScript, y sigo ampliando mis conocimientos en desarrollo web, especialmente en herramientas y entornos relacionados con WordPress y comercio electrónico. Actualmente estoy cursando de forma online el grado superior de Desarrollo de Aplicaciones Web (DAW), lo que me permite seguir reforzando mi formación técnica mientras continúo aprendiendo de manera práctica.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Me interesa tanto la parte técnica de construir una web como el diseño de interfaces claras, funcionales y fáciles de usar. Disfruto especialmente del proceso de transformar una idea en un sitio web real y funcional. Para mí, un buen sitio web no se trata solo de estética, sino de crear algo útil, bien estructurado y que ofrezca una buena experiencia al usuari
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Al combinar diseño y desarrollo, intento aportar una visión práctica a los proyectos. Entender cómo se diseña una interfaz y cómo se construye técnicamente me ayuda a crear soluciones más coherentes y realistas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Actualmente sigo aprendiendo y desarrollando proyectos que me permitan mejorar mis habilidades y ganar experiencia real en el desarrollo de sitios web.
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
            Lo que Aporto a los Proyectos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
              >
                <h4 className="mb-2 text-[#c0576f] dark:text-[#e48679]">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
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
