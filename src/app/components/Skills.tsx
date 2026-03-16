import { Code, Palette, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const skillsData = [
  // Desarrollo Frontend
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 65, category: 'frontend' },
  { name: 'React', level: 65, category: 'frontend' },
  { name: 'Responsive Design', level: 82, category: 'frontend' },
  { name: 'Tailwind & Bootstrap CSS', level: 68, category: 'frontend' },
  
  // Backend
  { name: 'PHP', level: 70, category: 'backend' },
  { name: 'WordPress', level: 85, category: 'backend' },
  { name: 'REST APIs', level: 65, category: 'backend' },
  { name: 'MySQL', level: 60, category: 'backend' },
  
  // Diseño & Herramientas
  { name: 'Figma', level: 60, category: 'design' },
  { name: 'UI Design', level: 78, category: 'design' },
  { name: 'GitHub', level: 65, category: 'tools' },
  { name: 'Elementor', level: 62, category: 'tools' },
  { name: 'WooCommerce', level: 80, category: 'tools' },
];

interface CircularProgressProps {
  percentage: number;
  label: string;
  delay?: number;
}

function CircularProgress({ percentage, label, delay = 0 }: CircularProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const increment = percentage / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          setProgress(percentage);
          clearInterval(timer);
        } else {
          setProgress(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, percentage, delay]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg className="transform -rotate-90 w-full h-full">
          {/* Background circle */}
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-100"
          />
          {/* Progress circle */}
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="text-[#c0576f] transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl bg-gradient-to-br from-[#c0576f] to-[#7e2f56] bg-clip-text text-transparent">
            {progress}%
          </span>
        </div>
      </div>
      <p className="mt-4 text-center text-[#e48679]">{label}</p>
    </div>
  );
}

export function Skills() {
  const { t } = useTranslation();
  const frontendSkills = skillsData.filter(s => s.category === 'frontend');
  const backendSkills = skillsData.filter(s => s.category === 'backend');
  const designSkills = skillsData.filter(s => s.category === 'design');

  const categories = [
    {
      id: 'frontend',
      title: t('skills.frontend'),
      icon: Code,
      skills: frontendSkills,
      color: '#c0576f'
    },
    {
      id: 'backend',
      title: t('skills.backend'),
      icon: Server,
      skills: backendSkills,
      color: '#7e2f56'
    },
    {
      id: 'tools',
      title: t('skills.tools'),
      icon: Palette,
      skills: designSkills,
      color: '#e48679'
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 text-[#470d3b] dark:text-[#e48679]">
            {t('skills.section')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Skills Categories with Circular Progress */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="mb-12 flex items-center justify-center gap-3">
                  <div
                    className="p-3 text-white rounded-xl"
                    style={{ backgroundColor: category.color }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-3xl tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + index * 0.1
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-xl  hover:bg-white dark:hover:bg-gray-700 dark:hover:shadow-2xl transition-all duration-300"
                    >
                      <CircularProgress
                        percentage={skill.level}
                        label={skill.name}
                        delay={categoryIndex * 200 + index * 100}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center p-8 bg-gradient-to-r from-[#c0576f]/5 via-[#e48679]/5 to-[#470d3b]/5 rounded-2xl border border-[#c0576f]/10"
        >
          <p className="text-gray-600 dark:text-[#c0576f] leading-relaxed max-w-3xl mx-auto">
            {t('skills.learning')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
