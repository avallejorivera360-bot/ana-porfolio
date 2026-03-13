import { Mail, Linkedin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock submission - in a real project, this would connect to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[#470d3b] dark:text-[#e48679]">
            ¡Trabajemos Juntos!
          </h2>
          <p className="text-lg text-gray-600">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo y discutir cómo puedo ayudarte a hacer realidad tu visión.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl tracking-tight mb-6"
            >
              Contacto
            </motion.h3>
            <div className="space-y-6">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 4 }}
                href="mailto:alex.rivera@example.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-md transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-3 bg-gray-50 rounded-lg text-[#c0576f] group-hover:bg-[#e48679] dark:group-hover:bg-[#febd84] group-hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Correo Electrónico</div>
                  <div className="group-hover:text-[#c0576f] transition-colors dark:text-gray-200">
                    avallejorivera360@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 4 }}
                href="https://www.linkedin.com/in/anavallejorivera-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800  rounded-xl hover:shadow-md transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-3 bg-gray-50 rounded-lg text-[#c0576f] group-hover:bg-[#e48679] dark:group-hover:bg-[#febd84] group-hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </motion.div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                  <div className="group-hover:text-[#c0576f] transition-colors dark:text-gray-200">
                    linkedin.com/in/anavallejorivera-developer
                  </div>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl"
            >
              <h4 className="mb-4 dark:text-white">Abierto a Oportunidades</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Actualmente estoy disponible para proyectos freelance y abierta a posiciones como diseñadora/desarrolladora junior.
                Ya sea que necesites un sitio web completo, una página de aterrizaje o desarrollo personalizado de WordPress, me encantaría discutir tus necesidades.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl tracking-tight mb-6 dark:text-white">
              Enviar un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0576f] dark:focus:ring-[#febd84] focus:border-transparent dark:text-white dark:placeholder-gray-500 transition-all"
                    placeholder="Tu nombre"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0576f] dark:focus:ring-[#febd84] focus:border-transparent dark:text-white dark:placeholder-gray-500 transition-all"
                    placeholder="tu.correo@ejemplo.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0576f] dark:focus:ring-[#febd84] focus:border-transparent dark:text-white dark:placeholder-gray-500 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
                className="w-full px-8 py-4 bg-[#c0576f] dark:bg-[#febd84] text-white dark:text-[#470d3b] rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors disabled:bg-green-500 dark:disabled:bg-green-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>¡Mensaje Enviado!</>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
