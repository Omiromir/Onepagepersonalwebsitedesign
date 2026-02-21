import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const projects = [
    {
      context: 'Крупный жилой комплекс, 150 000 м²',
      role: 'BIM-координатор проекта',
      focus: 'Координация 8 проектных дисциплин, устранение коллизий, контроль сроков',
      tools: ['Revit', 'Navisworks', 'BIM 360', 'Dynamo']
    },
    {
      context: 'Международная девелоперская компания',
      role: 'Консультант по цифровой трансформации',
      focus: 'Аудит процессов, разработка BIM-стандартов, обучение 50+ специалистов',
      tools: ['Стратегия', 'ISO 19650', 'Change Management']
    },
    {
      context: 'Офисный комплекс класса A, 80 000 м²',
      role: 'Главный BIM-менеджер',
      focus: 'Настройка CDE, интеграция с ERP, автоматизация рутинных задач',
      tools: ['BIM 360', 'Revit', 'Power BI', 'API']
    },
    {
      context: 'Промышленный объект',
      role: 'Технический эксперт',
      focus: 'Сложное MEP-моделирование, clash detection, as-built документация',
      tools: ['Revit MEP', 'Navisworks', 'Point Cloud']
    },
    {
      context: 'Образовательный проект',
      role: 'Разработчик программы обучения',
      focus: 'Создание курса по BIM для проектировщиков, 120 часов теории и практики',
      tools: ['Методология', 'Autodesk', 'Кейс-стади']
    },
    {
      context: 'Реконструкция исторического здания',
      role: 'BIM-специалист',
      focus: 'Создание as-is модели по лазерному сканированию, проектное решение',
      tools: ['ReCap', 'Revit', '3D Scanning']
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
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-foreground/50 font-medium mb-1">
                    Контекст
                  </div>
                  <p className="text-[15px] text-foreground/90">
                    {project.context}
                  </p>
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
                        className="inline-flex px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[12px] font-medium"
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
