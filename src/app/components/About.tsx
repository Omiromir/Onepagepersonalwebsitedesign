import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

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

        <div className="max-w-[800px]">
          <div className="space-y-5 text-[16px] md:text-[17px] text-foreground/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
            >
              Более 10 лет работаю в области информационного моделирования зданий (BIM) и цифровой трансформации 
              строительной отрасли. За это время прошел путь от BIM-специалиста до технического директора и основателя 
              консалтинговых компаний, специализирующихся на внедрении передовых технологий в AEC-индустрии.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
            >
              Мой подход основан на глубоком понимании как технологической, так и бизнес-стороны процессов. 
              Помогаю компаниям не просто внедрять BIM, а выстраивать целостную стратегию цифровой трансформации, 
              которая приносит измеримые результаты: сокращение сроков проектирования, снижение количества ошибок, 
              повышение качества коммуникации между участниками проекта.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.45, 0.27, 0.9] }}
            >
              Работал с проектами различного масштаба и сложности — от небольших объектов до крупных комплексов 
              площадью более 150 000 м². Консультировал международные девелоперские компании, проектные бюро и 
              строительные организации по вопросам внедрения BIM-процессов и оптимизации рабочих потоков.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
            >
              Активно участвую в развитии профессионального сообщества: выступаю на конференциях, провожу обучающие 
              программы, делюсь опытом с коллегами. Верю, что будущее строительной индустрии — в интеграции технологий 
              и человеческой экспертизы.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
