import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const projects = [
    {
      context: 'ЖК 150 000 м²',
      role: 'BIM-координатор',
      focus: 'Координация 8 дисциплин, устранение коллизий',
      tools: ['Revit', 'Navisworks', 'BIM 360']
    },
    {
      context: 'Девелопер (международный)',
      role: 'Консультант',
      focus: 'Аудит, стандарты, обучение 50+ специалистов',
      tools: ['ISO 19650', 'Change Management']
    },
    {
      context: 'Офис класса A, 80 000 м²',
      role: 'BIM-менеджер',
      focus: 'CDE, интеграция с ERP, автоматизация',
      tools: ['BIM 360', 'Power BI', 'API']
    },
    {
      context: 'Промышленный объект',
      role: 'Технический эксперт',
      focus: 'MEP-моделирование, clash detection',
      tools: ['Revit MEP', 'Navisworks']
    },
    {
      context: 'Образовательная программа',
      role: 'Разработчик курса',
      focus: 'BIM для проектировщиков, 120 часов',
      tools: ['Методология', 'Кейс-стади']
    },
    {
      context: 'Реконструкция (историческое)',
      role: 'BIM-специалист',
      focus: 'As-is модель по сканированию, проект',
      tools: ['ReCap', '3D Scanning']
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-accent/30" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
            Проекты и результаты
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.08,
                ease: [0.21, 0.45, 0.27, 0.9]
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[12px] uppercase tracking-wider text-foreground/50 font-medium mb-1">
                      Контекст
                    </div>
                    <p className="text-[15px] text-foreground/90 font-medium">
                      {project.context}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-[18px] font-bold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div>
                  <div className="text-[12px] uppercase tracking-wider text-foreground/50 font-medium mb-1">
                    Роль
                  </div>
                  <p className="text-[15px] text-foreground/90">
                    {project.role}
                  </p>
                </div>

                <div>
                  <div className="text-[12px] uppercase tracking-wider text-foreground/50 font-medium mb-1">
                    Фокус
                  </div>
                  <p className="text-[14px] text-foreground/70 leading-relaxed">
                    {project.focus}
                  </p>
                </div>

                <div>
                  <div className="text-[12px] uppercase tracking-wider text-foreground/50 font-medium mb-2">
                    Инструменты
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-foreground text-[12px] font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
