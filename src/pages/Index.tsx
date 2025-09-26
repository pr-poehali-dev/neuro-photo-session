import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedModel, setSelectedModel] = useState('');

  const aiModels = [
    {
      name: 'DALL-E 3',
      description: 'Фотореалистичные портреты высокого качества',
      features: ['Высокая детализация', 'Естественные позы', 'Профессиональное освещение'],
      price: 'от 2990₽',
      color: 'bg-ai-blue'
    },
    {
      name: 'Midjourney',
      description: 'Художественные и стилизованные изображения',
      features: ['Творческие стили', 'Уникальная эстетика', 'Концептуальные решения'],
      price: 'от 3490₽',
      color: 'bg-ai-purple'
    },
    {
      name: 'Stable Diffusion',
      description: 'Гибкая настройка и кастомизация',
      features: ['Точный контроль', 'Быстрая генерация', 'Множество стилей'],
      price: 'от 1990₽',
      color: 'bg-neural'
    }
  ];

  const portfolioItems = [
    {
      image: '/img/95244687-78a6-4b0d-8867-542a0c96df1b.jpg',
      title: 'Профессиональные портреты',
      model: 'DALL-E 3',
      style: 'Студийная съёмка'
    },
    {
      image: '/img/f6418479-b5a5-43e7-bee5-4f670aeaee49.jpg',
      title: 'Художественные стили',
      model: 'Midjourney',
      style: 'Концептуальное искусство'
    },
    {
      image: '/img/0280b878-7bd0-451a-b992-5f90664ea559.jpg',
      title: 'Футуристические образы',
      model: 'Stable Diffusion',
      style: 'Sci-Fi эстетика'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Hero Section */}
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
              <Button size="lg" className="bg-ai-blue hover:bg-ai-blue/90 text-white px-8 py-4 text-lg">
                <Icon name="Camera" size={20} className="mr-2" />
                Создать фотосессию
              </Button>
              <Button variant="outline" size="lg" className="border-ai-blue text-ai-blue hover:bg-ai-blue/5 px-8 py-4 text-lg">
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

      {/* AI Models Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-ai-purple/10 text-ai-purple border-ai-purple/20">
              AI-модели
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Выберите свою AI-модель
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждая модель обладает уникальными возможностями и стилистикой. 
              Выберите подходящую для вашей задачи.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiModels.map((model, index) => (
              <Card 
                key={model.name}
                className={`relative group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  selectedModel === model.name ? 'ring-2 ring-ai-blue shadow-lg' : ''
                }`}
                onClick={() => setSelectedModel(selectedModel === model.name ? '' : model.name)}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${model.color} rounded-t-lg`}></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading font-semibold text-gray-900 flex items-center justify-between">
                    {model.name}
                    {selectedModel === model.name && (
                      <Icon name="Check" size={20} className="text-ai-blue" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Sparkles" size={14} className="mr-2 text-ai-blue" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-heading font-bold text-gray-900">
                      {model.price}
                    </span>
                    <Button 
                      variant={selectedModel === model.name ? "default" : "outline"}
                      className={selectedModel === model.name ? "bg-ai-blue hover:bg-ai-blue/90" : ""}
                    >
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-neural/10 text-neural border-neural/20">
              Портфолио
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Примеры наших работ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Посмотрите на результаты работы различных AI-моделей и выберите стиль, 
              который подходит именно вам.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {item.model}
                    </Badge>
                    <span className="text-sm text-gray-200">{item.style}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-ai-blue via-ai-purple to-neural text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Готовы создать уникальные фотографии?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Начните свою нейрофотосессию прямо сейчас. Выберите стиль, 
              загрузите фото и получите результат за 24 часа.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="bg-white text-ai-blue hover:bg-white/90 px-8 py-4 text-lg">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Camera" size={24} className="mr-2 text-ai-blue" />
            <span className="text-xl font-heading font-semibold">Нейрофотосессия</span>
          </div>
          <p className="text-gray-400">
            © 2025 Нейрофотосессия. Создано с помощью передовых AI-технологий.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;