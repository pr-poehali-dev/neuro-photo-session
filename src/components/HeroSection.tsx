import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 via-ai-purple/5 to-neural/10"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center animate-fade-in">
          <Badge className="mb-6 bg-ai-blue/10 text-ai-blue border-ai-blue/20 hover:bg-ai-blue/20">
            <Icon name="Sparkles" size={16} className="mr-2" />
            AI-технологии нового поколения
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6">
            Нейро<span className="text-ai-blue">фотосессия</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-body">
            Создайте уникальные профессиональные фотографии с помощью передовых AI-моделей. 
            Безграничные возможности стиля и творчества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-4 text-lg"
              onClick={() => onScrollToSection('order-section')}
            >
              <Icon name="Camera" size={20} className="mr-2" />
              Создать фотосессию
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-ai-blue text-ai-blue hover:bg-ai-blue/5 px-8 py-4 text-lg"
              onClick={() => onScrollToSection('portfolio-section')}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть примеры
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating AI Icons */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-ai-blue/10 rounded-full flex items-center justify-center">
          <Icon name="Brain" size={24} className="text-ai-blue" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{animationDelay: '1s'}}>
        <div className="w-12 h-12 bg-ai-purple/10 rounded-full flex items-center justify-center">
          <Icon name="Zap" size={20} className="text-ai-purple" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;