import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TariffsSectionProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
}

const TariffsSection = ({ selectedModel, onSelectModel }: TariffsSectionProps) => {
  const tariffPlans = [
    {
      name: 'Базовый',
      description: '5 фото • 1 стиль • простая обработка',
      features: ['5 готовых фотографий', '1 художественный стиль', 'Стандартная обработка'],
      price: 'от 1990₽',
      color: 'bg-neural'
    },
    {
      name: 'Стандарт',
      description: '15 фото • 3 стиля • расширенная обработка',
      features: ['15 готовых фотографий', '3 различных стиля', 'Премиум обработка'],
      price: 'от 2990₽',
      color: 'bg-ai-blue'
    },
    {
      name: 'Премиум',
      description: '30 фото • безлимит стилей • полная обработка',
      features: ['30 готовых фотографий', 'Безлимит стилей', 'Индивидуальный подход'],
      price: 'от 3490₽',
      color: 'bg-ai-purple'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-ai-purple/10 text-ai-purple border-ai-purple/20">
            Тарифы
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Выберите свой тариф
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый тариф включает различное количество фотографий и стилей. 
            Выберите подходящий для ваших целей.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tariffPlans.map((tariff, index) => (
            <Card 
              key={tariff.name}
              className={`relative group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                selectedModel === tariff.name ? 'ring-2 ring-ai-blue shadow-lg' : ''
              }`}
              onClick={() => onSelectModel(selectedModel === tariff.name ? '' : tariff.name)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${tariff.color} rounded-t-lg`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-heading font-semibold text-gray-900 flex items-center justify-between">
                  {tariff.name}
                  {selectedModel === tariff.name && (
                    <Icon name="Check" size={20} className="text-ai-blue" />
                  )}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tariff.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {tariff.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Icon name="Sparkles" size={14} className="mr-2 text-ai-blue" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-gray-900">
                    {tariff.price}
                  </span>
                  <Button 
                    variant={selectedModel === tariff.name ? "default" : "outline"}
                    className={selectedModel === tariff.name ? "bg-ai-blue hover:bg-ai-blue/90" : ""}
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
  );
};

export default TariffsSection;