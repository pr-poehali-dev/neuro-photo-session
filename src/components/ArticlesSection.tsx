import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ArticlesSection = () => {
  const articles = [
    {
      icon: "Brain",
      title: "Что такое нейрофотосессия?",
      description: "Современный способ создания уникальных фотографий с помощью искусственного интеллекта. AI анализирует ваши исходные снимки и создает профессиональные портреты в любом стиле.",
      color: "ai-blue"
    },
    {
      icon: "Palette",
      title: "Как выбрать стиль?",
      description: "От классических портретов до футуристических образов - мы поможем подобрать стиль, который подчеркнет вашу индивидуальность и соответствует вашим целям.",
      color: "ai-purple"
    },
    {
      icon: "Briefcase",
      title: "Нейрофото для бизнеса",
      description: "Идеальное решение для создания корпоративных портретов, рекламных материалов и контента для социальных сетей. Профессиональный результат за 24 часа.",
      color: "neural"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-ai-blue/10 text-ai-blue border-ai-blue/20">
            Статьи
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Всё о нейрофотосессии
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Узнайте больше о технологиях искусственного интеллекта в фотографии 
            и как создать идеальные снимки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 bg-${article.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={article.icon as any} size={24} className={`text-${article.color}`} />
                </div>
                <CardTitle className="text-xl font-heading">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {article.description}
                </p>
                <Button variant="outline" className={`w-full group-hover:bg-${article.color} group-hover:text-white transition-colors`}>
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;