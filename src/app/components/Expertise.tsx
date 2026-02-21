import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const expertiseAreas = [
    {
      title: 'BIM-моделирование',
      description: 'Разработка и координация сложных информационных моделей зданий. Стандартизация процессов моделирования и контроль качества.'
    },
    {
      title: 'Цифровая трансформация',
      description: 'Стратегическое планирование и внедрение цифровых технологий в строительные компании. Аудит текущих процессов и roadmap развития.'
    },
    {
      title: 'Консалтинг и аудит',
      description: 'Экспертная оценка BIM-процессов, анализ эффективности рабочих процессов. Рекомендации по оптимизации и стандартизации.'
    },
    {
      title: 'Управление проектами',
      description: 'Координация междисциплинарных команд, контроль сроков и качества. Внедрение методологий Lean и Agile в строительстве.'
    },
    {
      title: 'Обучение специалистов',
      description: 'Разработка программ обучения для BIM-специалистов различных уровней. Практические воркшопы и корпоративное обучение.'
    },
    {
      title: 'Стандартизация процессов',
      description: 'Создание BIM-стандартов, регламентов и библиотек компонентов. Разработка внутренних нормативных документов.'
    },
    {
      title: 'Технологический стек',
      description: 'Экспертиза в Revit, Navisworks, BIM 360, Dynamo. Интеграция с ERP и системами управления строительством.'
    },
    {
      title: 'Анализ данных',
      description: 'Извлечение и обработка данных из BIM-моделей. Создание аналитических отчетов для принятия управленческих решений.'
    },
    {
      title: 'Коллаборация',
      description: 'Настройка эффективного взаимодействия между проектировщиками, подрядчиками и заказчиками. CDE и облачные платформы.'
    },
    {
      title: 'Инновации в AEC',
      description: 'Внедрение передовых технологий: AR/VR, IoT, машинное обучение. Оценка и пилотирование новых решений.'
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-20 lg:py-24 bg-accent/30" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
            Спектр экспертности
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.05,
                ease: [0.21, 0.45, 0.27, 0.9]
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[16px] font-semibold mb-2.5 tracking-tight">
                {area.title}
              </h3>
              <p className="text-[14px] text-foreground/70 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
