import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { TechStack } from './TechStack';
import { Award, Building2, Users2 } from 'lucide-react';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Award, value: '10+', label: 'Лет опыта' },
    { icon: Building2, value: '150K', label: 'м² проектов' },
    { icon: Users2, value: '50+', label: 'Обучено специалистов' }
  ];

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
            Обо мне
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side - Stats */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="space-y-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-[24px] font-bold">{stat.value}</div>
                        <div className="text-[13px] text-foreground/60">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Text */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="space-y-5 text-[16px] md:text-[17px] text-foreground/80 leading-relaxed mb-8">
              <p>
                Прошел путь от BIM-специалиста до технического директора консалтинговых компаний. Выстраиваю стратегию цифровизации с измеримыми результатами: <span className="text-primary font-semibold">−30% времени</span> на проектирование, <span className="text-primary font-semibold">−40% ошибок</span>, прозрачная коммуникация команд.
              </p>
              <p>
                Реализовал проекты от 1000 до 150 000 м². Консультирую девелоперов, проектные бюро, подрядчиков.
              </p>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
            >
              <div className="text-[13px] uppercase tracking-wider text-foreground/50 font-medium mb-4">
                Технологический стек
              </div>
              <TechStack />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
