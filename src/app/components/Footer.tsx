import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="border-t border-border py-12 md:py-16" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="text-lg font-semibold mb-3">
              Даурен Токмагамбетов
            </div>
            <p className="text-[14px] text-foreground/60 leading-relaxed max-w-[400px]">
              BIM/AEC эксперт. Технологический консалтинг и стратегическое развитие в области цифровизации строительства.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <div className="text-[14px] font-semibold mb-4">Навигация</div>
            <nav className="flex flex-col gap-2.5">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors"
              >
                Обо мне
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors"
              >
                Экспертиза
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors"
              >
                Проекты
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-[14px] text-foreground/60 hover:text-foreground text-left transition-colors"
              >
                Контакты
              </button>
            </nav>
          </div>

          {/* Contact info */}
          <div className="md:col-span-3">
            <div className="text-[14px] font-semibold mb-4">Связь</div>
            <div className="flex flex-col gap-2.5">
              <a 
                href="mailto:contact@example.com"
                className="text-[14px] text-foreground/60 hover:text-foreground transition-colors"
              >
                Email
              </a>
              <a 
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-foreground/60 hover:text-foreground transition-colors"
              >
                Telegram
              </a>
              <a 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-foreground/60 hover:text-foreground transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <p className="text-[13px] text-foreground/50">
            © {currentYear} Даурен Токмагамбетов. Все права защищены.
          </p>
          <p className="text-[13px] text-foreground/50">
            Сайт создан с использованием современных технологий
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
