import { ArrowRight, Mic2, Users2, Award, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Speaking() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const activities = [
    {
      text: 'Спикер конференций и форумов по BIM и цифровизации',
      icon: Mic2,
      color: 'from-blue-500 to-cyan-500',
      count: '15+'
    },
    {
      text: 'Мастер-классы и воркшопы для AEC-индустрии',
      icon: Users2,
      color: 'from-purple-500 to-pink-500',
      count: '25+'
    },
    {
      text: 'Эксперт панельных дискуссий и круглых столов',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      count: '10+'
    },
    {
      text: 'Ментор Construction Tech стартапов',
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500',
      count: '8'
    },
    {
      text: 'Публикации в профильных изданиях',
      icon: BookOpen,
      color: 'from-amber-500 to-yellow-500',
      count: '20+'
    }
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
    <section id="speaking" className="py-16 md:py-20 lg:py-24 bg-accent/30" ref={ref as any}>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Activities Grid */}
          <div className="lg:col-span-8">
            <motion.p
              className="text-[16px] md:text-[17px] text-foreground/80 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
            >
              Делюсь опытом в BIM и цифровизации. Открыт к приглашениям на мероприятия.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative">
                      <div className="flex items-start gap-3 mb-3">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Count badge */}
                        <div className="ml-auto">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[12px] font-bold">
                            {activity.count}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-[14px] leading-relaxed text-foreground/80">
                        {activity.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="sticky top-24 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-6 md:p-8">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4">
                  <Mic2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[20px] font-semibold mb-2">
                  Приглашение на выступление
                </h3>
                <p className="text-[14px] text-foreground/70 leading-relaxed">
                  Готов выступить на вашей конференции или провести воркшоп для вашей команды.
                </p>
              </div>

              <motion.button
                onClick={scrollToContacts}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-[15px] font-medium shadow-lg hover:shadow-xl"
              >
                Связаться со мной
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
