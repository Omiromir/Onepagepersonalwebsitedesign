import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Даурен Токмагамбетов
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Экспертиза
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Опыт
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection('speaking')} className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Публичная деятельность
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Контакты
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contacts')}
              className="hidden lg:inline-flex items-center justify-center px-5 h-10 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-[14px] font-medium"
            >
              Связаться
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <nav className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Экспертиза
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Опыт
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Проекты
            </button>
            <button onClick={() => scrollToSection('speaking')} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Публичная деятельность
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-left text-[15px] py-2 hover:text-foreground/70 transition-colors">
              Контакты
            </button>
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => scrollToSection('contacts')}
                className="w-full h-11 rounded-xl bg-primary text-primary-foreground text-[15px] font-medium"
              >
                Связаться
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
