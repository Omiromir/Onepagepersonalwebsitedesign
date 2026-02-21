import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const roles = [
    'Определение стратегии цифровой трансформации и технологического развития компании',
    'Управление внедрением BIM-процессов и координация междисциплинарных команд',
    'Разработка внутренних стандартов, методологий и обучающих программ',
    'Консультирование клиентов по оптимизации проектных и строительных процессов'
  ];

  const companies = [
    {
      name: 'BIM Solutions Group',
      description: 'Технологический консалтинг и внедрение BIM для крупных девелоперских и проектных компаний',
      link: '#'
    },
    {
      name: 'Digital Construction Lab',
      description: 'R&D-центр, специализирующийся на инновационных решениях для цифровизации строительства',
      link: '#'
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
            <ul className="space-y-4">
              {roles.map((role, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-[15px] md:text-[16px] leading-relaxed text-foreground/80">
                    {role}
                  </p>
                </motion.li>
              ))}
            </ul>
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
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="text-[16px] font-semibold mb-2">
                    {company.name}
                  </h4>
                  <p className="text-[14px] text-foreground/70 leading-relaxed mb-3">
                    {company.description}
                  </p>
                  <a
                    href={company.link}
                    className="inline-flex items-center text-[14px] text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть сайт
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
