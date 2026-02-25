import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const badges = [
    'BIM-моделирование',
    'Стратегия цифровизации',
    'Консалтинг AEC',
    'Управление проектами',
    'Обучение и экспертиза',
    'Внедрение технологий'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }
    }
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.2] tracking-tight mb-4"
            >
              Даурен Токмагамбетов
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-[17px] md:text-[18px] text-foreground/70 leading-relaxed mb-8 max-w-[560px]"
            >
              Технический директор и основатель. Внедряю BIM и цифровые технологии в строительные проекты.
            </motion.p>

            {/* Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-10"
            >
              {badges.map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-[13px] font-medium"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-[15px] font-medium"
              >
                Изучить мой опыт
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="relative aspect-[4/5] max-w-[400px] mx-auto lg:ml-auto rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTA1NTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Даурен Токмагамбетов"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
