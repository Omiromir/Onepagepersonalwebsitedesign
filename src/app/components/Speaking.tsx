import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Speaking() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const activities = [
    'Выступления на отраслевых конференциях и форумах по BIM и цифровизации строительства',
    'Проведение мастер-классов и воркшопов для специалистов AEC-индустрии',
    'Участие в экспертных панелях и круглых столах по технологическому развитию отрасли',
    'Менторство и консультирование стартапов в области Construction Tech',
    'Публикации и интервью в профильных изданиях'
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="speaking" className="py-16 md:py-20 lg:py-24" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
            Публичная деятельность
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </motion.div>

        <div className="max-w-[800px]">
          <motion.p
            className="text-[16px] md:text-[17px] text-foreground/80 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            Активно делюсь опытом и знаниями в области BIM и цифровой трансформации строительства. 
            Открыт к приглашениям для выступлений на профессиональных мероприятиях.
          </motion.p>

          <ul className="space-y-3 mb-10">
            {activities.map((activity, index) => (
              <motion.li
                key={index}
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: [0.21, 0.45, 0.27, 0.9] }}
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/80">
                  {activity}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={scrollToContacts}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl border border-border hover:bg-accent transition-colors text-[15px] font-medium"
          >
            Пригласить спикером
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
