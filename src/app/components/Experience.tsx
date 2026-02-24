import { ExternalLink, Target, Rocket, BookOpen, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const roles = [
    {
      text: 'Стратегия цифровой трансформации и технологического развития',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      text: 'Внедрение BIM-процессов, координация команд',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      text: 'Разработка стандартов, методологий, обучающих программ',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500'
    },
    {
      text: 'Консалтинг по оптимизации проектных процессов',
      icon: Lightbulb,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const companies = [
    {
      name: 'BIM Solutions Group',
      description: 'Технологический консалтинг и внедрение BIM для девелоперов',
      link: '#',
      role: 'Технический директор',
      year: '2020 — н.в.'
    },
    {
      name: 'Digital Construction Lab',
      description: 'R&D-центр инновационных решений для цифровизации',
      link: '#',
      role: 'Основатель',
      year: '2018 — н.в.'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
            Моя роль
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Roles list */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <div className="grid grid-cols-1 gap-4">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 pt-1.5">
                        <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/90 font-medium">
                          {role.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Companies */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
          >
            <h3 className="text-[18px] font-semibold mb-5 tracking-tight">
              Компании
            </h3>
            <div className="space-y-4">
              {companies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
                  whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                  className="group bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-[16px] font-semibold mb-1">
                          {company.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[12px] text-foreground/60">
                          <span className="font-medium text-primary">{company.role}</span>
                          <span>•</span>
                          <span>{company.year}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-[14px] text-foreground/70 leading-relaxed mb-3">
                      {company.description}
                    </p>
                    <a
                      href={company.link}
                      className="inline-flex items-center text-[13px] text-primary hover:underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Открыть сайт →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
