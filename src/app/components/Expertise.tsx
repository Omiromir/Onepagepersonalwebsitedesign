import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Cuboid, Target, FileSearch, Users, GraduationCap, FileCode, Layers, BarChart3, Cloud, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

export function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const sliderRef = useRef<Slider>(null);

  const expertiseAreas = [
    {
      title: 'BIM-моделирование',
      description: 'Координация информационных моделей, стандартизация процессов, контроль качества.',
      icon: Cuboid
    },
    {
      title: 'Цифровая трансформация',
      description: 'Стратегия внедрения технологий, аудит процессов, roadmap развития.',
      icon: Target
    },
    {
      title: 'Консалтинг и аудит',
      description: 'Оценка BIM-процессов, оптимизация workflow, внедрение стандартов.',
      icon: FileSearch
    },
    {
      title: 'Управление проектами',
      description: 'Координация команд, контроль сроков, методологии Lean и Agile.',
      icon: Users
    },
    {
      title: 'Обучение специалистов',
      description: 'Программы для BIM-команд, практические воркшопы, корпоративное обучение.',
      icon: GraduationCap
    },
    {
      title: 'Стандартизация процессов',
      description: 'BIM-стандарты, регламенты, библиотеки компонентов.',
      icon: FileCode
    },
    {
      title: 'Технологический стек',
      description: 'Revit, Navisworks, BIM 360, Dynamo. Интеграция с ERP-системами.',
      icon: Layers
    },
    {
      title: 'Анализ данных',
      description: 'Обработка данных из моделей, аналитические отчеты для управления.',
      icon: BarChart3
    },
    {
      title: 'Коллаборация',
      description: 'CDE-платформы, настройка взаимодействия команд, облачные решения.',
      icon: Cloud
    },
    {
      title: 'Инновации в AEC',
      description: 'AR/VR, IoT, машинное обучение. Оценка и пилотирование технологий.',
      icon: Lightbulb
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px'
        }
      }
    ]
  };

  return (
    <section id="expertise" className="py-16 md:py-20 lg:py-24 bg-accent/30 overflow-hidden" ref={ref as any}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          className="mb-12 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.27, 0.9] }}
        >
          <div>
            <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold tracking-tight mb-3">
              Спектр экспертности
            </h2>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>

          {/* Custom Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-xl bg-card border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-xl bg-card border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="expertise-carousel"
        >
          <Slider ref={sliderRef} {...settings}>
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="px-2.5">
                  <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden h-[240px] flex flex-col">
                    {/* Background on hover */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="relative text-[16px] font-semibold mb-2.5 tracking-tight">
                      {area.title}
                    </h3>
                    <p className="relative text-[14px] text-foreground/70 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </div>

      <style>{`
        .expertise-carousel .slick-dots {
          bottom: -40px;
        }
        .expertise-carousel .slick-dots li button:before {
          font-size: 10px;
          color: hsl(var(--primary));
          opacity: 0.3;
        }
        .expertise-carousel .slick-dots li.slick-active button:before {
          opacity: 1;
          color: hsl(var(--primary));
        }
        .expertise-carousel .slick-slide > div {
          height: 100%;
        }
        .expertise-carousel .slick-list {
          margin: 0 -10px;
        }
        .expertise-carousel .slick-slide {
          padding: 0 10px;
        }
        @media (max-width: 640px) {
          .expertise-carousel .slick-list {
            margin: 0;
            overflow: hidden;
          }
          .expertise-carousel .slick-slide {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}
